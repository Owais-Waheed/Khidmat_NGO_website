import React from 'react';
import { Project } from '../types';
import { ArrowRight, Users, Target, Calendar } from 'lucide-react';

const projects: Project[] = [
  {
    id: '4',
    title: 'Eid Drive 2025',
    description: 'Distributed cloths and money at Civil Hospital Karachi, NICH, and other hospitals as a gesture of community gratitude.',
    impact: 'Supported hundreds of patients and their families during Eid',
    image: ' Assets/assets_events/eid_drive_2.jpg',
    status: 'completed'
  },
  {
    id: '5',
    title: 'Project Jal',
    description: 'Successful installation of the first Solar Water Pump and Tank in New Chorr, Sindh, benefiting over 100 families in Bajeer Mohalla. The pump was inaugurated on 14-07-2024, and MAF provided training to ensure proper use and maintenance.',
    impact: '100+ families gained access to clean water',
    image: ' Assets/assets_events/project_jal_2.jpg',
    status: 'completed'
  },
  {
    id: '6',
    title: 'Free Medical Consultation Camp',
    description: 'In partnership with Tabba Heart Institute, Essa Laboratory, and local organizations, a Medical Consultation Camp was hosted in Karachi on Sunday, June 9th, 2024.',
    impact: 'Provided free consultations and testing to underserved communities',
    image: ' Assets/assets_events/medical_camp_1.jpg',
    status: 'completed'
  },
  {
    id: '7',
    title: 'Heatstroke Relief & Awareness Camp',
    description: 'Held a 5-day Heatstroke Relief Camp at SMBB Trauma Centre, Karachi, serving 10,500 liters of cold water and Rooh Afza.',
    impact: 'Helped hundreds cope with extreme summer heat',
    image: ' Assets/assets_events/heatstroke_2.jpg',
    status: 'completed'
  },
  {
    id: '8',
    title: 'Iftar Drive 2024',
    description: 'Iftar Drive during the month of Ramadan near the Cantt Station, Karachi.',
    impact: 'Distributed Iftar to hundreds during Ramadan evenings',
    image: ' Assets/assets_events/iftar_drive_2.jpg',
    status: 'completed'
  },
  {
    id: '9',
    title: 'Teacher Training Workshop: Countering Stereotypes Through Education',
    description: 'On January 25, 2025, Maheshwari Action Forum organized a workshop at Government Girls Secondary School, Shah Faisal, Karachi, to promote tolerance, diversity, and social cohesion.',
    impact: 'Empowered teachers with inclusive education strategies',
    image: ' Assets/assets_events/Workshop.jpg',
    status: 'completed'
  },
  {
    id: '10',
    title: 'Community Spirit Podcast Series',
    description: 'Upcoming podcast series aimed at uplifting community spirit by sharing inspiring stories and voices.',
    impact: 'To be launched soon — stay tuned!',
    image: ' Assets/assets_events/pak_global.jpg',
    status: 'upcoming'
  },
  {
    id: '11',
    title: 'Plantation Drive Initiative',
    description: 'An upcoming environmental initiative focusing on increasing green spaces in urban neighborhoods through community-driven plantation drives.',
    impact: 'Targeting 1000+ trees across 5 locations',
    image: ' Assets/assets_events/plantation_drive1.jpeg',
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