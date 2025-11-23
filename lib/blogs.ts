import { FC } from "react";
import { StaticImageData } from "next/image";
import { PortfolioBlog, PortfolioBlogImage } from "@/assets/blogs";
export interface IBlog {
  slug: string;
  title: string;
  description: string;
  content: FC;
  publishDate: string;
  image: StaticImageData;
  keywords?: string[];
}

export const blogs: IBlog[] = [
  {
    slug: "how-i-built-my-high-performance-portfolio-website",
    title: "How I Built My High-Performance Portfolio Website",
    description:
      "A detailed walkthrough of the technologies and design choices I made while building my portfolio website.",
    content: PortfolioBlog,
    publishDate: "2025-11-23",
    image: PortfolioBlogImage,
    keywords: ["portfolio","developer portfolio", "web development", "React", "Node.js"],
  },
];
