"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-[80vh] bg-slate-50 relative overflow-hidden items-center justify-center">
      
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

      {/* Contact Card */}
      <section className="pb-20 relative z-10 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/50 max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              
              {/* Address */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Our Office</h3>
                <p className="text-slate-600 leading-relaxed">
                  3 Nurudeen Dali Street<br />
                  Off Sangotedo Road, Ogombo<br />
                  Eti-Osa LGA<br />
                  Lagos, Nigeria
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-accent-50 text-accent-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Email Us</h3>
                <a href="mailto:wale@jts-africa.com" className="text-slate-600 hover:text-accent-600 transition-colors text-lg">
                  wale@jts-africa.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Call Us</h3>
                <a href="tel:+2348023254954" className="text-slate-600 hover:text-emerald-600 transition-colors text-lg">
                  +234-802-3254-954
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
