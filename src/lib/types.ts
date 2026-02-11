import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  exact?: boolean;
}

export interface Service {
  title: string;
  items: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  services: Service[];
}

export interface Electrician {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  services: string[]; // array of service category ids
}

export interface PriceEstimate {
  service: string;
  priceRange: string;
  min: number;
  max: number;
}

export interface WhyHireUsItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}
