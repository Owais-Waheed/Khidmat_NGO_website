export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  contact: {
    email: string;
    phone?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  image: string;
  status: 'ongoing' | 'completed' | 'upcoming';
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  images: string[];
  category: string;
}