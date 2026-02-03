export type StyleType =
  | "traditional"
  | "transitional"
  | "modern"
  | "rustic"
  | "country-cottage"
  | "coastal";

export interface QuizAnswers {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  q10: string;
}

// Letter to style mapping (A-F maps to 6 styles)
const letterStyleMap: Record<string, StyleType> = {
  A: "traditional",
  B: "transitional",
  C: "modern",
  D: "rustic",
  E: "country-cottage",
  F: "coastal",
};

export function calculateQuizResult(answers: QuizAnswers): StyleType {
  // Count frequency of each letter (A through F)
  const letterCounts: Record<string, number> = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
  };

  // Count all answers
  Object.values(answers).forEach((answer) => {
    if (letterCounts[answer] !== undefined) {
      letterCounts[answer]++;
    }
  });

  // Find the letter(s) with highest count
  const maxCount = Math.max(...Object.values(letterCounts));
  const topLetters = Object.entries(letterCounts)
    .filter(([_, count]) => count === maxCount)
    .map(([letter]) => letter);

  // If there's a clear winner, return it
  if (topLetters.length === 1) {
    return letterStyleMap[topLetters[0]];
  }

  // Tiebreaker logic from PDF:
  // 1. Use Question 10 answer as first tiebreaker
  // 2. If still tied, use Question 6 answer as second tiebreaker
  const q10Answer = answers.q10;
  if (topLetters.includes(q10Answer)) {
    return letterStyleMap[q10Answer];
  }

  const q6Answer = answers.q6;
  if (topLetters.includes(q6Answer)) {
    return letterStyleMap[q6Answer];
  }

  // Fallback to first tied letter (shouldn't happen, but just in case)
  return letterStyleMap[topLetters[0]];
}

export function getStyleSlug(style: StyleType): string {
  return style;
}

export function getStyleDisplayName(style: StyleType): string {
  const names: Record<StyleType, string> = {
    traditional: "Gone with the Wind",
    transitional: "Marley & Me",
    modern: "Devil Wears Prada",
    rustic: "The Notebook",
    "country-cottage": "The Parent Trap",
    coastal: "Miami Vice",
  };
  return names[style];
}

export function getStyleDescription(style: StyleType): string {
  const descriptions: Record<StyleType, string> = {
    traditional:
      "You have an eye for timeless elegance that never goes out of style. Your dream cabinets feature rich, dark wood stains in mahogany, cherry, or walnut with raised panel doors and ornate moldings.",
    transitional:
      "You want a home that handles the chaos of real family life while still looking magazine-worthy. Classic enough to last, updated enough to feel fresh, real enough to be home.",
    modern:
      "You don't do 'good enough.' You do everything with intention. Your home should be sleek, sophisticated, and impossibly chic—a statement of who you are.",
    rustic:
      "You don't want factory-fresh perfection. You want wood with history, texture you can feel, and cabinets that will collect stories for decades.",
    "country-cottage":
      "You're drawn to the cozy elegance of painted cabinets, countryside charm, and spaces that feel like a European escape. Charming and inviting is your vibe.",
    coastal:
      "You're not interested in heavy or formal. You want light, fresh, breezy spaces that feel like an escape from everyday stress. Permanent vacation vibes.",
  };
  return descriptions[style];
}
