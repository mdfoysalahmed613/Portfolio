import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface IProjectFrontmatter {
  title: string;
  description: string;
  category: string;
  year: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface IProject extends IProjectFrontmatter {
  slug: string;
  content: string;
}

const projectsDirectory = path.join(process.cwd(), "assets/projects");

export function getAllProjects(): IProject[] {
  const slugs = fs.readdirSync(projectsDirectory).filter((item) => {
    const itemPath = path.join(projectsDirectory, item);
    return fs.statSync(itemPath).isDirectory();
  });

  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is IProject => project !== null)
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return projects;
}

export function getFeaturedProjects(): IProject[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): IProject | null {
  const mdxPath = path.join(projectsDirectory, slug, "index.mdx");

  if (!fs.existsSync(mdxPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(mdxPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    description: data.description,
    category: data.category,
    year: data.year,
    technologies: data.technologies || [],
    images: (data.images || []).map(
      (img: string) => `/projects/${slug}/${img}`
    ),
    liveUrl: data.liveUrl,
    githubUrl: data.githubUrl,
    featured: data.featured ?? false,
    content,
  };
}

export function getAllProjectSlugs(): string[] {
  return fs.readdirSync(projectsDirectory).filter((item) => {
    const itemPath = path.join(projectsDirectory, item);
    return (
      fs.statSync(itemPath).isDirectory() &&
      fs.existsSync(path.join(itemPath, "index.mdx"))
    );
  });
}
