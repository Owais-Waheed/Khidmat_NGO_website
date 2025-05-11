import React, { useState } from 'react';
import { Event } from '../types';
import { Calendar, Filter, Search } from 'lucide-react';

const events: Event[] = [
  {
    id: '1',
    title: 'Eid Drive 2025',
    date: '2025-04-01',
    description: 'Distributed cloths and money at civil hospital Karachi, NICH, and other hospitals as a gratitude of the community service.',
    images: [
      ' /Assets/assets_events/eid_drive_1.jpg',
      ' /Assets/assets_events/eid_drive_2.jpg',
      ' /Assets/assets_events/eid_drive_3.jpg',
    ],
    category: 'Community Service'
  },
  {
    id: '2',
    title: 'Project Jal',
    date: '2024-07-14',
    description: 'Successful installation of the first Solar Water Pump and Tank in New Chorr, Sindh, benefiting over 100 families in Bajeer Mohalla.',
    images: [
      ' /Assets/assets_events/project_jal_1.jpg',
      ' /Assets/assets_events/project_jal_2.jpg'
    ],
    category: 'Infrastructure'
  },
  {
    id: '3',
    title: 'Free Medical Consultation Camp',
    date: '2024-06-09',
    description: 'Hosted in Karachi with Tabba Heart Institute, Essa Laboratory, and local organizations.',
    images: [
      ' /Assets/assets_events/medical_camp_1.jpg'
    ],
    category: 'Health'
  },
  {
    id: '4',
    title: 'Heatstroke Relief & Awareness Camp',
    date: '2024-06-01',
    description: '5-day camp at SMBB Trauma Centre, Karachi, serving 10,500 liters of cold water and Rooh Afza.',
    images: [
      ' /Assets/assets_events/heatstroke_1.jpg',
      ' /Assets/assets_events/heatstroke_2.jpg'
    ],
    category: 'Awareness'
  },
  {
    id: '5',
    title: 'Iftar Drive 2024',
    date: '2024-04-05',
    description: 'Iftar Drive during the month of Ramadan near the Cantt Station, Karachi.',
    images: [
      ' /Assets/assets_events/iftar_drive_1.jpg',
      ' /Assets/assets_events/iftar_drive_2.jpg'
    ],
    category: 'Community Service'
  }
];

const categories = [
  "All",
  "Community Service",
  "Infrastructure",
  "Awareness",
  "Health",
];

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our past and upcoming events that bring positive change to communities.
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search events..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Filter className="text-gray-400 h-5 w-5" />
            <div className="flex gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                    ${selectedCategory === category
                      ? 'bg-rose-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={event.images[0]}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="h-5 w-5 mr-2" />
                  {new Date(event.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="flex gap-2">
                  {event.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${event.title} - ${index + 1}`}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}