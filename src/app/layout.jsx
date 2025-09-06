import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ModernSpace Studio",
  description:
    "ModernSpace Studio specializes in timeless, elegant, and functional spaces. From stylish homes to high-end commercial projects, our expert designers bring your vision to life with precision and creativity.",
  keywords: [
    "ModernSpace Studio",
    "luxury interior design",
    "modern interiors",
    "residential design",
    "commercial design",
    "home renovation",
    "office interiors",
    "custom furniture",
  ],
  authors: [{ name: "ModernSpace Studio" }],
  openGraph: {
    title: "ModernSpace Studio | Modern & Luxury Interior Design",
    description:
      "Discover bespoke residential and commercial interior design solutions by Aura Interiors. Transform your living or workspace into something extraordinary.",
    url: "https://your-domain.com",
    siteName: "ModernSpace Studio",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ModernSpace Studio Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
