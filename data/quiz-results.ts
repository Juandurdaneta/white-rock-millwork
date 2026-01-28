import { StyleType } from "@/lib/quiz-logic";

export interface StyleProfile {
  slug: StyleType;
  name: string;
  tagline: string;
  description: string[];
  features: {
    doorStyle: string;
    hardware: string;
    finish: string;
    layout: string;
  };
  colors: {
    primary: string[];
    accent: string[];
  };
  colorSwatches: string[];
  mistakes: string[];
  heroImage: string;
}

export const styleProfiles: Record<StyleType, StyleProfile> = {
  "classic-elegance": {
    slug: "classic-elegance",
    name: "The Classic Elegance",
    tagline: "Timeless design with ornate details and raised panel doors",
    description: [
      "You're drawn to the glamour of a bygone era—the kind of sophistication that never goes out of style. Your aesthetic celebrates craftsmanship, intricate details, and the confidence that comes from choosing designs that have stood the test of time.",
      "Your ideal kitchen feels like a well-appointed estate home. Rich materials, decorative moldings, and carefully chosen hardware create an atmosphere of refined luxury. Every detail matters because you understand that true elegance is in the execution.",
      "You don't follow trends—you set the standard. Your cabinets should reflect that same unwavering commitment to quality and beauty.",
    ],
    features: {
      doorStyle:
        "Raised panel doors with decorative moldings and intricate routing details",
      hardware:
        "Antique brass or polished nickel pulls and knobs with ornate detailing",
      finish:
        "Hand-glazed finishes in warm whites, creams, or deep wood stains",
      layout:
        "Symmetrical designs with statement range hoods and furniture-style pieces",
    },
    colors: {
      primary: ["Warm White", "Navy", "Forest Green", "Rich Walnut"],
      accent: ["Antique Brass", "Carrara Marble", "Crystal"],
    },
    colorSwatches: ["#F5F0E8", "#1E3A5F", "#2D5A3D", "#5C4033"],
    mistakes: [
      "Choosing overly ornate hardware that competes with the cabinet details",
      "Skipping the crown molding—it's essential to complete the elegant look",
      "Selecting finishes that are too matte; classic elegance benefits from subtle sheen",
    ],
    heroImage: "/images/results/classic-elegance.jpg",
  },
  "modern-minimalist": {
    slug: "modern-minimalist",
    name: "The Modern Minimalist",
    tagline: "Clean lines, minimal hardware, seamless integration",
    description: [
      "You believe that less is more—and you mean it. Your aesthetic is defined by restraint, precision, and the beauty of negative space. Every element in your kitchen should earn its place.",
      "For you, sophistication isn't about adding more; it's about perfecting what's essential. Flat-panel doors, integrated handles, and seamless surfaces create a kitchen that feels both cutting-edge and timelessly serene.",
      "Your space is your sanctuary. Clutter is the enemy. Your cabinets should disappear into the architecture while making a powerful design statement through their simplicity.",
    ],
    features: {
      doorStyle: "Flat-panel (slab) doors with minimal reveals and no ornamentation",
      hardware:
        "Integrated edge pulls, push-to-open mechanisms, or sleek bar handles",
      finish: "Matte lacquer in white, charcoal, or warm gray; high-gloss options for drama",
      layout: "Horizontal emphasis with wall-to-wall cabinetry and hidden appliance garages",
    },
    colors: {
      primary: ["Pure White", "Charcoal", "Matte Black", "Warm Gray"],
      accent: ["Brushed Steel", "White Quartz", "Natural Oak"],
    },
    colorSwatches: ["#FFFFFF", "#36454F", "#1C1C1C", "#8B8B8B"],
    mistakes: [
      "Adding decorative elements that clash with the minimal aesthetic",
      "Choosing busy countertops that disrupt the clean lines",
      "Neglecting proper lighting—minimalist spaces need intentional illumination",
    ],
    heroImage: "/images/results/modern-minimalist.jpg",
  },
  "transitional-blend": {
    slug: "transitional-blend",
    name: "The Transitional Blend",
    tagline: "Comfortable elegance, mixing traditional and modern",
    description: [
      "You're not interested in choosing sides. Why be confined to one style when you can curate the best of both worlds? Your aesthetic bridges classic warmth with contemporary simplicity.",
      "Your ideal kitchen feels both timeless and current—comfortable enough for everyday life, sophisticated enough for entertaining. Shaker-style doors, simple hardware, and balanced proportions create spaces that feel collected rather than decorated.",
      "You want cabinets that will look just as beautiful in twenty years as they do today. Not trendy. Not dated. Just perfectly, effortlessly right.",
    ],
    features: {
      doorStyle:
        "Shaker doors with clean frames and flat center panels—the perfect bridge between styles",
      hardware: "Simple knobs and pulls in brushed nickel, oil-rubbed bronze, or soft brass",
      finish: "Painted finishes in soft grays, warm whites, or navy; natural wood for islands",
      layout: "Mixed materials with painted perimeter and wood island for visual interest",
    },
    colors: {
      primary: ["Soft Gray", "Warm White", "Navy", "Natural Wood"],
      accent: ["Brushed Nickel", "Quartz", "Subway Tile"],
    },
    colorSwatches: ["#D3D3D3", "#FAF9F6", "#2C3E50", "#A67B5B"],
    mistakes: [
      "Going too traditional OR too modern—balance is key",
      "Matching everything too perfectly; transitional thrives on thoughtful contrast",
      "Choosing hardware that's too ornate or too minimal for the space",
    ],
    heroImage: "/images/results/transitional-blend.jpg",
  },
  "rustic-warmth": {
    slug: "rustic-warmth",
    name: "The Rustic Warmth",
    tagline: "Natural textures, warm tones, inviting charm",
    description: [
      "You crave authenticity. Your aesthetic celebrates natural beauty, imperfection, and the warmth of materials that tell a story. You'd rather have a space with soul than one straight from a catalog.",
      "Your ideal kitchen feels lived-in and loved—a place where family gathers, bread rises, and memories are made. Natural wood grain, organic textures, and warm earth tones create an atmosphere that welcomes everyone who enters.",
      "You don't want cabinets that look manufactured. You want cabinets that look crafted—by hands that care about their work as much as you care about your home.",
    ],
    features: {
      doorStyle:
        "Natural wood with visible grain, distressed finishes, or rustic planking details",
      hardware:
        "Iron, copper, or bronze pulls with handcrafted character",
      finish: "Natural stains that enhance wood grain, or painted finishes with intentional wear",
      layout: "Open shelving mixed with closed storage, farmhouse sinks, and pot racks",
    },
    colors: {
      primary: ["Warm Cream", "Sage Green", "Terracotta", "Natural Oak"],
      accent: ["Copper", "Wrought Iron", "Butcher Block"],
    },
    colorSwatches: ["#F5F0E1", "#87A878", "#C35831", "#D4A574"],
    mistakes: [
      "Over-distressing finishes until they look artificial",
      "Using too many competing wood tones—harmony is still important",
      "Forgetting modern conveniences; rustic doesn't mean inconvenient",
    ],
    heroImage: "/images/results/rustic-warmth.jpg",
  },
  "refined-traditional": {
    slug: "refined-traditional",
    name: "The Refined Traditional",
    tagline: "Sophisticated craftsmanship with attention to detail",
    description: [
      "You appreciate the art of restraint within tradition. Your aesthetic honors classic design principles while maintaining a sense of edited sophistication. Every detail is considered, nothing is overdone.",
      "Your ideal kitchen feels established and confident—like it belongs in a home with history and character. Inset doors, beaded details, and classic proportions create spaces that feel curated over generations.",
      "You understand that true quality reveals itself in the details. Your cabinets should demonstrate the same commitment to craftsmanship that you bring to everything in your life.",
    ],
    features: {
      doorStyle:
        "Inset doors with beaded face frames—the hallmark of fine cabinetry",
      hardware:
        "Classic knobs and latches in polished nickel, unlacquered brass, or oil-rubbed bronze",
      finish: "Painted finishes in classic white, soft gray, or muted blue; cherry or mahogany stains",
      layout: "Furniture-style details, turned legs on islands, and integrated hutch pieces",
    },
    colors: {
      primary: ["Classic White", "Soft Gray", "Muted Blue", "Cherry Wood"],
      accent: ["Polished Nickel", "Honed Marble", "Unlacquered Brass"],
    },
    colorSwatches: ["#FEFEFA", "#B0B0B0", "#6B8BA4", "#5C3D2E"],
    mistakes: [
      "Skipping the inset detail—it's what defines this style",
      "Choosing finishes that are too stark or modern for traditional architecture",
      "Overlooking furniture-style feet and toe kicks that complete the look",
    ],
    heroImage: "/images/results/refined-traditional.jpg",
  },
};

export function getStyleProfile(slug: StyleType): StyleProfile {
  return styleProfiles[slug];
}
