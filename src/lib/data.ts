import {
  Construction,
  Building2,
  Factory,
  Sparkles,
  Siren,
  ShieldCheck,
  Zap,
  ThumbsUp,
  Award,
  BarChart,
  Leaf,
  ClipboardList,
  Wrench,
  CalendarCheck,
  Smile,
} from 'lucide-react';
import type { ServiceCategory, PriceEstimate, WhyHireUsItem, Electrician, HowItWorksStep, Testimonial } from './types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'residential',
    title: 'Residential Services',
    description: 'Electrical solutions for your home.',
    icon: Construction,
    services: [
      {
        title: 'Electrical Wiring Installation',
        items: [
          'Complete house wiring (new construction)',
          'Rewiring old homes',
          'Concealed and surface wiring',
          'Cable management and trunking',
        ],
      },
      {
        title: 'Lighting Installation',
        items: [
          'Ceiling lights, LED lights, Chandeliers',
          'Wall lights & Garden lighting',
          'Smart lighting systems',
        ],
      },
      {
        title: 'Switches & Sockets Installation',
        items: ['Power outlets', 'USB outlets', 'Dimmer switches', 'Smart switches'],
      },
      {
        title: 'Electrical Panel / DB Installation',
        items: ['Circuit breaker installation', 'Distribution board (DB) setup', 'Fuse replacement', 'Load balancing'],
      },
      {
        title: 'Electrical Repairs',
        items: [
          'Short circuit troubleshooting',
          'Power failure repair',
          'Burning smell issues',
          'Tripping breaker problems',
          'Faulty wiring repair',
        ],
      },
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Services',
    description: 'Powering your business operations.',
    icon: Building2,
    services: [
      {
        title: 'Office & Shop Wiring',
        items: ['Complete electrical setup', 'Power distribution planning', 'Heavy-duty wiring'],
      },
      {
        title: 'Commercial Lighting',
        items: ['Office lighting design', 'Warehouse lighting', 'Outdoor & Emergency lighting'],
      },
      {
        title: 'Backup Power Systems',
        items: ['Generator installation', 'UPS systems', 'Automatic transfer switches (ATS)'],
      },
      {
        title: 'Electrical Maintenance Contracts',
        items: ['Routine inspection', 'Preventive maintenance', 'Electrical safety testing', 'System upgrades'],
      },
    ],
  },
  {
    id: 'industrial',
    title: 'Industrial Services',
    description: 'Heavy-duty electrical expertise.',
    icon: Factory,
    services: [
      {
        title: 'Industrial Wiring',
        items: ['Three-phase wiring', 'Heavy machinery wiring', 'Control panel installation'],
      },
      {
        title: 'Motor & Equipment Installation',
        items: ['Electric motor wiring', 'Industrial generator setup', 'Transformer installation'],
      },
      {
        title: 'Maintenance & Troubleshooting',
        items: ['Fault diagnosis', 'Electrical load analysis', 'Preventive maintenance'],
      },
    ],
  },
  {
    id: 'specialized',
    title: 'Specialized Services',
    description: 'Modern electrical installations.',
    icon: Sparkles,
    services: [
      {
        title: 'Solar Panel Installation',
        items: ['Solar system setup', 'Inverter installation', 'Battery backup systems'],
      },
      {
        title: 'EV Charger Installation',
        items: ['Home EV charging stations', 'Commercial EV setup'],
      },
      {
        title: 'CCTV & Security Systems',
        items: ['Camera wiring', 'Security system installation', 'Intercom systems'],
      },
      {
        title: 'Smart Home Installation',
        items: ['Smart switches', 'Smart thermostats', 'Home automation systems'],
      },
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency Services (24/7)',
    description: 'Urgent help when you need it most.',
    icon: Siren,
    services: [
      {
        title: 'Urgent Repairs',
        items: ['Power outage repair', 'Electrical sparks or burning smell', 'Short circuit diagnosis', 'Urgent breaker replacement'],
      },
      {
        title: 'Safety Interventions',
        items: ['Electrical fire prevention', 'Immediate hazard assessment'],
      }
    ],
  },
];

