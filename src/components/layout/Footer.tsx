import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 mt-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} Ed Kenneth. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:ed.kenneth11@gmail.com"
            aria-label="Email"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/Zexol11"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            <GithubIcon width={18} height={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/ed-kenneth-g"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            <LinkedinIcon width={18} height={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
