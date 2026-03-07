import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, Lock } from "lucide-react";
import type { Project } from "@/components/sections/Projects";
import Tag from "@/components/ui/Tag";

type Props = {
  project: Project;
  onClose: () => void;
};

//test comment
export default function ProjectModal({ project, onClose }: Props) {
  const { title, company, year, description, tags, isPrivate, liveUrl, repoUrl, images, imageUrl } = project;
  
  // Create an array of all images. If `images` isn't provided, use `imageUrl` as the single image. 
  // If neither, fallback to a placeholder.
  const gallery = images && images.length > 0 
    ? images 
    : [imageUrl || `https://placehold.co/1200x800/1a1a1a/888888?text=${encodeURIComponent(title)}`];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]); // Dependency needed to get the latest index for next/prev

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 md:p-12"
      >
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
          className="relative w-full max-w-5xl max-h-[90vh] flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors"
          >
            <X size={20} />
          </button>

          {/* Image Slideshow Area */}
          <div className="relative w-full aspect-video bg-[var(--surface-alt)] shrink-0 overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={gallery[currentIndex]}
                alt={`${title} screenshot ${currentIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full object-contain"
              />
            </AnimatePresence>

            {/* Navigation Arrows (Only show if multiple images) */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-transform hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-transform hover:scale-110"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {gallery.map((_: string, i: number) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === currentIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Scrollable Content Area */}
          <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-1">
                  {title}
                </h2>
                {company && (
                  <p className="text-[var(--muted)] text-sm">
                    {company} · {year}
                  </p>
                )}
                {!company && (
                  <p className="text-[var(--muted)] text-sm">{year}</p>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 shrink-0">
                {isPrivate ? (
                  <span className="flex items-center gap-1.5 text-sm font-medium text-[var(--muted)] bg-[var(--surface-alt)] px-3 py-1.5 rounded-lg border border-[var(--border)]">
                    <Lock size={14} />
                    Private Project
                  </span>
                ) : (
                  <>
                    {repoUrl && (
                      <a
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] bg-[var(--surface-alt)] hover:bg-[var(--border)] px-3 py-1.5 rounded-lg border border-[var(--border)] transition-colors"
                      >
                        <Github size={16} />
                        Source
                      </a>
                    )}
                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-white bg-[var(--accent)] hover:opacity-90 px-3 py-1.5 rounded-lg transition-opacity"
                      >
                        <ExternalLink size={16} />
                        Visit Site
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>

            <p className="text-[var(--muted)] text-base leading-relaxed mb-8">
              {description}
            </p>

            <div>
              <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
