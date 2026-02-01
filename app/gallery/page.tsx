"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/layout/section-wrapper";
import GalleryFilter, { GalleryCategory } from "@/components/gallery/gallery-filter";
import GalleryGrid, { GalleryItem } from "@/components/gallery/gallery-grid";
import Badge from "@/components/ui/badge";

// Gallery data with real cabinet images
const galleryItems: GalleryItem[] = [
  // Standard Overlay
  {
    id: "so-1",
    src: "/Images/Stock/cabinets01.jpg.webp",
    alt: "Modern two-tone kitchen with black and white cabinets",
    category: "standard-overlay",
    title: "Contemporary Two-Tone Kitchen",
    location: "Austin, TX",
  },
  {
    id: "so-2",
    src: "/Images/Stock/IMG_5229.png.webp",
    alt: "Classic gray shaker style cabinets",
    category: "standard-overlay",
    title: "Classic Gray Shaker",
    location: "San Antonio, TX",
  },
  {
    id: "so-3",
    src: "/Images/Stock/landing.webp",
    alt: "Sage green kitchen cabinets with modern fixtures",
    category: "standard-overlay",
    title: "Sage Green Kitchen",
    location: "Dallas, TX",
  },
  {
    id: "so-4",
    src: "/Images/Stock/IMG_2992.jpg.webp",
    alt: "Custom kitchen cabinets",
    category: "standard-overlay",
    title: "Custom Kitchen Design",
    location: "Houston, TX",
  },
  // Frameless European
  {
    id: "fe-1",
    src: "/Images/Stock/IMG_4995_bfde4201-1f93-4ef4-aba9-84ca53914f5d.heic.webp",
    alt: "Sleek frameless European style kitchen",
    category: "frameless-european",
    title: "Minimalist Kitchen Design",
    location: "Austin, TX",
  },
  {
    id: "fe-2",
    src: "/Images/Stock/IMG_5005.heic.webp",
    alt: "Modern frameless cabinets",
    category: "frameless-european",
    title: "Modern Frameless Design",
    location: "Fort Worth, TX",
  },
  {
    id: "fe-3",
    src: "/Images/Stock/IMG_8307_bb3381e2-d3a6-47e4-9231-638bae918e0a.heic.webp",
    alt: "Integrated handle frameless design",
    category: "frameless-european",
    title: "Handleless Design",
    location: "Blanco, TX",
  },
  {
    id: "fe-4",
    src: "/Images/Stock/IMG_9540_c2d045fb-1c41-4dfa-9356-2874e8cf24dc.heic.webp",
    alt: "Contemporary frameless cabinets",
    category: "frameless-european",
    title: "Contemporary Style",
    location: "San Antonio, TX",
  },
  // Inset
  {
    id: "in-1",
    src: "/Images/Stock/IMG_8640.jpg",
    alt: "Traditional bathroom vanity cabinets with gold hardware",
    category: "inset",
    title: "Elegant Bathroom Vanity",
    location: "Dallas, TX",
  },
  {
    id: "in-2",
    src: "/Images/Stock/IMG_8661_5.jpg.webp",
    alt: "Custom inset cabinets",
    category: "inset",
    title: "Custom Inset Design",
    location: "Austin, TX",
  },
  {
    id: "in-3",
    src: "/Images/Stock/IMG_9547.heic.webp",
    alt: "Premium inset kitchen cabinets",
    category: "inset",
    title: "Premium Kitchen Design",
    location: "Houston, TX",
  },
  {
    id: "in-4",
    src: "/Images/Stock/IMG_5229.heic.webp",
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
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Images/Stock/cabinets01.jpg.webp"
            alt="Custom kitchen cabinets"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/70 to-primary-950/80" />
        </div>

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
        <div className="mb-12">
          <GalleryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

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
              className="inline-flex items-center justify-center px-8 py-4 font-body text-small font-medium uppercase tracking-wider bg-primary-950 text-neutral-50 hover:bg-primary-800 transition-colors rounded-full border border-primary-800"
            >
              Discover Your Style
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 font-body text-small font-medium uppercase tracking-wider border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white transition-colors rounded-full"
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
              {/* Image */}
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
                <Image
                  src={lightboxItem.src}
                  alt={lightboxItem.alt}
                  fill
                  className="object-cover"
                />
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
