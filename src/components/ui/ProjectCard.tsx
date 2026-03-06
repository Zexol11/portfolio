import { Lock, ExternalLink, Github } from "lucide-react";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/components/sections/Projects";
import clsx from "clsx";

export default function ProjectCard({ project, onClick }: { project: Project; onClick?: () => void }) {
  const { title, company, year, description, tags, isPrivate, liveUrl, repoUrl, imageUrl, images } = project;

  const displayImage = imageUrl || (images && images.length > 0 ? images[0] : null);

  return (
    <div
      onClick={onClick}
      className={clsx(
        "group flex flex-col h-full rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden",
        "hover:border-[var(--accent)] transition-all duration-300",
        onClick && "cursor-pointer"
      )}
    >
      {/* Image Preview */}
      <div className="w-full aspect-video bg-[var(--surface-alt)] overflow-hidden border-b border-[var(--border)] shrink-0">
        <img
          src={displayImage || `https://placehold.co/600x400/1a1a1a/888888?text=${encodeURIComponent(title)}`}
          alt={`${title} preview`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
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
    </div>
  );
}
