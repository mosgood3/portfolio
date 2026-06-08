import type { Metadata } from "next";
import { Rokkitt, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const display = Rokkitt({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mosgood.me"),
  title: "Matthew Osgood - Data Engineer Portfolio",
  description: "Data Engineer with 3+ years building production ETL pipelines and lakehouse architectures with PySpark, Microsoft Fabric, and Delta Lake. View my projects and get in touch.",
  keywords: ["Data Engineer", "PySpark", "Microsoft Fabric", "Delta Lake", "ETL", "Lakehouse", "SQL", "Next.js", "Portfolio"],
  authors: [{ name: "Matthew Osgood" }],
  creator: "Matthew Osgood",
  publisher: "Matthew Osgood",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mosgood.me",
    title: "Matthew Osgood - Data Engineer Portfolio",
    description: "Data Engineer specializing in PySpark, Microsoft Fabric, Delta Lake, and large-scale ETL pipelines in financial services.",
    siteName: "Matthew Osgood Portfolio",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Matthew Osgood Portfolio Icon",
      },
    ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} antialiased bg-cream text-ink min-h-screen`}
      >
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
