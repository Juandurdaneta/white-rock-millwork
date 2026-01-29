export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  image?: string;
}

// Featured testimonials shown on homepage (first 3)
export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "When you buy custom cabinetry, you want to both see and feel the difference at the end. With Whiterock Millwork, we certainly did as the end result cabinets are just an extra level of quality in both looks and how they feel.",
    name: "Michael Bode",
    location: "Texas",
  },
  {
    id: "2",
    quote:
      "Michael and his team at Whiterock Millwork are top drawer! They take their time understanding the client's vision. They are craftsmen who can take that vision and deliver an amazing product!",
    name: "Robert Alexander",
    location: "Texas",
  },
  {
    id: "3",
    quote:
      "I am so impressed with this company! They did all the cabinetry in our new home and we couldn't be happier. Outstanding quality product and superior customer service!",
    name: "Bette Paese",
    location: "Texas",
  },
];

// All reviews for potential use elsewhere
export const allTestimonials: Testimonial[] = [
  ...testimonials,
  {
    id: "4",
    quote:
      "Michael does amazing work, did all our custom cabinetry. Give them a chance. They pay attention to detail and we are very pleased with their work.",
    name: "Chad Harrison",
    location: "Texas",
  },
  {
    id: "5",
    quote:
      "My husband and I are remodeling our 30+ year old home. Michael and his guys at Whiterock Millwork have just finished installing our kitchen cabinets and they are beautiful! They built our cabinets in both baths and a large set in our utility room.",
    name: "Beverly Alexander",
    location: "Texas",
  },
  {
    id: "6",
    quote:
      "Very pleased with the work Whiterock Millwork did on the cabinets in our new home. They stepped in and took over a job that the original cabinet person quit on! They reworked the drawings and tweaked them as necessary. They were a lifesaver!",
    name: "Sherry Morgan",
    location: "Texas",
  },
  {
    id: "7",
    quote:
      "Whiterock Millwork built several cabinets for our great room and did a great job. The quality of the cabinets and the attention to detail are outstanding. I would definitely use them again.",
    name: "Ken Wood",
    location: "Texas",
  },
  {
    id: "8",
    quote:
      "This company is awesome! They are so friendly and do excellent and fast work! The cabinets look so good! I'm so happy with their work!",
    name: "Bethany Loe",
    location: "Texas",
  },
  {
    id: "9",
    quote:
      "I had a very nice experience with this company, they were very professional and did everything they said. I highly recommend them for cabinets and other work.",
    name: "Tamalitos SA",
    location: "Texas",
  },
  {
    id: "10",
    quote:
      "I contacted Michael to get a broken door replaced. He came out and picked up the door, had a new one built, and installed it. Great customer service even years after the original installation!",
    name: "Greg Sharp",
    location: "Texas",
  },
];
