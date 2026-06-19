"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function About() {
  const timeline = [
    { year: "2011", title: "Incorporated", desc: "Joppa Technologies was officially established in Nigeria to bridge the technology gap." },
    { year: "Growth", title: "Strategic Partnerships", desc: "Built strong relationships and partnerships with leading OEMs globally." },
    { year: "Expansion", title: "Regional Service Delivery", desc: "Expanded service delivery across various sectors and into multiple African countries." },
    { year: "Experience", title: "60+ Years Combined", desc: "Our team boasts a combined industry experience exceeding 60 years of excellence." },
  ];

  const goals = [
    "Glorify God in the service of humanity",
    "Exceed customer expectations through competent professionals",
    "Maintain ethical business standards",
    "Deliver continuous stakeholder satisfaction"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Page Header */}
      <section className="pt-20 pb-12 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Delivering excellence in technology solutions across Africa since 2011.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Who We Are</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We are a technology-driven organization committed to delivering innovative, scalable and reliable solutions to businesses across multiple sectors.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Business Philosophy</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our focus is building long-term partnerships through trust, service excellence and continuous innovation.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Leadership & Experience</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our combined experience exceeding 60 years enables us to consistently deliver quality solutions with professionalism and excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-white relative overflow-hidden border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-16">Our Journey</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-primary-200 ml-4 md:ml-1/2 md:-translate-x-2 space-y-12">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative pl-8 md:pl-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute w-5 h-5 bg-primary-600 rounded-full left-[-14.5px] top-1 border-4 border-white shadow" />
                  
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:absolute md:right-1/2 md:top-0' : 'md:pl-12 md:ml-auto'}`}>
                    <span className="text-sm font-bold text-primary-600 tracking-wider uppercase mb-1 block">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Goals */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
            
            {/* Left Content */}
            <div className="flex-1 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-primary-600 block rounded-full"></span>
                  Our Vision
                </h2>
                <div className="glass p-8 rounded-2xl border-l-4 border-l-primary-500">
                  <p className="text-xl text-slate-700 italic">
                    "To be the leading standard for service delivery in Africa by delivering value to all stakeholders."
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-accent-600 block rounded-full"></span>
                  Our Goals
                </h2>
                <ul className="space-y-4">
                  {goals.map((goal, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                    >
                      <CheckCircle className="w-6 h-6 text-primary-600 shrink-0" />
                      <span className="text-slate-700 font-medium">{goal}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Image */}
            <motion.div 
              className="flex-1 relative w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/vision.png"
                  alt="Joppa Technologies Vision"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white font-medium text-lg">Leading the standard in technology solutions across Africa.</p>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
