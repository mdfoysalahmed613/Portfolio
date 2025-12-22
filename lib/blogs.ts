import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface IBlogFrontmatter {
  title: string;
  description: string;
  publishDate: string;
  image: string;
  keywords?: string[];
}

export interface IBlog extends IBlogFrontmatter {
  slug: string;
  content: string;
}

const blogsDirectory = path.join(process.cwd(), "assets/blogs");

export function getAllBlogs(): IBlog[] {
  const slugs = fs.readdirSync(blogsDirectory).filter((item) => {
    const itemPath = path.join(blogsDirectory, item);
    return fs.statSync(itemPath).isDirectory();
  });

  const blogs = slugs
    .map((slug) => getBlogBySlug(slug))
    .filter((blog): blog is IBlog => blog !== null)
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );

  return blogs;
}

export function getBlogBySlug(slug: string): IBlog | null {
  const mdxPath = path.join(blogsDirectory, slug, "index.mdx");

  if (!fs.existsSync(mdxPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(mdxPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    description: data.description,
    publishDate: data.publishDate,
    image: `/blogs/${slug}/${data.image}`,
    keywords: data.keywords,
    content,
  };
}

export function getAllBlogSlugs(): string[] {
  return fs.readdirSync(blogsDirectory).filter((item) => {
    const itemPath = path.join(blogsDirectory, item);
    return (
      fs.statSync(itemPath).isDirectory() &&
      fs.existsSync(path.join(itemPath, "index.mdx"))
    );
  });
}
