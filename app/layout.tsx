import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/components/common/google-analytics";
import Navbar from "@/components/common/nav";
import Footer from "@/components/common/footer";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: {
    default: "Md Foysal Ahmed | Full Stack Developer",
    template: `%s | Md Foysal Ahmed`,
  },
  description: "Full-stack developer specializing in Next.js, TypeScript, React, and Node.js. Building modern web applications with clean code and exceptional user experiences.",
  authors: [{ name: "Md Foysal Ahmed", url: process.env.NEXT_PUBLIC_BASE_URL! }],
  creator: "Md Foysal Ahmed",
  openGraph: {
    title: "Md Foysal Ahmed",
    description:
      "Full-stack developer specializing in Next.js, TypeScript, React, and Node.js. Building modern web applications with clean code and exceptional user experiences.",
    url: process.env.NEXT_PUBLIC_BASE_URL!,
    siteName: "Md Foysal Ahmed",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Foysal Ahmed",
    description:
      "Full-stack developer specializing in Next.js, TypeScript, React, and Node.js. Building modern web applications with clean code and exceptional user experiences.",
  },
  keywords: [
    "Md Foysal Ahmed",
    "Foysal Ahmed",
    "Foysal Ahmed Developer",
    "Foysal Ahmed BD",
    "Foysal Ahmed Portfolio",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "Next.js developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={`${inter.className} antialiased flex flex-col max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8`}>
        <GoogleAnalytics />
        <SpeedInsights />
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
