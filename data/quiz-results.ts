import { StyleType } from "@/lib/quiz-logic";

export interface StyleProfile {
  slug: StyleType;
  name: string;
  movieTitle: string;
  tagline: string;
  description: string[];
  features: {
    doorStyle: string;
    finish: string;
    hardware: string;
    details: string;
    specialFeatures: string;
  };
  colors: {
    primary: string[];
    complementary: string[];
  };
  heroImage: string;
}

export const styleProfiles: Record<StyleType, StyleProfile> = {
  traditional: {
    slug: "traditional",
    name: "Traditional Elegance",
    movieTitle: "Gone with the Wind",
    tagline: "Timeless elegance that never goes out of style",
    description: [
      "You have an eye for timeless elegance that never goes out of style. While others chase trends, you understand that true beauty is built to last generations.",
      "This isn't about being old-fashioned. It's about creating a home with the kind of presence and sophistication that makes people stop and take notice.",
    ],
    features: {
      doorStyle: "Raised panel with decorative moldings",
      finish: "Rich wood stains (mahogany, cherry, walnut)",
      hardware: "Ornate pulls in aged bronze or antique brass",
      details: "Crown molding, corbels, furniture feet, fluted columns",
      specialFeatures: "Glass mullion doors to display fine china and crystal",
    },
    colors: {
      primary: ["Deep burgundy", "Forest green", "Navy", "Rich wood tones"],
      complementary: ["Warm neutrals (cream, beige, warm gray)", "Gold, bronze, and rich jewel tones"],
    },
    heroImage: "/images/results/traditional.jpg",
  },
  transitional: {
    slug: "transitional",
    name: "Transitional Elegance",
    movieTitle: "Marley & Me",
    tagline: "Where life actually happens (and looks good doing it)",
    description: [
      "You want a home that handles the chaos of real family life: homework at the island, Friday night dinners that run late, coffee spills that wipe clean while still looking like you actually have your life together.",
      "Classic enough to last. Updated enough to feel fresh. Real enough to be home.",
    ],
    features: {
      doorStyle: "Shaker or simple recessed panel",
      finish: "Soft neutrals (warm grays, taupes, greiges, soft whites)",
      hardware: "Simple but quality (brushed nickel, satin brass, matte black)",
      details: "Clean lines, minimal ornamentation, functional elegance",
      specialFeatures: "Mix of closed cabinets with subtle open shelving",
    },
    colors: {
      primary: ["Soft gray", "Warm white", "Navy", "Natural wood"],
      complementary: ["Muted accent colors (sage, soft blue, blush)", "Layered textures"],
    },
    heroImage: "/images/results/transitional.jpg",
  },
  modern: {
    slug: "modern",
    name: "Modern/Contemporary",
    movieTitle: "Devil Wears Prada",
    tagline: "Sleek, sophisticated, impossibly chic",
    description: [
      "You don't do 'good enough.' You do everything with intention, and pay attention to every detail. You are sleek, sophisticated, and impossibly chic.",
      "Your home isn't just where you live, it's a statement of who you are.",
    ],
    features: {
      doorStyle: "Slab or ultra-simple Shaker, frameless construction",
      finish: "Bold statements (deep charcoal, navy, pure white)",
      hardware: "Integrated handles or push-to-open, nothing visible",
      details: "Clean lines, seamless surfaces, architectural precision",
      specialFeatures: "Hidden storage, integrated appliances, flawless symmetry",
    },
    colors: {
      primary: ["Monochromatic with dramatic contrast", "Black, white, charcoal"],
      complementary: ["Metallic accents (brushed brass, polished chrome)", "Bold single accent colors"],
    },
    heroImage: "/images/results/modern.jpg",
  },
  rustic: {
    slug: "rustic",
    name: "Rustic",
    movieTitle: "The Notebook",
    tagline: "Weathered wood, endless character",
    description: [
      "You don't want factory-fresh perfection. You want wood with history, texture you can feel, and cabinets that will collect stories for decades.",
      "You are authentic, romantic, and timeless.",
    ],
    features: {
      doorStyle: "Recessed panel or simple Shaker with visible wood character",
      finish: "Natural wood stains showcasing grain (walnut, oak, reclaimed wood tones)",
      hardware: "Wrought iron, vintage pulls, oil-rubbed bronze with character",
      details: "Exposed hinges, distressed finishes, hand-hewn texture",
      specialFeatures: "Open shelving with thick wood, mix of materials (wood + metal)",
    },
    colors: {
      primary: ["Warm earth tones (browns, taupes, terracotta)", "Soft whites and creams"],
      complementary: ["Deep greens and blues inspired by nature", "Natural materials (stone, leather, linen)"],
    },
    heroImage: "/images/results/rustic.jpg",
  },
  "country-cottage": {
    slug: "country-cottage",
    name: "Country Cottage",
    movieTitle: "The Parent Trap",
    tagline: "The Napa vineyard life (even if you're in Texas)",
    description: [
      "You're drawn to the cozy elegance of painted cabinets, countryside charm, and spaces that feel like a European escape.",
      "You have a charming and inviting vibe.",
    ],
    features: {
      doorStyle: "Shaker or beadboard, simple and charming",
      finish: "Painted in soft colors (sage, cream, powder blue, soft white)",
      hardware: "Delicate knobs and pulls (brushed nickel, brass, ceramic)",
      details: "Glass-front uppers, beadboard accents, decorative molding",
      specialFeatures: "Mix of open shelving and closed cabinets, display opportunities",
    },
    colors: {
      primary: ["Soft, muted colors (sage, lavender, powder blue)", "Creamy whites and warm neutrals"],
      complementary: ["Natural wood accents as warmth", "Floral patterns and vintage textiles"],
    },
    heroImage: "/images/results/country-cottage.jpg",
  },
  coastal: {
    slug: "coastal",
    name: "Coastal",
    movieTitle: "Miami Vice",
    tagline: "The house that feels like permanent vacation",
    description: [
      "You're not interested in heavy or formal. You want light, fresh, breezy spaces that feel like an escape from everyday stress.",
      "You are breezy, bright, and unapologetically relaxed.",
    ],
    features: {
      doorStyle: "Simple Shaker or slab, clean and uncluttered",
      finish: "Crisp white, light natural wood, soft coastal colors",
      hardware: "Light and simple (brushed nickel, rope details, minimal pulls)",
      details: "Clean lines, open shelving, glass-front options for airiness",
      specialFeatures: "Light-reflecting finishes, mix of open and closed storage",
    },
    colors: {
      primary: ["Crisp whites and soft creams", "Coastal blues (aqua, seafoam, soft navy)"],
      complementary: ["Natural materials (rattan, jute, linen)", "Weathered wood tones as accents"],
    },
    heroImage: "/images/results/coastal.jpg",
  },
};

export function getStyleProfile(slug: StyleType): StyleProfile {
  return styleProfiles[slug];
}
