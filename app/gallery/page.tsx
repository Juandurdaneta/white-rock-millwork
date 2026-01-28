"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/layout/section-wrapper";
import GalleryFilter, { GalleryCategory } from "@/components/gallery/gallery-filter";
import GalleryGrid, { GalleryItem } from "@/components/gallery/gallery-grid";
import Badge from "@/components/ui/badge";

// Placeholder gallery data
const galleryItems: GalleryItem[] = [
  // Standard Overlay
  {
    id: "so-1",
    src: "/images/gallery/standard-overlay-1.jpg",
    alt: "Modern white kitchen with standard overlay cabinets",
    category: "standard-overlay",
    title: "Contemporary White Kitchen",
    location: "Austin, TX",
  },
  {
    id: "so-2",
    src: "/images/gallery/standard-overlay-2.jpg",
    alt: "Classic shaker style standard overlay cabinets",
    category: "standard-overlay",
    title: "Classic Shaker Design",
    location: "San Antonio, TX",
  },
  {
    id: "so-3",
    src: "/images/gallery/standard-overlay-3.jpg",
    alt: "Gray kitchen cabinets with modern hardware",
    category: "standard-overlay",
    title: "Warm Gray Kitchen",
    location: "Dallas, TX",
  },
  {
    id: "so-4",
    src: "/images/gallery/standard-overlay-4.jpg",
    alt: "Two-tone kitchen with island",
    category: "standard-overlay",
    title: "Two-Tone Elegance",
    location: "Houston, TX",
  },
  // Frameless European
  {
    id: "fe-1",
    src: "/images/gallery/frameless-1.jpg",
    alt: "Sleek frameless European style kitchen",
    category: "frameless-european",
    title: "Minimalist Kitchen Design",
    location: "Austin, TX",
  },
  {
    id: "fe-2",
    src: "/images/gallery/frameless-2.jpg",
    alt: "High-gloss frameless cabinets",
    category: "frameless-european",
    title: "High-Gloss Modern",
    location: "Fort Worth, TX",
  },
  {
    id: "fe-3",
    src: "/images/gallery/frameless-3.jpg",
    alt: "Integrated handle frameless design",
    category: "frameless-european",
    title: "Handleless Design",
    location: "Blanco, TX",
  },
  {
    id: "fe-4",
    src: "/images/gallery/frameless-4.jpg",
    alt: "Dark wood frameless cabinets",
    category: "frameless-european",
    title: "Contemporary Dark Oak",
    location: "San Antonio, TX",
  },
  // Inset
  {
    id: "in-1",
    src: "/images/gallery/inset-1.jpg",
    alt: "Traditional inset cabinet kitchen",
    category: "inset",
    title: "Traditional Elegance",
    location: "Dallas, TX",
  },
  {
    id: "in-2",
    src: "/images/gallery/inset-2.jpg",
    alt: "White inset cabinets with beaded detail",
    category: "inset",
    title: "Beaded Inset Classic",
    location: "Austin, TX",
  },
  {
    id: "in-3",
    src: "/images/gallery/inset-3.jpg",
    alt: "Navy blue inset kitchen cabinets",
    category: "inset",
    title: "Navy Blue Sophistication",
    location: "Houston, TX",
  },
  {
    id: "in-4",
    src: "/images/gallery/inset-4.jpg",
    alt: "Custom inset pantry cabinets",
    category: "inset",
    title: "Custom Pantry Design",
    location: "Blanco, TX",
  },
];

const categoryDescriptions: Record<Exclude<GalleryCategory, "all">, { title: string; description: string }> = {
  "standard-overlay": {
    title: "Standard Overlay",
    description: "Elevate your space with our Standard Overlay Design Cabinets, featuring a classic, timeless look offering both style and functionality.",
  },
  "frameless-european": {
    title: "Frameless European",
    description: "Discover the sleek sophistication of Frameless European Style Cabinets. With their minimalist design and precise construction, these cabinets offer a contemporary, high-end look.",
  },
  "inset": {
    title: "Inset",
    description: "Experience unparalleled elegance with our Inset Design Style Cabinets. The precise, tailored look adds a refined touch to your space.",
  },
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const handleItemClick = (item: GalleryItem) => {
    setLightboxItem(item);
  };

  const closeLightbox = () => {
    setLightboxItem(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!lightboxItem) return;
    
    const filteredItems =
      activeCategory === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory);
    
    const currentIndex = filteredItems.findIndex((item) => item.id === lightboxItem.id);
    let newIndex: number;
    
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    }
    
    setLightboxItem(filteredItems[newIndex]);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-primary-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />
        <div className="absolute top-20 left-10 w-64 h-64 border border-accent-500/20 rotate-12" />
        <div className="absolute bottom-10 right-20 w-48 h-48 border border-accent-500/10 -rotate-6" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="gold" className="mb-6">Our Portfolio</Badge>
            <h1 className="font-display text-display-lg text-white mb-6">
              Our Craftsmanship
            </h1>
            <p className="font-body text-body-lg text-neutral-300 max-w-2xl mx-auto">
              Explore custom cabinets built for Texas homeowners. Each project represents 
              our commitment to quality, precision, and bringing your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <SectionWrapper size="wide">
        <GalleryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Category Description */}
        {activeCategory !== "all" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-heading-lg text-primary-900 mb-3">
              {categoryDescriptions[activeCategory].title}
            </h2>
            <p className="font-body text-body text-primary-600 max-w-2xl mx-auto">
              {categoryDescriptions[activeCategory].description}
            </p>
          </motion.div>
        )}

        {/* Gallery Grid */}
        <GalleryGrid
          items={galleryItems}
          activeCategory={activeCategory}
          onItemClick={handleItemClick}
        />
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper variant="secondary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-display-md text-primary-950 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="font-body text-body-lg text-primary-700 mb-8">
            Let&apos;s create something beautiful together. Take our style quiz to discover 
            your perfect cabinet aesthetic, or schedule a consultation to discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quiz"
              className="inline-flex items-center justify-center px-8 py-4 font-body text-small font-medium uppercase tracking-wider bg-primary-950 text-neutral-50 hover:bg-primary-800 transition-colors"
            >
              Discover Your Style
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 font-body text-small font-medium uppercase tracking-wider border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary-950/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Placeholder Image */}
              <div className="aspect-[16/10] bg-gradient-to-br from-neutral-300 to-neutral-400 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg
                    className="w-24 h-24 mx-auto text-neutral-500 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="font-display text-heading-lg text-neutral-600">
                    {lightboxItem.title}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-6 text-center">
                <h3 className="font-display text-heading-lg text-white mb-2">
                  {lightboxItem.title}
                </h3>
                <p className="font-body text-body text-neutral-400">
                  {lightboxItem.location} • {lightboxItem.category.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
