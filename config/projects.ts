export interface IProject {
  name: string;
  shortDescription: string;
  WebsiteLink?: string;
  githubLink?: string;
  techStack: string[];
  detailedDescription?: string;
  personal: boolean;
}
export const projects: IProject[] = [
  {
    name: "QuickBlog",
    shortDescription:
      "A personal blogging platform to share my thoughts and experiences, built with Next.js and Tailwind CSS.",
    WebsiteLink: "https://quickblog.com",
    githubLink: "https://github.com/mdfoysalahmed613/QuickBlog",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    personal: true,
  },
];