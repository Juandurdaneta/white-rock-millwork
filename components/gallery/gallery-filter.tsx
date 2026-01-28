"use client";

import { cn } from "@/lib/utils";

export type GalleryCategory = "all" | "standard-overlay" | "frameless-european" | "inset";

interface GalleryFilterProps {
  activeCategory: GalleryCategory;
  onCategoryChange: (category: GalleryCategory) => void;
}

const categories: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "standard-overlay", label: "Standard Overlay" },
  { id: "frameless-european", label: "Frameless European" },
  { id: "inset", label: "Inset" },
];

export default function GalleryFilter({
  activeCategory,
  onCategoryChange,
}: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "px-6 py-3 font-body text-small uppercase tracking-wider transition-all duration-300",
            activeCategory === category.id
              ? "bg-primary-950 text-white"
              : "bg-transparent text-primary-700 border border-primary-300 hover:border-accent-500 hover:text-accent-500"
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
