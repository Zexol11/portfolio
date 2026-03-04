"use client";

import { motion, type Variants } from "framer-motion";
import { Mail } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const contactLinks = [
  {
    id: "contact-email",
    icon: <Mail size={20} />,
    label: "ed.kenneth11@gmail.com",
    href: "mailto:ed.kenneth11@gmail.com",
    description: "Shoot me an email",
  },
  {
    id: "contact-linkedin",
    icon: <LinkedinIcon width={20} height={20} />,
    label: "linkedin.com/in/ed-kenneth-g",
    href: "https://www.linkedin.com/in/ed-kenneth-g",
    description: "Connect on LinkedIn",
    external: true,
  },
  {
    id: "contact-github",
    icon: <GithubIcon width={20} height={20} />,
    label: "github.com/Zexol11",
    href: "https://github.com/Zexol11",
    description: "See my code on GitHub",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionTitle label="04. Contact" title="Get in touch" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 text-[var(--muted)] max-w-lg leading-relaxed"
        >
          Have a project in mind, want to collaborate, or just want to say hello?
          I&apos;m always open to new conversations. Pick your preferred channel below.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 max-w-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.id}
              id={link.id}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              variants={fadeUp}
              className="group flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] transition-all duration-300"
            >
              <span className="text-[var(--accent)]">{link.icon}</span>
              <div>
                <p className="text-xs text-[var(--muted)] mb-0.5">{link.description}</p>
                <p className="text-sm text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors font-medium">
                  {link.label}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
