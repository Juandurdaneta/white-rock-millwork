export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "When you imagine your dream home, what feeling do you want it to give you?",
    options: [
      { id: "A", text: "Timeless elegance, a space that feels like a legacy" },
      { id: "B", text: "Warm and welcoming, where family naturally gathers" },
      { id: "C", text: "Sleek and sophisticated, a space that feels effortlessly chic" },
      { id: "D", text: "Romantic and nostalgic, filled with character and stories" },
      { id: "E", text: "Charming and inviting, like a countryside escape" },
      { id: "F", text: "Breezy and relaxed, like you're on vacation every day" },
    ],
  },
  {
    id: "q2",
    question: "You've been pinning kitchen inspiration for months. What keeps catching your eye?",
    options: [
      { id: "A", text: "Grand, dramatic spaces with rich wood tones and ornate details" },
      { id: "B", text: "Clean, comfortable kitchens that feel updated but not trendy" },
      { id: "C", text: "Minimalist perfection where every detail is curated and intentional" },
      { id: "D", text: "Weathered woods, exposed beams, and that reclaimed look" },
      { id: "E", text: "Cozy painted cabinets with open shelving and vintage charm" },
      { id: "F", text: "Bright whites and soft blues that make you feel like you're near water" },
    ],
  },
  {
    id: "q3",
    question: "If your cabinets could only be ONE color family for the next 20 years...",
    options: [
      { id: "A", text: "Rich, dark wood stains like mahogany, cherry, or walnut" },
      { id: "B", text: "Soft neutrals like warm grays, taupes, or greiges" },
      { id: "C", text: "Bold statements like deep charcoal, navy, or pure white with drama" },
      { id: "D", text: "Natural wood with visible grain and imperfections" },
      { id: "E", text: "Painted in soft colors like sage, cream, or powder blue" },
      { id: "F", text: "Crisp white or light natural wood, airy and fresh" },
    ],
  },
  {
    id: "q4",
    question: "Honest truth: Your kitchen will mostly be used for...",
    options: [
      { id: "A", text: "Hosting elegant dinner parties" },
      { id: "B", text: "Daily family activities with homework, snacks, and real life" },
      { id: "C", text: "Looking absolutely flawless, like a magazine spread come to life" },
      { id: "D", text: "Creating from scratch with baking, canning, and real cooking" },
      { id: "E", text: "Cozy gatherings over coffee and homemade treats" },
      { id: "F", text: "Easy, breezy entertaining" },
    ],
  },
  {
    id: "q5",
    question: "When it comes to cabinet details and hardware...",
    options: [
      { id: "A", text: "More is more. I love ornate moldings, corbels, and decorative elements" },
      { id: "B", text: "Simple but quality. Classic Shaker style with understated hardware" },
      { id: "C", text: "Less is more. Integrated handles or push-to-open, nothing visible" },
      { id: "D", text: "Unique character with wrought iron, vintage pulls, and rustic charm" },
      { id: "E", text: "Charming touches like glass fronts, beadboard, and delicate knobs" },
      { id: "F", text: "Light and simple with brushed nickel or natural rope accents" },
    ],
  },
  {
    id: "q6",
    question: "Which era or aesthetic secretly inspires your design taste?",
    options: [
      { id: "A", text: "Old Hollywood glamour and Southern belle elegance" },
      { id: "B", text: "Suburban family sitcom homes from the 90s and 2000s" },
      { id: "C", text: "NYC luxury, high fashion, and editorial perfection" },
      { id: "D", text: "Vintage love stories and restored historic homes" },
      { id: "E", text: "Wine country estates and European countryside charm" },
      { id: "F", text: "Tropical escapes and resort-style luxury" },
    ],
  },
  {
    id: "q7",
    question: "When you run your hand across your dream cabinets, what do you want to feel?",
    options: [
      { id: "A", text: "Smooth, polished wood with a rich, luxurious finish" },
      { id: "B", text: "Soft matte surfaces that are velvety to the touch" },
      { id: "C", text: "Ultra-smooth, flawless, almost glass-like perfection" },
      { id: "D", text: "Natural grain with texture you can feel, authentic and real" },
      { id: "E", text: "Painted surfaces with a soft, slightly hand-crafted feel" },
      { id: "F", text: "Smooth with a subtle weathered feel, like driftwood" },
    ],
  },
  {
    id: "q8",
    question: "Your ideal dinner party vibe is...",
    options: [
      { id: "A", text: "Formal dining with place cards and multiple courses" },
      { id: "B", text: "Casual but nice with real plates, but everyone helps themselves" },
      { id: "C", text: "Sophisticated cocktail party with couture-level presentation" },
      { id: "D", text: "Farm-to-table, family-style platters and mismatched chairs" },
      { id: "E", text: "Cozy brunch with homemade everything and good conversation" },
      { id: "F", text: "Casual and carefree where paper napkins are totally acceptable" },
    ],
  },
  {
    id: "q9",
    question: "Your ideal morning coffee moment happens in a kitchen that feels...",
    options: [
      { id: "A", text: "Like you're the lady of a grand estate, elegant and refined" },
      { id: "B", text: "Comfortable and familiar, your favorite cozy spot" },
      { id: "C", text: "Sleek and energizing, like the chicest spot in town" },
      { id: "D", text: "Peaceful and grounding, connected to simpler times" },
      { id: "E", text: "Charming and serene, like a countryside bed and breakfast" },
      { id: "F", text: "Light and airy, like you're sipping coffee on a resort terrace" },
    ],
  },
  {
    id: "q10",
    question: "When guests walk into your home, you want them to think...",
    options: [
      { id: "A", text: "This belongs in a classic movie, absolutely breathtaking" },
      { id: "B", text: "This is SO them, warm, real, and beautifully updated" },
      { id: "C", text: "This is sophisticated and impossibly chic" },
      { id: "D", text: "This feels like a love letter to the past, so romantic" },
      { id: "E", text: "This is the ultimate countryside dream" },
      { id: "F", text: "Every day would feel like a relaxing getaway in this space" },
    ],
  },
];
