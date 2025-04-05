import React from 'react';
import { TeamMember } from '../types';
import { Mail, Phone, Linkedin } from 'lucide-react';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    role: 'Executive Director',
    bio: 'With over 15 years of experience in social work and community development, Dr. Johnson leads our initiatives with passion and expertise.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    contact: {
      email: 'sarah.j@maf.org',
      phone: '+1 (555) 123-4567'
    }
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Program Director',
    bio: 'Michael specializes in educational program development and has successfully implemented various community initiatives.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    contact: {
      email: 'michael.c@maf.org'
    }
  },
  {
    id: '3',
    name: 'Priya Patel',
    role: 'Community Outreach Manager',
    bio: 'Priya brings valuable experience in community engagement and has been instrumental in expanding our reach.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    contact: {
      email: 'priya.p@maf.org',
      phone: '+1 (555) 987-6543'
    }
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals who work tirelessly to make our mission a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-6 -mt-16 relative">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-rose-400 font-medium mb-4">{member.role}</p>
                </div>
                
                <p className="text-gray-600 mb-6">{member.bio}</p>
                
                <div className="space-y-2">
                  <a
                    href={`mailto:${member.contact.email}`}
                    className="flex items-center text-gray-600 hover:text-rose-600 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    {member.contact.email}
                  </a>
                  {member.contact.phone && (
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-5 w-5 mr-2" />
                      {member.contact.phone}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}