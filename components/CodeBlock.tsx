type CodeBlockProps = {
  code: string;
  label: string;
};

export default function CodeBlock({ code, label }: CodeBlockProps) {
  return (
    <figure className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117]">
      <figcaption className="flex items-center justify-between border-b border-white/10 px-5 py-4 font-mono text-xs text-slate-400">
        <span>{label}</span>
        <span>TypeScript · Pseudocode</span>
      </figcaption>
      <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200 sm:p-6">
        <code>{code}</code>
      </pre>
    </figure>
  );
}
