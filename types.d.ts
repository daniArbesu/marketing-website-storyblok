export interface Service {
  title: string;
  subtitle: string;
  price: string;
  description: string;
}

export interface Testimonial {
  name: string;
  image: { filename: string };
  comment: string;
}

export interface Faq {
  question: string;
  answer: string;
}
