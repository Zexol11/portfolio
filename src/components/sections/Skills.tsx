"use client";

import { motion, type Variants } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

type SkillGroup = {
  category: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "C#", "PHP", "Python"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vue", "Angular", "Nuxt", "HTML/CSS", "Tailwind CSS", "Sass"],
  },
  {
    category: "Backend",
    skills: ["ASP.NET", "Laravel", "Express.js", "Node.js", "GraphQL"],
  },
  {
    category: "Databases",
    skills: ["SQL Server", "PostgreSQL"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Docker", "Postman", "Figma"],
  },
  {
    category: "Cloud",
    skills: ["AWS (Basic)", "Azure (Basic)"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle label="03. Skills" title="What I work with" />
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5"
            >
              <h3 className="text-xs font-semibold text-[var(--accent)] tracking-widest uppercase mb-4">
                {group.category}
              </h3>
              <motion.ul
                className="flex flex-col gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {group.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={itemVariant}
                    className="text-sm text-[var(--muted)] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block shrink-0" />
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
