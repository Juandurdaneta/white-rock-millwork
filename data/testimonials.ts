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
      "We were overwhelmed until we found White Rock. They understood our vision immediately and delivered exactly what we dreamed of. The attention to detail is unmatched.",
    name: "Sarah M.",
    location: "Austin, TX",
    image: "/images/testimonials/sarah.jpg",
  },
  {
    id: "2",
    quote:
      "The quality difference is unbelievable. Three years in and our cabinets still look brand new. Everyone who visits our home asks who made them.",
    name: "Michael & Jennifer T.",
    location: "San Antonio, TX",
    image: "/images/testimonials/michael-jennifer.jpg",
  },
  {
    id: "3",
    quote:
      "From design to installation, everything was seamless. They actually listened to how we use our kitchen and designed around our daily life. It's perfect.",
    name: "The Rodriguez Family",
    location: "Dallas, TX",
    image: "/images/testimonials/rodriguez.jpg",
  },
];
