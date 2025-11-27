export interface ServicePlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface CartItem {
  planId: string;
  name: string;
  price: number;
  quantity: number;
}

export enum PageRoutes {
  HOME = '/',
  SERVICES = '/services',
  PRICING = '/pricing',
  CHECKOUT = '/checkout',
  CONTACT = '/contact',
  ABOUT = '/about',
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  serviceType: string;
}
