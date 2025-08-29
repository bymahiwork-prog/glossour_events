// app/layout.js

import "./globals.css";
import Footer from "@/components/Footer";
import NavbarWrapper from "@/components/NavbarWrapper";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Improved root metadata
// Improved root metadata for Effortless Events
export const metadata = {
  // This URL is used for creating absolute paths for social media images
  metadataBase: new URL("https://effortlessevents.in"), // 👈 Replace with your actual domain

  title: {
    template: "%s | Effortless Events", // %s will be replaced by the page's title
    default: "Effortless Events | Your Premier Event Partner", // Fallback title
  },
  description:
    "Discover and book unique venues for your events with Effortless Events. We offer comprehensive services to make your special occasion unforgettable.",

  // Open Graph data for social media sharing
  openGraph: {
    title: "Effortless Events | Your Premier Event Partner",
    description: "Find the perfect venue for your next event.",
    images: "/favicon.png", // A default image in your /public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingWhatsAppButton />
        <NavbarWrapper />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
