export type ViewState = 'HOME' | 'SERVICES' | 'TEAM' | 'GALLERY' | 'CONTACT';

export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  description?: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  category: 'Blonde' | 'Balayage' | 'Extensions' | 'Corrective';
  caption: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
