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
  metadataBase: new URL("https://www.effortlessevents.in"),
  title: {
    default: "Delhi NCR's Premier Event Planning & Venue Company", // [cite: 4]
    template: "%s | Effortless Events",
  },
  description: "Luxury wedding planning, corporate events, birthday celebrations, and 50+ exclusive venues across Delhi, Gurugram, Noida, Faridabad and Ghaziabad.", // [cite: 5]
  keywords: [
  "event planner Delhi NCR",
  "wedding planner Delhi",
  "corporate event planner Gurugram",
  "birthday party venues Noida",
  "event management company Delhi",
  "wedding venues Delhi NCR",
  "event decoration services Delhi",
  "catering services Delhi NCR",
  ],
  openGraph: {
    title: "Delhi NCR's Premier Event Planning & Venue Company | Effortless Events",
    description: "Luxury wedding planning, corporate events, birthday celebrations, and 50+ exclusive venues across Delhi NCR.",
    images: "/og-image.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  // Technical SEO Fix: LocalBusiness Schema Implementation [cite: 25]
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "Effortless Events",
    "url": "https://www.effortlessevents.in",
    "logo": "https://www.effortlessevents.in/logo.png",
    "image": "https://www.effortlessevents.in/home-page.png",
    "description": "Luxury event planning and venue booking company serving Delhi, Gurugram, Noida, Faridabad, and Ghaziabad.", // [cite: 2, 4]
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
