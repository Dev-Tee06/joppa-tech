"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const heroImages = [
  "/images/hero1.jpeg",
  "/images/hero2.jpeg",
  "/images/hero4.jpg",
  "/images/hero5.jpg",
];

const partners = [
  "/images/partner29.png", "/images/partner20.jpeg", "/images/partner6.png",
  "/images/partner2.jpeg", "/images/partner4.jpeg", "/images/partner3.jpeg",
  "/images/partner1.jpeg", "/images/partner9.jpeg", "/images/partner8.jpeg",
  "/images/partner12.jpeg", "/images/partner11.jpeg", "/images/partner10.jpeg",
  "/images/partner22.jpeg", "/images/partner23.jpeg", "/images/partner21.jpeg",
  "/images/partner28.jpeg"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50/30 to-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Text Content */}
            <motion.div 
              className="flex-1 text-center lg:text-left z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
                Solving Business Problems with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Proven Technologies</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Delivering innovative ICT, Data Centre, Security, Infrastructure and Managed Services across Africa since 2011.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link 
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/services"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 font-semibold rounded-full hover:bg-slate-50 border border-slate-200 transition-all shadow-sm hover:shadow-md flex items-center justify-center"
                >
                  Request Consultation
                </Link>
              </div>
            </motion.div>

            {/* Right: Image Slideshow */}
            <motion.div 
              className="flex-1 w-full max-w-2xl lg:max-w-none z-10"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroImages[currentSlide]}
                      alt="Joppa Technologies Projects"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Slideshow Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === idx ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Decorative Shapes */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-300/10 rounded-full blur-3xl -z-0" />
      </section>

      {/* Mission & Vision Snapshot */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="glass p-10 md:p-14 rounded-3xl text-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-accent-500 to-primary-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-xl md:text-2xl text-slate-700 italic font-light leading-relaxed">
                "To be the leading standard for service delivery in Africa by delivering value to all stakeholders."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-slate-50 relative border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Philosophy</h2>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              "We believe technology should go beyond systems and infrastructure. Technology should solve real business challenges, improve efficiency, increase productivity and create measurable value for organizations."
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach to Problem Solving */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-16">
            Our Approach to Problem Solving
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { step: "Understand", desc: "We identify client pain points and business requirements." },
              { step: "Analyze", desc: "We carefully examine operational challenges and opportunities." },
              { step: "Design", desc: "We create strategic and scalable solutions." },
              { step: "Implement", desc: "We execute with precision and industry best practices." },
              { step: "Support", desc: "We provide continuous support and optimization." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-sm">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.step}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Core Values</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 max-w-5xl mx-auto">
            {["Integrity", "Innovation", "Excellence", "Reliability", "Customer Success"].map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-3 bg-neutral-800/50 border border-neutral-700 px-6 py-4 rounded-full"
              >
                <CheckCircle2 className="w-5 h-5 text-primary-400" />
                <span className="text-lg font-medium">{val}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-neutral-50 overflow-hidden border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800">
            Meet our amazing partners
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mt-4 rounded-full" />
        </div>
        
        {/* Infinite Ticker */}
        <div className="relative w-full flex overflow-x-hidden group">
          <div className="animate-marquee flex whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((src, idx) => (
              <div 
                key={idx} 
                className="mx-8 md:mx-12 w-32 h-20 md:w-40 md:h-24 relative flex items-center justify-center hover:scale-105 transition-transform duration-500 shrink-0"
              >
                <Image
                  src={src}
                  alt={`Partner ${idx}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          {/* Absolute copy for seamless loop */}
          <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((src, idx) => (
              <div 
                key={`copy-${idx}`} 
                className="mx-8 md:mx-12 w-32 h-20 md:w-40 md:h-24 relative flex items-center justify-center hover:scale-105 transition-transform duration-500 shrink-0"
              >
                <Image
                  src={src}
                  alt={`Partner ${idx}`}
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
