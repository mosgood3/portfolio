import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matthew Osgood - Data Developer Portfolio",
  description: "Experienced cata developer specializing in Firebase, Next.js, and modern web technologies. View my projects and get in touch for collaboration opportunities.",
  keywords: ["Data Developer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Matthew Osgood" }],
  creator: "Matthew Osgood",
  publisher: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mosgood.me",
    title: "Your Name - Full Stack Developer Portfolio",
    description: "Experienced full-stack developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Your Name Portfolio",
  },

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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          background: `
            radial-gradient(ellipse at top, #1e1b4b 0%, #0f0a1a 50%, #000000 100%),
            radial-gradient(circle at 20% 80%, #3730a3 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #1e40af 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, #7c3aed 0%, transparent 50%)
          `,
          minHeight: '100vh',
        }}
      >
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
