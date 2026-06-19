"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Map,
} from "lucide-react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Joppa Technology Services Limited",
    image: "https://jts.com.ng/images/jts-logo.jpeg",
    url: "https://jts.com.ng",
    telephone: "+2348023254954",
    email: "wale@jts-africa.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 Nurudeen Dali Street, Off Sangotedo Road",
      addressLocality: "Ogombo",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.4583,
      longitude: 3.6022,
    },
  };

  const directionsUrl =
    "https://maps.google.com/maps?q=3+Nurudeen+Dali+Street,+Ogombo,+Lagos";

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background Decorative Shapes */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-100/40 rounded-full blur-3xl -z-10 translate-x-1/3 translate-y-1/3" />

      {/* Page Header */}
      <section className="pt-20 pb-12 relative z-10 w-full">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-slate-900"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
          >
            We are here to help and answer any question you might have.
          </motion.p>
        </div>
      </section>

      {/* Top Section: Info & Map */}
      <section className="pb-16 relative z-10 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-3xl p-8 md:p-10 shadow-lg border border-slate-200/50 flex flex-col justify-center h-full"
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                Contact Information
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Our Office
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      3 Nurudeen Dali Street
                      <br />
                      Off Sangotedo Road, Ogombo
                      <br />
                      Eti-Osa LGA
                      <br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-accent-50 text-accent-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Email Us
                    </h3>
                    <a
                      href="mailto:wale@jts-africa.com"
                      className="text-slate-600 hover:text-accent-600 transition-colors text-lg"
                    >
                      wale@jts-africa.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Call Us
                    </h3>
                    <a
                      href="tel:+2348023254954"
                      className="text-slate-600 hover:text-emerald-600 transition-colors text-lg"
                    >
                      +234-802-3254-954
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Embedded Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col h-full"
            >
              <div className="glass rounded-[2rem] overflow-hidden shadow-xl border-2 border-primary-200 hover:border-primary-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-all duration-500 hover:-translate-y-1 relative h-full min-h-[400px]">
                <MapComponent />

                {/* Overlay Action Buttons */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full shadow-lg transition-colors font-medium text-sm whitespace-nowrap"
                  >
                    <Map className="w-4 h-4" /> Get Directions
                  </a>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-slate-800 hover:bg-slate-50 px-5 py-2.5 rounded-full shadow-lg transition-colors font-medium text-sm whitespace-nowrap"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
