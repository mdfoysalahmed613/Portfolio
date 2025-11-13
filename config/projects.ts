import { Url } from "next/dist/shared/lib/router/router";

export interface IProjects {
  Name: string;
  Personal: boolean;
  Category: string[];
  ShortDescription: string;
  WebsiteLink: Url;
  CoverPhoto: any;
}

export const Projects: IProjects[] = [
  {
    Name: "QuickBlog",
    Personal: true,
    Category: ["Full Stack", "Next.js", "Web App"],
    ShortDescription:
      "Elevated The Super Quotes app with JavaScript, React Native, APIs, Redux magic, and Google Play Store debut.",
    WebsiteLink:
      "https://quickblog.foysal.me",
    CoverPhoto: "/public/QuickBlog.png",
  },
];

