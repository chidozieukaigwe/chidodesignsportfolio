import assert from "node:assert/strict";
import { test } from "node:test";
import { deployToRender } from "./deploy-render.mjs";

const commit = "a".repeat(40);
const settings = {
  apiKey: "test-key",
  serviceId: "srv-test123",
  commit,
  sleep: async () => {},
  log: () => {},
};

function response(status, body) {
  return new Response(body === undefined ? null : JSON.stringify(body), { status });
}

test("deploys the specified commit and waits until it is live", async () => {
  const requests = [];
  const responses = [
    response(201, { id: "dep-test123" }),
    response(200, { status: "build_in_progress" }),
    response(200, { status: "live", commit: { id: commit } }),
  ];
  await deployToRender({
    ...settings,
    request: async (url, options) => {
      requests.push({ url, options });
      return responses.shift();
    },
  });
  assert.equal(requests.length, 3);
  assert.deepEqual(JSON.parse(requests[0].options.body), { commitId: commit });
  assert.equal(requests[1].url, "https://api.render.com/v1/services/srv-test123/deploys/dep-test123");
});

test("rejects missing credentials before making a request", async () => {
  await assert.rejects(deployToRender({ ...settings, apiKey: "" }), /RENDER_API_KEY is missing/);
});

test("reports a queued response without claiming deployment succeeded", async () => {
  await assert.rejects(
    deployToRender({ ...settings, request: async () => response(202) }),
    /queued the deploy without a trackable ID/,
  );
});

test("reports a rejected deploy request", async () => {
  await assert.rejects(
    deployToRender({ ...settings, request: async () => response(401) }),
    /HTTP 401/,
  );
});

test("rejects an invalid deploy ID", async () => {
  await assert.rejects(
    deployToRender({ ...settings, request: async () => response(201, { id: "../invalid" }) }),
    /valid deploy ID/,
  );
});

test("fails when Render reports a failed deployment", async () => {
  const responses = [response(201, { id: "dep-test123" }), response(200, { status: "build_failed" })];
  await assert.rejects(
    deployToRender({ ...settings, request: async () => responses.shift() }),
    /build_failed/,
  );
});

test("rejects unknown deployment states", async () => {
  const responses = [response(201, { id: "dep-test123" }), response(200, { status: "unknown" })];
  await assert.rejects(
    deployToRender({ ...settings, request: async () => responses.shift() }),
    /unrecognised status/,
  );
});

test("rejects a live deployment of a different commit", async () => {
  const responses = [
    response(201, { id: "dep-test123" }),
    response(200, { status: "live", commit: { id: "b".repeat(40) } }),
  ];
  await assert.rejects(
    deployToRender({ ...settings, request: async () => responses.shift() }),
    /without the expected commit SHA/,
  );
});

test("times out if the deployment never becomes live", async () => {
  const responses = [response(201, { id: "dep-test123" }), response(200, { status: "queued" })];
  await assert.rejects(
    deployToRender({ ...settings, maxPolls: 1, request: async () => responses.shift() }),
    /Timed out/,
  );
});
