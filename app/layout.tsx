import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import { Spotlight } from "@/components/ui/spotlight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mbaye Diao - Full-Stack Developer",
  description: "Full-stack developer specializing in React, Next.js, and Go development. Creating exceptional digital experiences with modern technologies.",
  keywords: ["Full-stack developer", "React", "Next.js", "Go", "TypeScript", "Web development", "Senegal"],
  authors: [{ name: "Mbaye Diao" }],
  creator: "Mbaye Diao",
  openGraph: {
    title: "Mbaye Diao - Full-Stack Developer",
    description: "Full-stack developer specializing in React, Next.js, and Go development. Creating exceptional digital experiences with modern technologies.",
    url: "https://mbayediao.dev",
    siteName: "Mbaye Diao Portfolio",
    images: [
      {
        url: "/mbaye.jpg",
        width: 1200,
        height: 630,
        alt: "Mbaye Diao - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mbaye Diao - Full-Stack Developer",
    description: "Full-stack developer specializing in React, Next.js, and Go development.",
    images: ["/mbaye.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-black/[0.96] ${inter.className} antialiased`}>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
