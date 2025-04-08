import React from 'react';
import { TeamMember } from '../types';
import { Mail, Phone, Linkedin } from 'lucide-react';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Bhevishh Kumar',
    role: 'Core Team Member',
    bio: 'The Strategist: Innovative ideation, strategy, financial estimation, experience & planning made this event possible.',
    image: './src/Assets/asset_team/Bhevish Kumar.jpg',
    contact: { email: '' }
  },
  {
    id: '2',
    name: 'Jaint Karmani',
    role: 'Core Team Member',
    bio: 'The Allrounder: Available 24/7, physically or virtually. The initiator, planner & executor. Didn’t sleep enough for nights. The MPL was impossible without him',
    image: './src/Assets/asset_team/Jaint Karmani.jpg',
    contact: { email: '' }
  },
  {
    id: '3',
    name: 'Bhunesh Kumar',
    role: 'Core Team Member',
    bio: 'The Cricketing mastermind: Franchise model, squads, ground, lighting, execution & cricket with full spirit. Credit goes to one & only, him. The event wouldn’t have been executed, if he was not there',
    image: './src/Assets/asset_team/Bhunesh Kumar.jpg',
    contact: { email: '' }
  },
  {
    id: '4',
    name: 'Sagar Langhani',
    role: 'Core Team Member',
    bio: 'The Management Mastermind: The shields, certificates, food for all, the Funland for kids, and proper accommodation to players & audience with smooth execution till the end, would not have been possible without him.',
    image: './src/Assets/asset_team/Sagar Langhani.jpg',
    contact: { email: '' }
  },
  {
    id: '5',
    name: 'Mahaveer Langhani',
    role: 'Core Team Member',
    bio: 'The Logistics Mastermind: The PSL-inspired jerseys you saw, the cricketing equipment, or anything team at any time, he was one call away. Truly an asset',
    image: './src/Assets/asset_team/Mahaveer Langhani.jpg',
    contact: { email: '' }
  },
  {
    id: '6',
    name: 'Neeraj Kumar',
    role: 'Core Team Member',
    bio: 'The Data Scientist: The smooth registration process, the data collection, management, utilization & execution. He was the man behind the screen, not seen too many, but worked hard than many',
    image: './src/Assets/asset_team/Neeraj Kumar.jpg',
    contact: { email: '' }
  },
  {
    id: '7',
    name: 'Bhawesh Kumar Karmani',
    role: 'Head of Social Media & Graphics',
    bio: ' The eye-pleasing graphics you saw on our page, or the live broadcast themes, he kept you truly updated every minute with his art & skills. Truly an asset',
    image: './src/Assets/asset_team/Bhawesh Karmani.jpg',
    contact: { email: '' }
  },
  {
    id: '8',
    name: 'Gavish Vinesh Karmani',
    role: 'Head of Management',
    bio: 'Assigning tasks, allotment of resources & skills required for execution. Gavish was the brain behind it. His hard work & passion paid off!',
    image: './src/Assets/asset_team/Gavish Karmani.jpg',
    contact: { email: '' }
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