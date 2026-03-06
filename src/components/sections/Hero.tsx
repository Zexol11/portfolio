"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Software Engineer",
  "UI/UX Designer",
];

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words]);

  return (
    <span className="text-[var(--accent)]">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          style={{ background: "var(--accent-glow)" }}
          className="w-[600px] h-[600px] rounded-full blur-[120px] opacity-40"
        />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.15,
        }}
      />

      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="text-[var(--muted)] text-sm font-mono tracking-widest uppercase mb-4"
        >
          Hey there, I&apos;m
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-none mb-4"
        >
          Ed Kenneth
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="text-xl sm:text-2xl text-[var(--muted)] mb-8 h-10"
        >
          <Typewriter words={roles} />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-[var(--muted)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          Full-Stack Developer with 3+ years’ experience creating functional, reliable web tools for groups ranging from small teams to 1,000+ active users. 
          Specialist in adapting to different tech stacks to meet project needs.
        </motion.p>

        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4">
          <a
            id="hero-cta-projects"
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View my work
          </a>
          <a
            id="hero-cta-contact"
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--muted)] text-sm hover:border-[var(--accent)] hover:text-[var(--foreground)] transition-all"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator container for initial fade-in */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--muted)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        {/* Scroll-based fade out wrapper */}
        <motion.div style={{ opacity: scrollOpacity }}>
          {/* Continuous bouncing animation */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
