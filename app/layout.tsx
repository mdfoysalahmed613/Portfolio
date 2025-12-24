import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/components/common/google-analytics";
import Navbar from "@/components/common/nav";
import Footer from "@/components/common/footer";
import ProfileImage from '@/public/profile.jpg'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#c75605",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: {
    default: "Md Foysal Ahmed | Full Stack Developer",
    template: `%s | Md Foysal Ahmed`,
  },
  description: "I am a full-stack developer who helps agencies and startups build and maintain production-ready web applications using Next.js and PostgreSQL.",

  authors: [{ name: "Md Foysal Ahmed", url: process.env.NEXT_PUBLIC_BASE_URL! }],
  creator: "Md Foysal Ahmed",


  openGraph: {
    title: "Md Foysal Ahmed",
    description:
      "I am a full-stack developer who helps agencies and startups build and maintain production-ready web applications using Next.js and PostgreSQL.",
    url: process.env.NEXT_PUBLIC_BASE_URL!,
    siteName: "Md Foysal Ahmed",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Foysal Ahmed",
    description:
      "I am a full-stack developer who helps agencies and startups build and maintain production-ready web applications using Next.js and PostgreSQL.",
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
    "Supabase Developer",
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
  category: "Portfolio",
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Md Foysal Ahmed",
  },
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Md Foysal Ahmed",
    "url": "https://foysal.me",
    "image": `${process.env.NEXT_PUBLIC_BASE_URL}${ProfileImage.src}`,
    "sameAs": [
      "https://github.com/mdfoysalahmed613",
      "https://www.linkedin.com/in/mdfoysalahmed613",
      "https://www.facebook.com/foysal613"
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "I am a full-stack developer who helps agencies and startups build and maintain production-ready web applications using Next.js and PostgreSQL.",
    "email": "contact@foysal.me",
    "telephone": "+8801581633810",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "Bangladesh"
    }
  }

  return (
    <html lang="en" suppressHydrationWarning >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={`${inter.className} antialiased flex flex-col max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
