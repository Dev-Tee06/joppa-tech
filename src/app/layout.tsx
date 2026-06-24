import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jts.com.ng"),
  title:
    "Joppa Technology Services Limited | ICT & Technology Solutions Company in Lagos",
  description:
    "Joppa Technology Services Limited delivers innovative ICT solutions, data center infrastructure, security systems and managed technology services across Africa.",
  openGraph: {
    title:
      "Joppa Technology Services Limited | ICT & Technology Solutions Company in Lagos",
    description:
      "Delivering innovative ICT, Data Centre, Security, Infrastructure and Managed Services across Africa since 2011.",
    url: "https://jts.com.ng",
    siteName: "Joppa Technology Services Limited",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "https://jts.com.ng/images/jts-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Joppa Technologies Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title:
      "Joppa Technology Services Limited | ICT & Technology Solutions Company in Lagos",
    description:
      "Delivering innovative ICT, Data Centre, Security, Infrastructure and Managed Services across Africa since 2011.",
    images: ["https://jts.com.ng/images/jts-logo.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Joppa Technology Services Limited",
    url: "https://jts.com.ng",
    logo: "https://jts.com.ng/images/jts-logo.jpeg",
    image: "https://jts.com.ng/images/jts-logo.jpeg",
    sameAs: [
      "https://facebook.com/yourpage",
      "https://linkedin.com/company/yourpage",
      "https://instagram.com/yourpage",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+2348023254954",
      contactType: "customer service",
      areaServed: "NG",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 Nurudeen Dali Street, Off Sangotedo Road",
      addressLocality: "Ogombo",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Joppa Technology Services Limited",
    image: "https://jts.com.ng/images/jts-logo.jpeg",
    "@id": "https://jts.com.ng",
    url: "https://jts.com.ng",
    telephone: "+2348023254954",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 Nurudeen Dali Street, Off Sangotedo Road",
      addressLocality: "Ogombo",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
  };

  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Navbar />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
