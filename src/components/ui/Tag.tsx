export default function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono text-[var(--accent)] bg-[var(--accent-glow)] border border-[var(--accent)]/20">
      {label}
    </span>
  );
}
