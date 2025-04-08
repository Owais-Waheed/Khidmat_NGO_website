import React from 'react';
import { ArrowRight, Mail, Facebook, Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white min-h-screen flex items-center py-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center w-full px-4 sm:px-6 lg:px-8 gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              <span className="block">Serving Humanity,</span>
              <span className="block text-rose-600">Strengthening Communities</span>
            </h1>
            <p className="mt-6 text-gray-600 text-base sm:text-lg md:text-xl text-justify">
              Maheshwari Action Forum (MAF) is dedicated to fostering positive change through initiatives in education, healthcare, social support, and disaster relief. With food drives, medical aid, and scholarships, MAF uplifts communities and empowers individuals across Pakistan.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:justify-start gap-4">
              <a
                href="#impact"
                className="inline-flex items-center justify-center px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white text-base font-medium rounded-md shadow-md transition"
              >
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <img
            className="w-full h-96 sm:h-[500px] object-cover rounded-2xl shadow-xl"
            src="./src/Assets/MAF_cover.png"
            alt="Maheshwari Action Forum in action"
          />
        </div>
      </div>
    </div>
  );
}
