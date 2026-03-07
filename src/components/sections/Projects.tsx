"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";

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
  images?: string[];
};

const projects: Project[] = [
  {
    title: "CCS-Select",
    company: "University Project",
    year: "2022 - 2023",
    description:
      "A webscraping platform tailored for university IT/CS students. It consolidates job postings and features a matching algorithm to align student profiles with employer skill requirements, displaying the highest percentage matches.",
    tags: ["Laravel", "Bootstrap", "HTML/CSS", "JavaScript", "Web Scraping"],
    isPrivate: false,
    images: [
      "/projects/ccs-select/1.png",
      "/projects/ccs-select/2.png",
      "/projects/ccs-select/3.png",
      "/projects/ccs-select/4.png",
    ],
  },
  {
    title: "Ketamine Center of Connecticut",
    company: "Freelance",
    year: "2023",
    description:
      "Completely modernized a legacy clinic website by introducing new UX/UI designs, implementing SEO best practices, and building a responsive frontend. Developed the first phase independently and deployed the final product.",
    tags: ["React", "Next", "UI/UX", "SEO"],
    isPrivate: false,
    liveUrl: "https://www.ketaminecenterofct.com",
    images: [
      "/projects/ketamine-clinic/1.png",
      "/projects/ketamine-clinic/2.png",
      "/projects/ketamine-clinic/3.png",
      "/projects/ketamine-clinic/4.png",
      "/projects/ketamine-clinic/5.png",
    ],
  },
  {
    title: "brüno - Video Recording App",
    company: "Lanex Corporation",
    year: "2024",
    description:
      "Developed web features and browser extension components for a video recording application. Enabled seamless video uploads, stream playback, and messaging capabilities for users.",
    tags: ["Vue", "Python", "Browser Extensions", "Video Streaming"],
    isPrivate: false,
    images: [
      "/projects/bruno/1.png",
      "/projects/bruno/2.png",
      "/projects/bruno/3.png",
    ],
  },
  {
    title: "Lanex Corp Website",
    company: "Lanex Corporation",
    year: "2023",
    description:
      "Maintained and expanded the primary company website. Engineered new features and updated promotional content to enhance the agency's digital presence.",
    tags: ["WordPress", "PHP", "HTML/CSS", "JavaScript"],
    isPrivate: false,
    liveUrl: "https://www.lanexcorp.com",
    images: [
      "/projects/lanexcorp/1.png",
    ],
  },
  {
    title: "HRIS Platform",
    company: "Lanex Corporation",
    year: "2023",
    description:
      "Internal Human Resource Information System for PH and JP employees. Managed time in/out, project lists, client details, and employee summaries. Added new features, fixed bugs, and improved existing functionalities.",
    tags: ["Laravel", "PHP", "Angular", "PostgreSQL"],
    isPrivate: true,
  },
  {
    title: "Nexco ******* *****",
    company: "Lanex Corporation",
    year: "2023 – 2025",
    description:
      "Internal Japanese e-commerce and engineering portal for expressway construction materials. Developed complex import/export processes with specific design templates. Maintained the legacy platform as the sole developer during a transition period.",
    tags: ["ASP.NET", "C#", "Enterprise System", "NextJS", "Legacy Modernization"],
    isPrivate: true,
  },
  {
    title: "Nexco *************",
    company: "Lanex Corporation",
    year: "2024 – 2025",
    description:
      "Internal record management website for a Japanese engineering company. Handled complex calculations involving corporate fundings, expenses, and property rights while continuously adding new features to adapt the legacy system.",
    tags: ["ASP.NET", "C#", "Enterprise System", "NextJS", "Legacy Modernization"],
    isPrivate: true,
  },
  {
    title: "***** Don Quijote",
    company: "Lanex Corporation",
    year: "2025",
    description:
      "Developed comprehensive admin and client-side interfaces. Empowered administrators to manage product catalogs while providing a streamlined browsing and purchasing experience for end users.",
    tags: ["React", "Next", "Laravel", "TypeScript", "E-commerce"],
    isPrivate: true,
  },
  {
    title: "Nissin ******",
    company: "Lanex Corporation",
    year: "2025",
    description:
      "Internal website built for a Japanese company requiring complicated calculations and inventory management for various manufacturing materials.",
    tags: ["Vue", "Nuxt", "Laravel", "TypeScript", "E-commerce"],
    isPrivate: true,
  },
   {
    title: "***** Chatbot",
    company: "Lanex Corporation",
    year: "2024",
    description:
      "An AI-driven platform that automates data entry by scanning and extracting information from uploaded receipts using OCR. Features a custom AI chatbot for user assistance and a synchronization engine that integrates real-time data from corporate APIs.",
    tags: ["AI", "OCR", "Chatbot", "API Integration", "Data Sync", "Laravel", "Vue"],
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 px-6 relative">
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
              <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
