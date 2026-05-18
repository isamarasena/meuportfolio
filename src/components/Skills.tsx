"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skillCategories } from "@/lib/data";
import PortfolioModal from "./PortfolioModal";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <>
      <section
        id="trabalhos"
        ref={ref}
        className="py-24 lg:py-32 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-caramel/10 border border-caramel/20 rounded-full mb-6">
              <span className="text-xs font-semibold tracking-[0.2em] text-caramel-dark uppercase">
                Portfólio
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown-dark mb-4">
              Habilidades & Trabalhos
            </h2>
            <p className="text-brown-light text-lg max-w-2xl mx-auto">
              Clique em cada categoria para explorar os projetos
            </p>
          </motion.div>

          {/* Skill cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((skill, i) => (
              <motion.button
                key={skill.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                onClick={() => setActiveCategory(skill.id)}
                className="group relative text-left cursor-pointer"
              >
                <div
                  className={`relative bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 border border-cream-dark/50 hover:border-caramel/40 hover:-translate-y-3 overflow-hidden`}
                >
                  {/* Background gradient on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-caramel/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-caramel/20 group-hover:scale-110 transition-all duration-300 overflow-hidden p-3">
                      <img
                        src={skill.image}
                        alt={skill.title}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const nextElem = e.currentTarget.nextElementSibling;
                          if (nextElem) nextElem.classList.remove("hidden");
                        }}
                      />
                      <span className="hidden text-3xl">{skill.icon}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-semibold text-brown-dark mb-2 group-hover:text-caramel-dark transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-brown-light text-sm mb-6">
                      {skill.subtitle}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-caramel-dark font-medium text-sm">
                      <span>Ver projetos</span>
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                        }}
                      >
                        →
                      </motion.span>
                    </div>

                    {/* Bottom accent */}
                    <div className="mt-6 w-0 h-0.5 bg-caramel group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Modal */}
      <PortfolioModal
        category={activeCategory}
        onClose={() => setActiveCategory(null)}
      />
    </>
  );
}
