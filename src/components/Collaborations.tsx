import React from 'react';
import { Building2, GraduationCap, Heart, Handshake, ArrowRight } from 'lucide-react';

interface Collaborator {
  id: string;
  name: string;
  type: 'ngo' | 'government' | 'healthcare' | 'educational';
  description: string;
  logo: string;
  projects: string[];
}

const collaborators: Collaborator[] = [
  {
    id: '1',
    name: 'Government Girls Secondary School, Shah Faisal Colony',
    type: 'government',
    description: 'A reputable institution in Karachi dedicated to providing quality education and promoting inclusive learning environments.',
    logo: './public/Assets/assets_collaborators/school.jpg',
    projects: ['Teacher Training Workshop: Countering Stereotypes Through Education']
  },
  {
    id: '2',
    name: 'Tabba Heart Institute',
    type: 'healthcare',
    description: 'A state-of-the-art cardiac hospital in Karachi, renowned for its excellence in cardiovascular care and research.',
    logo: './public/Assets/assets_collaborators/tabba.jpg',
    projects: ['Free Medical Consultation Camp']
  },
  {
    id: '3',
    name: 'Dr. Essa Laboratory and Diagnostic Centre',
    type: 'healthcare',
    description: 'A leading clinical laboratory in Pakistan offering a wide range of diagnostic tests and procedures across the country.',
    logo: './public/Assets/assets_collaborators/essa.jpg',
    projects: ['Free Medical Consultation Camp']
  },
  {
    id: '4',
    name: 'Dr. Ramesh Kumar Vankwani',
    type: 'government',
    description: 'Patron-in-Chief of the Pakistan Hindu Council, dedicated to promoting interfaith harmony and minority rights in Pakistan.',
    logo: './public/Assets/assets_collaborators/hindu_council.jpeg',
    projects: ['Interfaith Harmony Initiatives']
  },
  {
    id: '5',
    name: 'Deputy Commissioner South Karachi',
    type: 'government',
    description: 'The administrative head of Karachi South, overseeing development projects and public welfare initiatives in the region.',
    logo: './public/Assets/assets_collaborators/Government.jpg',
    projects: ['Heatstroke Relief & Awareness Camp']
  },
  {
    id: '6',
    name: 'Aga Khan University (AKU)',
    type: 'educational',
    description: 'An international university committed to improving quality of life through teaching, research, and healthcare initiatives.',
    logo: './public/Assets/assets_collaborators/AKU.jpg',
    projects: ['Community Health Outreach Programs']
  }
];


export default function Collaborations() {
  return (
    <section id="collaborations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Collaborations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Together with our partners, we're creating lasting impact and positive change in communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collaborators.map((collaborator) => (
            <div key={collaborator.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={collaborator.logo}
                  alt={collaborator.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                    ${collaborator.type === 'ngo' ? 'bg-rose-100 text-rose-800' : 'bg-blue-100 text-blue-800'}`}>
                    {collaborator.type === 'ngo' ? 
                      <Heart className="w-4 h-4 mr-1" /> : 
                      <Building2 className="w-4 h-4 mr-1" />}
                    {collaborator.type.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{collaborator.name}</h3>
                <p className="text-gray-600 mb-4">{collaborator.description}</p>
                
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Handshake className="w-5 h-5 mr-2 text-rose-600" />
                    Joint Projects
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 ml-7">
                    {collaborator.projects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href={`#collaboration-${collaborator.id}`}
                  className="inline-flex items-center text-rose-600 hover:text-rose-700 font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Interested in Collaboration?</h3>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Heart className="h-8 w-8 text-rose-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">NGO Partnerships</h4>
                  <p className="mt-2 text-gray-600">Join forces with us to amplify our social impact and reach more communities in need.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Building2 className="h-8 w-8 text-rose-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Government Initiatives</h4>
                  <p className="mt-2 text-gray-600">Partner with us on government programs and policy implementation.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a
                href="#book"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700"
              >
                Schedule a Meeting
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}