"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Server, ShieldAlert, Waves, ShieldCheck, Network, Code2, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Data Centre Solutions",
    icon: Server,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    items: [
      "Modular data centre design",
      "Raised floor systems",
      "Computer room air-conditioning",
      "Power systems",
      "Low-voltage systems",
      "Data centre management"
    ]
  },
  {
    title: "Fireproof & Disaster Recovery",
    icon: ShieldAlert,
    color: "text-red-500",
    bg: "bg-red-500/10",
    items: [
      "Fireproof media vaults",
      "Archive protection",
      "Disaster recovery centres",
      "Asset tracking"
    ]
  },
  {
    title: "Soundproof & Acoustic Solutions",
    icon: Waves,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    items: [
      "Acoustic room design",
      "Noise assessment",
      "Sound simulation"
    ]
  },
  {
    title: "Security & Facility Solutions",
    icon: ShieldCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    items: [
      "CCTV systems",
      "Access control",
      "Fire detection",
      "HVAC systems"
    ]
  },
  {
    title: "Networking & Infrastructure",
    icon: Network,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    items: [
      "Routing and switching",
      "Structured cabling",
      "Network security",
      "Server infrastructure",
      "IP telephony"
    ]
  },
  {
    title: "Software Development",
    icon: Code2,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    items: [
      "CRM",
      "Accounting systems",
      "HR solutions",
      "Mobile applications",
      "Portals",
      "Analytics"
    ]
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 relative overflow-hidden">
      
      {/* Background Decorative Shapes */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-primary-100/40 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-accent-100/40 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

      {/* Page Header */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
          >
            Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive technology solutions designed to empower your business, secure your infrastructure, and drive digital transformation.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${service.bg} transition-colors group-hover:bg-white`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-6 group-hover:text-primary-700 transition-colors">
                  {service.title}
                </h3>
                
                <ul className="space-y-3">
                  {service.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-3 group-hover:bg-primary-400 transition-colors" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl bg-gradient-to-br from-neutral-900 via-primary-900 to-neutral-900 p-12 md:p-16 text-center overflow-hidden"
          >
            {/* Decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-500/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Start Your Digital Transformation{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300">
                  Today
                </span>
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                Partner with our experts to build scalable, secure, and innovative technology solutions tailored to your business needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-full hover:from-primary-400 hover:to-accent-400 transition-all shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transform hover:-translate-y-1 text-lg"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative border-t border-slate-100 z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Why Choose Us</h2>
            <p className="text-lg text-slate-600">We partner with you to deliver technology solutions that drive efficiency and growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Fast Delivery", desc: "We deliver solutions within agreed timelines without compromising quality." },
              { title: "Experienced Professionals", desc: "Our team consists of highly skilled and experienced professionals." },
              { title: "Reliable Support", desc: "We provide ongoing technical support and customer assistance." },
              { title: "Scalable Solutions", desc: "Our solutions are designed for future growth and expansion." },
              { title: "Industry Best Practices", desc: "We implement globally accepted standards and methodologies." },
              { title: "Customer-Centered Approach", desc: "We place customer satisfaction at the center of every implementation." }
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="mt-1 bg-primary-100 text-primary-600 rounded-full p-1 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{reason.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
