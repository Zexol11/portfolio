import type { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  id: string;
  href: string;
  label: string;
  icon?: ReactNode;
  external?: boolean;
  download?: string | boolean;
  variant?: "ghost" | "solid";
};

export default function SocialLink({
  id,
  href,
  label,
  icon,
  external,
  download,
  variant = "ghost",
}: Props) {
  return (
    <a
      id={id}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download}
      className={clsx(
        "inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border transition-all duration-200",
        variant === "ghost"
          ? "border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--foreground)]"
          : "border-[var(--accent)] bg-[var(--accent)] text-white hover:opacity-90"
      )}
    >
      {icon}
      {label}
    </a>
  );
}
