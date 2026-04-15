"use client";

import { motion, type Variants } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

type Skill = {
  name: string;
  level: number;
};

type SkillGroup = {
  category: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "C#", level: 3 },
      { name: "PHP", level: 4 },
      { name: "Python", level: 2 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "Vue", level: 3 },
      { name: "Angular", level: 2 },
      { name: "Nuxt", level: 3 },
      { name: "HTML/CSS", level: 5 },
      { name: "Tailwind CSS", level: 4 },
      { name: "Sass", level: 4 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "ASP.NET", level: 3 },
      { name: "Laravel", level: 4 },
      { name: "Express.js", level: 2 },
      { name: "Node.js", level: 3 },
      { name: "GraphQL", level: 3 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "SQL Server", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "Supabase", level: 3 },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", level: 4 },
      { name: "Docker", level: 3 },
      { name: "Postman", level: 4 },
      { name: "Axios", level: 3 },
      { name: "Figma", level: 4 },
      { name: "Jira", level: 3 },
      { name: "Jest", level: 3 },
      { name: "Playwright", level: 3 },
    ],
  },
  {
    category: "Cloud",
    skills: [
      { name: "AWS", level: 2 },
      { name: "Azure", level: 1 },
      { name: "Vercel", level: 4 },
      { name: "Render", level: 3 },
    ],
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
                className="flex flex-col gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {group.skills.map((skill) => (
                  <motion.li
                    key={skill.name}
                    variants={itemVariant}
                    className="flex items-center justify-between text-sm text-[var(--muted)]"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block shrink-0" />
                      {skill.name}
                    </span>
                    <div className="flex gap-1 w-16">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`h-1.5 flex-1 rounded-sm ${
                            level <= skill.level
                              ? "bg-[var(--accent)]"
                              : "bg-[var(--border)] opacity-40"
                          }`}
                        />
                      ))}
                    </div>
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
