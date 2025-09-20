// app/layout.js

import "./globals.css";
import Footer from "@/components/Footer";
import NavbarWrapper from "@/components/NavbarWrapper";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// NEW & IMPROVED METADATA BASED ON YOUR KEYWORDS
export const metadata = {
  metadataBase: new URL("https://effortlessevents.in"),

  title: {
    template: "%s | Effortless Events",
    default: "Event, Wedding & Party Planners in Delhi NCR | Effortless Events",
  },
  description:
    "Effortless Events offers complete event planning in Delhi NCR. We provide decoration, food catering, and bartending services for weddings, parties, and corporate events.",
  keywords: [
    "events",
    "decoration services",
    "food catering",
    "bartending services",
    "parties",
    "wedding",
    "corporate events",
    "Delhi",
    "Noida",
    "Gurugram",
    "Faridabad",
  ],

  //  UPDATED: Open Graph data for social media sharing
  openGraph: {
    title: "Event, Wedding & Party Planners in Delhi NCR | Effortless Events",
    description:
      "Your one-stop solution for event planning, decoration, and catering in Delhi NCR.",
    images: "/favicon.png",
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Effortless Events",
    url: "https://effortlessevents.in",
    logo: "https://effortlessevents.in/favicon.png",
    description:
      "Find and book unique farm houses and event venues in Noida and New Delhi.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Noida",
      postalCode: "201301",
      addressRegion: "UP",
      addressCountry: "IN",
    },
    telephone: "+91-9999999999",
  };
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <FloatingWhatsAppButton />
        <NavbarWrapper />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
