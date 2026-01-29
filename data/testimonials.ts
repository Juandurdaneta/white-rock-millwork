export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  image?: string;
}

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
