import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Md Foysal Ahmed | Full Stack Developer",
    short_name: "Foysal Ahmed",
    description:
      "I helps agencies and startups build and maintain production-ready web applications using Next.js, PostgreSQL and Supabase.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f4ee",
    theme_color: "#c75605",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    lang: "en",
  };
}
