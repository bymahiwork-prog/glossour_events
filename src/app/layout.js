// src/app/layout.js
import "./globals.css";
import Footer from "@/components/Footer";
import NavbarWrapper from "@/components/NavbarWrapper";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleAds from "@/components/GoogleAds";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.effortlessevents.in"),
  title: {
    default: "Delhi NCR's Premier Event Planning & Venue Company",
    template: "%s | Effortless Events",
  },
  description:
    "Luxury wedding planning, corporate events, birthday celebrations, and 50+ exclusive venues across Delhi NCR. Get a free quote today.",
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
    title:
      "Delhi NCR's Premier Event Planning & Venue Company | Effortless Events",
    description:
      "Luxury wedding planning, corporate events, birthday celebrations, and 50+ exclusive venues across Delhi NCR.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "EventPlanner"],
    "@id": "https://www.effortlessevents.in/#organization",
    name: "Effortless Events Pvt. Ltd.",
    url: "https://www.effortlessevents.in/",
    logo: "https://www.effortlessevents.in/logo.png",
    image: "https://www.effortlessevents.in/about1.png",
    description:
      "Effortless Events Pvt. Ltd. is a Delhi NCR-based event planning company specializing in weddings, corporate events, private celebrations, venue selection, décor, catering, and end-to-end event management.",
    telephone: "+91-7838008069",
    email: "bookings@effortlessevents.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "L57B, Captain Hitesh Mehta Marg, Malviya Nagar",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110017",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "New Delhi" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Faridabad" },
      { "@type": "City", name: "Ghaziabad" },
    ],
    foundingDate: "2021",
    priceRange: "₹₹₹",
    sameAs: [
      "https://www.instagram.com/effortlesseventspvt.ltd/",
      "https://www.facebook.com/Effortlesseventspvt.ltd/",
      "https://maps.app.goo.gl/4PzyfzFDLyRe1Nj57",
    ],
    knowsAbout: [
      "Wedding Planning",
      "Corporate Event Management",
      "Birthday Party Planning",
      "Venue Management",
      "Event Decoration",
      "Catering Services",
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <Toaster />
        <FloatingWhatsAppButton />
        <NavbarWrapper />

        <main>{children}</main>

        <Footer />
        <GoogleAnalytics />
          <GoogleAds />
      </body>
    </html>
  );
}
