"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experiencia"
      ref={ref}
      className="py-24 lg:py-32 bg-cream-light relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-caramel/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-terracotta/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-caramel/10 border border-caramel/20 rounded-full mb-6">
            <span className="text-xs font-semibold tracking-[0.2em] text-caramel-dark uppercase">
              Trajetória
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown-dark mb-4">
            Experiência Profissional
          </h2>
          <p className="text-brown-light text-lg max-w-2xl mx-auto">
            Áreas de atuação e expertise desenvolvidas ao longo da carreira
          </p>
        </motion.div>

        {/* Experience cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-cream-dark/50 hover:border-caramel/30 hover:-translate-y-2">
                {/* Icon */}
                <div className="w-14 h-14 bg-caramel/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-caramel/20 group-hover:scale-110 transition-all duration-300 overflow-hidden p-3">
                  {exp.image ? (
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const nextElem = e.currentTarget.nextElementSibling;
                        if (nextElem) nextElem.classList.remove("hidden");
                      }}
                    />
                  ) : null}
                  <span className={`${exp.image ? "hidden" : ""} text-2xl`}>
                    {exp.icon}
                  </span>
                </div>

                {/* Number */}
                <span className="absolute top-6 right-6 text-6xl font-serif font-bold text-caramel/8 group-hover:text-caramel/15 transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-brown-dark mb-3 group-hover:text-caramel-dark transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="text-brown-light leading-relaxed text-sm">
                  {exp.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-6 w-0 h-0.5 bg-caramel group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
