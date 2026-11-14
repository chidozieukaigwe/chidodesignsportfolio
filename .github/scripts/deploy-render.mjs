import { pathToFileURL } from "node:url";
import { setTimeout as delay } from "node:timers/promises";

const pendingStatuses = new Set([
  "created",
  "queued",
  "build_in_progress",
  "pre_deploy_in_progress",
  "update_in_progress",
]);
const failedStatuses = new Set([
  "build_failed",
  "pre_deploy_failed",
  "update_failed",
  "canceled",
  "deactivated",
]);

export async function deployToRender({
  apiKey,
  serviceId,
  commit,
  request = fetch,
  sleep = delay,
  maxPolls = 120,
  pollIntervalMs = 15_000,
  log = console.log,
}) {
  if (!apiKey?.trim()) throw new Error("RENDER_API_KEY is missing.");
  if (!/^srv-[a-zA-Z0-9]+$/.test(serviceId ?? "")) {
    throw new Error("RENDER_SERVICE_ID must be a valid Render service ID.");
  }
  if (!/^[a-f0-9]{40}$/i.test(commit ?? "")) {
    throw new Error("DEPLOY_COMMIT must be a full Git commit SHA.");
  }

  const serviceUrl = `https://api.render.com/v1/services/${serviceId}/deploys`;
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  };
  const createResponse = await request(serviceUrl, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ commitId: commit }),
    signal: AbortSignal.timeout(30_000),
  });
  if (createResponse.status === 202) {
    throw new Error("Render queued the deploy without a trackable ID. Check the Render dashboard before retrying.");
  }
  if (createResponse.status !== 201) {
    throw new Error(`Render deploy request failed with HTTP ${createResponse.status}.`);
  }
  const created = await createResponse.json();
  if (typeof created.id !== "string" || !/^dep-[a-zA-Z0-9]+$/.test(created.id)) {
    throw new Error("Render did not return a valid deploy ID.");
  }

  log(`Render deploy ${created.id} started for commit ${commit}.`);
  for (let attempt = 0; attempt < maxPolls; attempt += 1) {
    const response = await request(`${serviceUrl}/${created.id}`, {
      headers,
      signal: AbortSignal.timeout(30_000),
    });
    if (!response.ok) {
      throw new Error(`Render deploy status request failed with HTTP ${response.status}.`);
    }
    const deployment = await response.json();
    const status = deployment.status;
    if (status === "live") {
      if (deployment.commit?.id?.toLowerCase() !== commit.toLowerCase()) {
        throw new Error("Render reported a live deploy without the expected commit SHA.");
      }
      log(`Render deploy ${created.id} is live.`);
      return;
    }
    if (failedStatuses.has(status)) {
      throw new Error(`Render deploy ${created.id} failed with status: ${status}.`);
    }
    if (!pendingStatuses.has(status)) {
      throw new Error(`Render deploy ${created.id} returned an unrecognised status.`);
    }
    log(`Render deploy status: ${status}.`);
    if (attempt < maxPolls - 1) await sleep(pollIntervalMs);
  }
  throw new Error(`Timed out waiting for Render deploy ${created.id}. Check the Render dashboard.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  deployToRender({
    apiKey: process.env.RENDER_API_KEY,
    serviceId: process.env.RENDER_SERVICE_ID,
    commit: process.env.DEPLOY_COMMIT,
  }).catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
