import React from 'react';
import { Project } from '../types';
import { ArrowRight, Users, Target, Calendar } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'Community Education Initiative',
    description: 'Providing quality education to underprivileged children through digital learning platforms and dedicated mentorship programs.',
    impact: 'Reached 1000+ students across 15 communities',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    status: 'ongoing'
  },
  {
    id: '2',
    title: 'Healthcare Outreach Program',
    description: 'Mobile medical camps and health awareness campaigns in rural areas, focusing on preventive healthcare and wellness.',
    impact: 'Served 5000+ patients in remote locations',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    status: 'ongoing'
  },
  {
    id: '3',
    title: 'Women Empowerment Workshop',
    description: 'Skill development and entrepreneurship training for women, enabling financial independence and community leadership.',
    impact: 'Empowered 500+ women entrepreneurs',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    status: 'upcoming'
  }
];

const StatusBadge = ({ status }: { status: Project['status'] }) => {
  const colors = {
    ongoing: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    upcoming: 'bg-yellow-100 text-yellow-800'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we're making a difference in communities through our various initiatives and programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <StatusBadge status={project.status} />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex items-center text-rose-600 mb-4">
                  <Target className="h-5 w-5 mr-2" />
                  <span className="font-medium">{project.impact}</span>
                </div>
                
                <a
                  href={`#project-${project.id}`}
                  className="inline-flex items-center text-rose-600 hover:text-rose-700 font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}