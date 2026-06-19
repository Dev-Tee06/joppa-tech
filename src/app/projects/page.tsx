"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const projects = [
  {
    client: "Segilola Operating Resources Limited",
    logo: "/images/partner26.jpeg",
    deliverables: [
      "Data centre construction",
      "Disaster Recovery Centre",
      "Fibre backbone deployment",
    ],
    bg: "bg-black border-2 border-primary-500",
  },
  {
    client: "MTN Nigeria",
    logo: "/images/partner15.jpeg",
    deliverables: [
      "Fireproof vaults",
      "Infrastructure management",
      "Structured cabling",
    ],
    bg: "bg-yellow-400",
  },
  {
    client: "Pladis Global Nigeria",
    logo: "/images/partner24.jpeg",
    deliverables: [
      "Disaster recovery",
      "CCTV implementation",
      "Campus fibre infrastructure",
    ],
    bg: "bg-red-700",
  },
  {
    client: "GTBank",
    logo: "/images/partner13.jpeg",
    deliverables: ["Environmental monitoring systems"],
    bg: "bg-orange-500",
  },
  {
    client: "Standard Chartered Bank",
    logo: "/images/partner16.jpeg",
    deliverables: ["IPMux installations"],
    bg: "bg-blue-600",
  },
  {
    client: "Microsoft Nigeria",
    logo: "/images/partner29.png",
    deliverables: ["Enterprise Wi-Fi redesign"],
    bg: "bg-slate-100",
  },
];

const customers = [
  "/images/partner13.jpeg",
  "/images/partner15.jpeg",
  "/images/partner29.png",
  "/images/partner25.jpeg",
  "/images/partner14.jpeg",
  "/images/partner26.png",
  "/images/partner16.jpeg",
  "/images/partner24.jpeg",
];

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="pt-20 pb-16 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Completed Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            A showcase of our successful implementations and satisfied clients
            across various industries.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden group border border-slate-200 bg-white/50"
              >
                {/* Logo Top Right */}
                <div className="absolute top-6 right-6">
                  <div
                    className={`w-14 h-14 rounded-full overflow-hidden flex items-center justify-center p-2 shadow-sm ${project.bg}`}
                  >
                    <div className="relative w-full h-full bg-white rounded-full overflow-hidden">
                      <Image
                        src={project.logo}
                        alt={`${project.client} Logo`}
                        fill
                        className="object-contain p-1.5"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 pr-16 mb-8">
                  <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
                    Client
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                    {project.client}
                  </h3>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                    Deliverables
                  </p>
                  <ul className="space-y-3">
                    {project.deliverables.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start text-slate-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customers Slideshow */}
      <section className="py-16 bg-white border-t border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We have had the privilege of working with some of the most
            innovative and successful companies.
          </p>
        </div>

        {/* Infinite Ticker */}
        <div className="relative w-full flex overflow-x-hidden group mt-8">
          <div className="animate-marquee flex whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...customers, ...customers].map((src, idx) => (
              <div
                key={idx}
                className="mx-8 md:mx-12 w-32 h-20 md:w-40 md:h-24 relative flex items-center justify-center hover:scale-105 transition-transform duration-500 shrink-0"
              >
                <Image
                  src={src}
                  alt={`Customer ${idx}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          {/* Absolute copy for seamless loop */}
          <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...customers, ...customers].map((src, idx) => (
              <div
                key={`copy-${idx}`}
                className="mx-8 md:mx-12 w-32 h-20 md:w-40 md:h-24 relative flex items-center justify-center hover:scale-105 transition-transform duration-500 shrink-0"
              >
                <Image
                  src={src}
                  alt={`Customer ${idx}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
