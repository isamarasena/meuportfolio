"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { portfolioItems, skillCategories, type PortfolioItem } from "@/lib/data";

interface PortfolioModalProps {
  category: string | null;
  onClose: () => void;
}

export default function PortfolioModal({
  category,
  onClose,
}: PortfolioModalProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = category
    ? portfolioItems.filter((item) => item.category === category)
    : [];

  const categoryInfo = category
    ? skillCategories.find((s) => s.id === category)
    : null;

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (category) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [category]);

  return (
    <AnimatePresence>
      {category && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-brown-dark/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-cream rounded-3xl shadow-2xl overflow-hidden mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-cream/95 backdrop-blur-xl border-b border-cream-dark/30 px-6 md:px-10 py-6 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  {categoryInfo?.image ? (
                    <img
                      src={categoryInfo.image}
                      alt={categoryInfo.title}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const nextElem = e.currentTarget.nextElementSibling;
                        if (nextElem) nextElem.classList.remove("hidden");
                      }}
                    />
                  ) : null}
                  <span className={`${categoryInfo?.image ? "hidden" : ""} text-2xl`}>
                    {categoryInfo?.icon}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-brown-dark">
                    {categoryInfo?.title}
                  </h2>
                </div>
                <p className="text-brown-light text-sm">
                  {categoryInfo?.subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-brown-dark/10 hover:bg-brown-dark/20 flex items-center justify-center transition-colors duration-200 text-brown-dark text-xl"
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>

            {/* Grid */}
            <div className="p-6 md:p-10 overflow-y-auto max-h-[calc(90vh-100px)]">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-cream-dark/30 hover:border-caramel/30">
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Hover overlay */}
                        <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-brown-dark">
                            Ver detalhes
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-5">
                        <h3 className="font-serif text-lg font-semibold text-brown-dark mb-1 group-hover:text-caramel-dark transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-brown-light text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Item Detail Modal */}
          <AnimatePresence>
            {selectedItem && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-60 flex items-center justify-center"
                onClick={() => setSelectedItem(null)}
              >
                <div className="absolute inset-0 bg-brown-dark/80 backdrop-blur-md" />

                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 30 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full max-w-4xl max-h-[90vh] bg-cream rounded-3xl shadow-2xl overflow-y-auto mx-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white flex items-center justify-center transition-colors duration-200 text-brown-dark text-xl shadow-md"
                    aria-label="Fechar detalhes"
                  >
                    ✕
                  </button>

                  {/* Large image */}
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 80vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
                  </div>

                  {/* Details */}
                  <div className="p-8 md:p-10 -mt-16 relative">
                    {/* Context tag */}
                    <div className="inline-flex items-center px-3 py-1.5 bg-caramel/15 border border-caramel/25 rounded-full mb-4">
                      <span className="text-xs font-medium text-caramel-dark">
                        {selectedItem.context}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-brown-dark mb-4">
                      {selectedItem.title}
                    </h2>

                    <p className="text-brown-medium leading-relaxed text-lg">
                      {selectedItem.fullDescription}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
