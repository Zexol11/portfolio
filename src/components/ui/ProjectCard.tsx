import { Lock, ExternalLink, Github } from "lucide-react";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/components/sections/Projects";
import clsx from "clsx";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, company, year, description, tags, isPrivate, liveUrl, repoUrl } = project;

  return (
    <div
      className={clsx(
        "group flex flex-col h-full rounded-xl border border-[var(--border)] bg-[var(--surface)]",
        "p-5 hover:border-[var(--accent)] transition-all duration-300"
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <h3 className="text-[var(--foreground)] font-semibold text-sm leading-snug">
            {title}
          </h3>
          {company && (
            <p className="text-[var(--muted)] text-xs mt-0.5">
              {company} · {year}
            </p>
          )}
          {!company && (
            <p className="text-[var(--muted)] text-xs mt-0.5">{year}</p>
          )}
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2 shrink-0">
          {isPrivate ? (
            <span className="flex items-center gap-1 text-xs text-[var(--muted)] bg-[var(--surface-alt)] px-2 py-1 rounded-md">
              <Lock size={11} />
              Private
            </span>
          ) : (
            <>
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repository"
                  className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                >
                  <Github size={16} />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live project"
                  className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-[var(--muted)] text-sm leading-relaxed flex-1 mb-4">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
}
