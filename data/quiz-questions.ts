export interface QuizOption {
  id: string;
  label: string;
  description: string;
  image?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "It's movie night. Which film's aesthetic speaks to your soul?",
    options: [
      {
        id: "a",
        label: "The Great Gatsby",
        description: "Glamorous, ornate, timeless elegance",
        image: "/images/quiz/gatsby.jpg",
      },
      {
        id: "b",
        label: "A Beautiful Mind",
        description: "Classic, intellectual, refined simplicity",
        image: "/images/quiz/beautiful-mind.jpg",
      },
      {
        id: "c",
        label: "Ex Machina",
        description: "Sleek, modern, cutting-edge minimalism",
        image: "/images/quiz/ex-machina.jpg",
      },
      {
        id: "d",
        label: "Under the Tuscan Sun",
        description: "Warm, rustic, inviting charm",
        image: "/images/quiz/tuscan-sun.jpg",
      },
      {
        id: "e",
        label: "The Holiday",
        description: "Cozy, transitional, effortlessly comfortable",
        image: "/images/quiz/holiday.jpg",
      },
    ],
  },
  {
    id: "q2",
    question: "Your dream vacation home would be...",
    options: [
      {
        id: "a",
        label: "Manhattan Penthouse",
        description: "A penthouse with skyline views",
        image: "/images/quiz/penthouse.jpg",
      },
      {
        id: "b",
        label: "French Farmhouse",
        description: "A renovated farmhouse in the countryside",
        image: "/images/quiz/farmhouse.jpg",
      },
      {
        id: "c",
        label: "Mediterranean Villa",
        description: "A minimalist villa overlooking the sea",
        image: "/images/quiz/villa.jpg",
      },
      {
        id: "d",
        label: "Pacific Northwest Cottage",
        description: "A craftsman cottage among the trees",
        image: "/images/quiz/cottage.jpg",
      },
      {
        id: "e",
        label: "Boston Brownstone",
        description: "A restored historic brownstone",
        image: "/images/quiz/brownstone.jpg",
      },
    ],
  },
  {
    id: "q3",
    question: "When you imagine hosting in your dream kitchen, you see...",
    options: [
      {
        id: "a",
        label: "Elegant Dinner Parties",
        description: "Everything perfectly in place",
        image: "/images/quiz/dinner-party.jpg",
      },
      {
        id: "b",
        label: "Casual Gatherings",
        description: "Everyone congregating around the island",
        image: "/images/quiz/casual-gathering.jpg",
      },
      {
        id: "c",
        label: "Sophisticated Cocktail Hours",
        description: "Sleek, hidden storage everywhere",
        image: "/images/quiz/cocktail-hour.jpg",
      },
      {
        id: "d",
        label: "Warm Family Meals",
        description: "Everyone helping to cook together",
        image: "/images/quiz/family-meals.jpg",
      },
      {
        id: "e",
        label: "Intimate Conversations",
        description: "Coffee with close friends",
        image: "/images/quiz/intimate-coffee.jpg",
      },
    ],
  },
  {
    id: "q4",
    question: "When making design decisions, you typically...",
    options: [
      {
        id: "a",
        label: "Know Exactly What You Want",
        description: "Classic never goes out of style",
        image: "/images/quiz/classic-choice.jpg",
      },
      {
        id: "b",
        label: "Love Mixing Old and New",
        description: "Character matters most",
        image: "/images/quiz/mix-old-new.jpg",
      },
      {
        id: "c",
        label: "Prefer Clean Lines",
        description: "Less is more",
        image: "/images/quiz/clean-lines.jpg",
      },
      {
        id: "d",
        label: "Follow Your Heart",
        description: "If it feels right, it's right",
        image: "/images/quiz/follow-heart.jpg",
      },
      {
        id: "e",
        label: "Research Extensively",
        description: "You want to understand every option",
        image: "/images/quiz/research.jpg",
      },
    ],
  },
  {
    id: "q5",
    question: "Which cabinet detail catches your eye?",
    options: [
      {
        id: "a",
        label: "Ornate Moldings",
        description: "Decorative hardware and intricate details",
        image: "/images/quiz/ornate-moldings.jpg",
      },
      {
        id: "b",
        label: "Shaker-Style Doors",
        description: "Subtle sophistication",
        image: "/images/quiz/shaker-style.jpg",
      },
      {
        id: "c",
        label: "Flat-Panel Design",
        description: "Handleless, seamless integration",
        image: "/images/quiz/flat-panel.jpg",
      },
      {
        id: "d",
        label: "Natural Wood Grain",
        description: "Visible character and warmth",
        image: "/images/quiz/wood-grain.jpg",
      },
      {
        id: "e",
        label: "Beaded Inset",
        description: "Traditional craftsmanship",
        image: "/images/quiz/beaded-inset.jpg",
      },
    ],
  },
];