export const priceEstimates: PriceEstimate[] = [
    { service: 'Basic Repair', priceRange: '$50 – $150', min: 50, max: 150 },
    { service: 'Full House Wiring', priceRange: '$1,500 – $5,000', min: 1500, max: 5000 },
    { service: 'Panel Upgrade', priceRange: '$800 – $2,500', min: 800, max: 2500 },
    { service: 'Light Installation', priceRange: '$60 – $200', min: 60, max: 200 },
    { service: 'Generator Installation', priceRange: '$500 – $3,000', min: 500, max: 3000 },
    { service: 'Solar Installation', priceRange: '$2,000 – $10,000', min: 2000, max: 10000 },
];

export const whyHireUsItems: WhyHireUsItem[] = [
    { 
        title: 'Certified & Licensed', 
        description: 'All our electricians are certified, ensuring professional and compliant work.',
        icon: Award,
    },
    { 
        title: 'Safety Compliance', 
        description: 'We adhere to the strictest safety standards to protect your property and family.',
        icon: ShieldCheck,
    },
    { 
        title: 'Long-term Reliability', 
        description: 'Quality workmanship that lasts, preventing future issues and saving you money.',
        icon: ThumbsUp,
    },
    { 
        title: 'Proper Load Calculation', 
        description: 'We ensure your electrical system can handle your needs without overloading.',
        icon: BarChart,
    },
    { 
        title: 'Energy Efficient Solutions', 
        description: 'Save on your bills with modern, energy-saving lighting and systems.',
        icon: Leaf,
    },
    { 
        title: 'Insurance & Warranty', 
        description: 'Our work is insured and warrantied, giving you complete peace of mind.',
        icon: Zap,
    },
];

export const electricians: Electrician[] = [
    { id: '1', name: 'John Spark', location: 'New York, NY', rating: 4.9, reviews: 124, services: ['residential', 'emergency'] },
    { id: '2', name: 'Sarah Connor', location: 'Los Angeles, CA', rating: 5.0, reviews: 98, services: ['residential', 'specialized', 'emergency'] },
    { id: '3', name: 'Mike Volt', location: 'Chicago, IL', rating: 4.7, reviews: 210, services: ['commercial', 'industrial'] },
    { id: '4', name: 'Current Affairs Electric', location: 'Houston, TX', rating: 4.8, reviews: 150, services: ['commercial', 'emergency'] },
    { id: '5', name: 'Green Power Solutions', location: 'Phoenix, AZ', rating: 4.9, reviews: 88, services: ['specialized'] },
    { id: '6', name: 'Industrial Powerhouse', location: 'Detroit, MI', rating: 4.6, reviews: 180, services: ['industrial'] },
    { id: '7', name: 'Home Safe Electric', location: 'Philadelphia, PA', rating: 4.8, reviews: 302, services: ['residential'] },
    { id: '8', name: '24/7 Emergency Electric', location: 'New York, NY', rating: 4.9, reviews: 450, services: ['emergency'] },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    title: 'Describe Your Need',
    description: "Browse our services or use our estimator to understand your needs. Then, find a local professional.",
    icon: ClipboardList,
  },
  {
    step: 2,
    title: 'Schedule a Visit',
    description: 'Connect with a certified electrician and schedule a visit at a time that is convenient for you.',
    icon: CalendarCheck,
  },
  {
    step: 3,
    title: 'Get the Job Done',
    description: 'Your chosen professional will arrive on time and complete the job to the highest safety and quality standards.',
    icon: Wrench,
  },
  {
    step: 4,
    title: 'Relax with Confidence',
    description: 'Enjoy peace of mind knowing your electrical system is safe, reliable, and backed by our quality guarantee.',
    icon: Smile,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "The electrician was on time, very professional, and fixed our wiring issue in under an hour. I couldn't be happier with the service!",
    author: 'Sarah J.',
    location: 'New York, NY',
  },
  {
    quote: "WattzUp connected us with an amazing commercial electrician for our new office setup. The whole process was seamless. Highly recommended!",
    author: 'David L.',
    location: 'Los Angeles, CA',
  },
  {
    quote: "I had an emergency power outage at night. The 24/7 service is a lifesaver. A friendly electrician arrived quickly and restored power.",
    author: 'Maria G.',
    location: 'Chicago, IL',
  },
];
