"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryCategory } from "./gallery-filter";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  title: string;
  location?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  activeCategory: GalleryCategory;
  onItemClick: (item: GalleryItem) => void;
}

export default function GalleryGrid({
  items,
  activeCategory,
  onItemClick,
}: GalleryGridProps) {
  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence mode="popLayout">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group cursor-pointer"
            onClick={() => onItemClick(item)}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200 rounded-lg">
              {/* Image */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/70 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                  <h3 className="font-display text-heading-md text-white mb-1">
                    {item.title}
                  </h3>
                  {item.location && (
                    <p className="font-body text-small text-neutral-300">
                      {item.location}
                    </p>
                  )}
                  <div className="mt-4">
                    <span className="inline-flex items-center text-accent-400 font-body text-small uppercase tracking-wider">
                      View Project
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Caption Below Image */}
            <div className="mt-3">
              <h3 className="font-display text-heading-md text-primary-900 group-hover:text-accent-500 transition-colors">
                {item.title}
              </h3>
              <p className="font-body text-small text-neutral-500 capitalize">
                {item.category.replace(/-/g, " ")}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
