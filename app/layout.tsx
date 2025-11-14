import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://foysal-ahmed.vercel.app'),
  title: {
    default: "Md Foysal Ahmed",
    template: `%s | Md Foysal Ahmed`,
  },
  description: "A modern, responsive Next.js portfolio. This is my personal portfolio website showcasing my skills, projects, and experience as a Full Stack Developer.",
  authors: [{ name: "Md Foysal Ahmed", url: process.env.NEXT_PUBLIC_BASE_URL || 'https://foysal-ahmed.vercel.app' }],
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://foysal-ahmed.vercel.app',
    title: "Md Foysal Ahmed",
    description: "A modern, responsive Next.js portfolio. This is my personal portfolio website showcasing my skills, projects, and experience as a Full Stack Developer.",
    siteName: "Md Foysal Ahmed",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Md Foysal Ahmed",
      },
    ],
  },
  keywords: [
    "Md Foysal Ahmed",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "Next.js developer",
    "Foysal Ahmed portfolio",
    "Md Foysal Ahmed portfolio",
    "Foysal Ahmed developer",
    "Foysal Ahmed web developer",
    "Foysal Ahmed projects",
    "Foysal Ahmed skills",
    "Foysal Ahmed experience",
    "Foysal Ahmed personal website",
    "Foysal Ahmed GitHub",
  ],
  creator: "mdfoysalahmed613",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
