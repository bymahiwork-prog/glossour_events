// src/app/layout.js
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

// SEO Fix: Updated metadata as per audit report 
export const metadata = {
  metadataBase: new URL("https://effortlessevents.in"),
  title: {
    default: "Event Planner in Delhi NCR | Corporate, Birthday & Wedding Events", // [cite: 4]
    template: "%s | Effortless Events",
  },
  description: "Effortless Events offers complete event planning in Delhi NCR including corporate, birthday, and wedding services.", // [cite: 5]
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
  openGraph: {
    title: "Event, Wedding & Party Planners in Delhi NCR | Effortless Events",
    description: "Your one-stop solution for event planning, decoration, and catering in Delhi NCR.",
    images: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  // Technical SEO Fix: LocalBusiness Schema Implementation [cite: 25]
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Effortless Events",
    "url": "https://effortlessevents.in",
    "logo": "https://effortlessevents.in/logo.png",
    "image": "https://effortlessevents.in/home-page.png",
    "description": "Top-rated event planner in Delhi NCR providing corporate, wedding, and birthday event services.", // [cite: 2, 4]
    "telephone": "+91-7838008069", 
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "L57B, Block L, Malviya Nagar", 
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110017",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.5358", 
      "longitude": "77.2131"
    },
    "areaServed": ["Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"], // 
    "sameAs": [
      "https://www.linkedin.com/company/effortless-events-pvt-ltd/",
      "https://www.instagram.com/effortlesseventspvt.ltd/"
    ]
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster />
        <FloatingWhatsAppButton />
        <NavbarWrapper />
        
        {/* Injecting JSON-LD Schema [cite: 25] */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}