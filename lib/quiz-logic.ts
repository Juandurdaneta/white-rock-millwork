export type StyleType =
  | "classic-elegance"
  | "modern-minimalist"
  | "transitional-blend"
  | "rustic-warmth"
  | "refined-traditional";

export interface QuizAnswers {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
}

// Map answers to style weights
const answerStyleMap: Record<string, Partial<Record<StyleType, number>>> = {
  // Q1: Movie aesthetic
  a1: { "classic-elegance": 3, "refined-traditional": 1 },
  b1: { "refined-traditional": 3, "classic-elegance": 1 },
  c1: { "modern-minimalist": 3 },
  d1: { "rustic-warmth": 3 },
  e1: { "transitional-blend": 3 },

  // Q2: Dream vacation
  a2: { "modern-minimalist": 2, "classic-elegance": 2 },
  b2: { "rustic-warmth": 3, "transitional-blend": 1 },
  c2: { "modern-minimalist": 3 },
  d2: { "rustic-warmth": 2, "transitional-blend": 2 },
  e2: { "refined-traditional": 3, "classic-elegance": 1 },

  // Q3: Hosting style
  a3: { "classic-elegance": 3, "refined-traditional": 2 },
  b3: { "transitional-blend": 3, "rustic-warmth": 1 },
  c3: { "modern-minimalist": 3 },
  d3: { "rustic-warmth": 3, "transitional-blend": 1 },
  e3: { "transitional-blend": 2, "refined-traditional": 2 },

  // Q4: Decision style
  a4: { "classic-elegance": 2, "refined-traditional": 2 },
  b4: { "transitional-blend": 3, "rustic-warmth": 1 },
  c4: { "modern-minimalist": 3 },
  d4: { "rustic-warmth": 3 },
  e4: { "refined-traditional": 3 },

  // Q5: Detail preference
  a5: { "classic-elegance": 3 },
  b5: { "transitional-blend": 3, "refined-traditional": 1 },
  c5: { "modern-minimalist": 3 },
  d5: { "rustic-warmth": 3 },
  e5: { "refined-traditional": 3, "classic-elegance": 1 },
};

export function calculateQuizResult(answers: QuizAnswers): StyleType {
  const scores: Record<StyleType, number> = {
    "classic-elegance": 0,
    "modern-minimalist": 0,
    "transitional-blend": 0,
    "rustic-warmth": 0,
    "refined-traditional": 0,
  };

  // Process each answer
  const answerKeys = [
    `${answers.q1}1`,
    `${answers.q2}2`,
    `${answers.q3}3`,
    `${answers.q4}4`,
    `${answers.q5}5`,
  ];

  answerKeys.forEach((key) => {
    const styleWeights = answerStyleMap[key];
    if (styleWeights) {
      Object.entries(styleWeights).forEach(([style, weight]) => {
        scores[style as StyleType] += weight as number;
      });
    }
  });

  // Find the highest scoring style
  let maxScore = 0;
  let resultStyle: StyleType = "transitional-blend";

  Object.entries(scores).forEach(([style, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultStyle = style as StyleType;
    }
  });

  return resultStyle;
}

export function getStyleSlug(style: StyleType): string {
  return style;
}

export function getStyleDisplayName(style: StyleType): string {
  const names: Record<StyleType, string> = {
    "classic-elegance": "The Classic Elegance",
    "modern-minimalist": "The Modern Minimalist",
    "transitional-blend": "The Transitional Blend",
    "rustic-warmth": "The Rustic Warmth",
    "refined-traditional": "The Refined Traditional",
  };
  return names[style];
}
