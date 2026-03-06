"use client";

import { motion, type Variants } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";

export type Project = {
  title: string;
  company?: string;
  year: string;
  description: string;
  tags: string[];
  isPrivate?: boolean;
  liveUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
};

const projects: Project[] = [
  {
    title: "CCS-Select",
    company: "University Project",
    year: "2023",
    description:
      "A webscraping platform tailored for university IT/CS students. It consolidates job postings and features a matching algorithm to align student profiles with employer skill requirements, displaying the highest percentage matches.",
    tags: ["Laravel", "Bootstrap", "HTML/CSS", "JavaScript", "Web Scraping"],
    isPrivate: false,
  },
  {
    title: "Ketamine Center of Connecticut",
    company: "Freelance",
    year: "Recent",
    description:
      "Completely modernized a legacy clinic website by introducing new UX/UI designs, implementing SEO best practices, and building a responsive frontend. Developed the first phase independently and deployed the final product.",
    tags: ["React", "Next.js", "UI/UX", "SEO", "Frontend"],
    isPrivate: false,
    liveUrl: "https://www.ketaminecenterofct.com",
  },
  {
    title: "HRIS Platform",
    company: "Lanex Corporation",
    year: "2023",
    description:
      "Internal Human Resource Information System for PH and JP employees. Managed time in/out, project lists, client details, and employee summaries. Added new features, fixed bugs, and improved existing functionalities.",
    tags: ["Laravel", "PHP", "AngularJS", "PostgreSQL"],
    isPrivate: true,
  },
  {
    title: "Nexco Shisetsu Hozen",
    company: "Lanex Corporation",
    year: "2023 – 2025",
    description:
      "Internal Japanese e-commerce and engineering portal for expressway construction materials. Developed complex import/export processes with specific design templates. Maintained the legacy platform as the sole developer during a transition period.",
    tags: ["ASP.NET", "C#", "Enterprise System", "NextJS", "Legacy Modernization"],
    isPrivate: true,
  },
  {
    title: "Nexco Chiteki Zaisan",
    company: "Lanex Corporation",
    year: "2024 – 2025",
    description:
      "Internal record management website for a Japanese engineering company. Handled complex calculations involving corporate fundings, expenses, and property rights while continuously adding new features to adapt the legacy system.",
    tags: ["ASP.NET", "C#", "Enterprise System", "NextJS", "Legacy Modernization"],
    isPrivate: true,
  },
  {
    title: "brüno - Video Recording & Messaging App",
    company: "Lanex Corporation",
    year: "2024",
    description:
      "Developed web features and browser extension components for a video recording application. Enabled seamless video uploads, stream playback, and messaging capabilities for users.",
    tags: ["VueJS", "Python", "Browser Extensions", "Video Streaming"],
    isPrivate: true,
  },
  {
    title: "PPIH (Don Quijote related)",
    company: "Lanex Corporation",
    year: "2025",
    description:
      "Developed comprehensive admin and client-side interfaces. Empowered administrators to manage product catalogs while providing a streamlined browsing and purchasing experience for end users.",
    tags: ["React", "NextJS", "Laravel", "TypeScript", "E-commerce"],
    isPrivate: true,
  },
  {
    title: "Nissin Kouhatsu",
    company: "Lanex Corporation",
    year: "2025",
    description:
      "Internal website built for a Japanese company requiring complicated calculations and inventory management for various manufacturing materials.",
    tags: ["Vue", "NuxtJS", "Laravel", "TypeScript", "E-commerce"],
    isPrivate: true,
  },
  {
    title: "Lanex Core & AU Websites",
    company: "Lanex Corporation",
    year: "2023",
    description:
      "Maintained and expanded the primary company websites. Engineered new features and consistently updated promotional content to enhance the agency's digital presence.",
    tags: ["WordPress", "PHP", "HTML/CSS", "JavaScript"],
    isPrivate: true,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle label="02. Projects" title="Things I've built" />
        </motion.div>

        <motion.div
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={cardVariant}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
