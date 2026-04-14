import { Metadata } from "next";
import { getAllProjects, getAllCategories } from "@/lib/projects";
import ProjectList from "./_components/project-list";

export const metadata: Metadata = {
   title: "Projects",
   description: "Browse all my projects. Filter by category to find web3, blockchain, e-commerce, and business website projects.",
   openGraph: {
      title: "Projects",
      description: "Browse all my projects.",
   },
};

export default function ProjectsPage() {
   const projects = getAllProjects();
   const categories = getAllCategories();

   return <ProjectList projects={projects} categories={categories} />;
}
