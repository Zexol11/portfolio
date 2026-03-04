export default function SectionTitle({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-2">
      <p className="text-xs font-mono text-[var(--accent)] tracking-widest uppercase mb-2">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-[var(--accent)] opacity-60 rounded-full" />
    </div>
  );
}
