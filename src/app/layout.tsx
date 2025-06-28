import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog Task App",
  description:
    "A modern blog built with Next.js 15, optimized for performance and SEO.",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Blog Task App",
    description: "Read modern blog posts powered by Next.js",
    url: "https://yourdomain.com",
    siteName: "Blog Task App",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Task App",
    description: "Explore trending blog content in one place",
    site: "@yourtwitterhandle",
    images: ["https://yourdomain.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          "bg-gray-100 text-[#181A2A] dark:bg-[#181A2A] dark:text-white transition-colors duration-300"
        }
      >
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
