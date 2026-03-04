"use client";

import { motion, type Variants } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import SocialLink from "@/components/ui/SocialLink";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionTitle label="01. About" title="A bit about me" />
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            className="space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-[var(--muted)] leading-relaxed">
              I&apos;m a Full-Stack Software Engineer with 3+ years of experience
              building and optimizing web applications serving 50–1000+ users.
              I&apos;m strong in React, TypeScript, JavaScript, and Laravel, with a focus on
              frontend development while still capable of handling full-stack tasks.
            </p>
            <p className="text-[var(--muted)] leading-relaxed">
              I have a proven track record of reducing API latency,
              improving system reliability, and delivering complete features —
              from requirements gathering to launch.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <SocialLink
                id="about-email"
                href="mailto:ed.kenneth11@gmail.com"
                label="Email me"
                icon={<Mail size={15} />}
              />
              <SocialLink
                id="about-linkedin"
                href="https://linkedin.com/in/edkenneth"
                label="LinkedIn"
                icon={<LinkedinIcon width={15} height={15} />}
                external
              />
              <SocialLink
                id="about-github"
                href="https://github.com/edkenneth"
                label="GitHub"
                icon={<GithubIcon width={15} height={15} />}
                external
              />
              <SocialLink
                id="about-resume"
                href="/resume.pdf"
                label="Resume"
                icon={<ExternalLink size={15} />}
                external
              />
            </div>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 space-y-4"
          >
            {[
              { label: "Based in", value: "Philippines 🇵🇭" },
              { label: "Experience", value: "3+ Years" },
              { label: "Focus", value: "Full-Stack / Enterprise Apps" },
              { label: "Education", value: "BS Computer Science, UC 2023" },
              { label: "Status", value: "Open to opportunities ✅" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-center text-sm border-b border-[var(--border)] pb-3 last:border-none last:pb-0"
              >
                <span className="text-[var(--muted)]">{item.label}</span>
                <span className="text-[var(--foreground)] font-medium">
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
