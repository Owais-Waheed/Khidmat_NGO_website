import React from 'react';
import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
            <img src="src\Assets\MAF_logo.jpg" alt="Maheshwari Action Forum Logo" className="h-10 w-10" />
              <span className="ml-2 text-xl font-bold">Maheshwari Action Forum</span>
            </div>
            <p className="text-gray-400">
              Empowering communities and creating positive change through collective action.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {/* <li><a href="#home" className="text-gray-400 hover:text-rose-500 transition-colors">Home</a></li> */}
              <li><a href="#projects" className="text-gray-400 hover:text-rose-500 transition-colors">Projects</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-rose-500 transition-colors">Team</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-rose-500 transition-colors">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-rose-500" />
                <a href="mailto:teammaheshwaripak@gmail.com" className="text-gray-400 hover:text-rose-500">teammaheshwaripak@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-rose-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-rose-500" />
                <span className="text-gray-400">Community Center, Karachi</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
            <a
                href="https://www.instagram.com/maheshwariactionforum/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-rose-600 hover:text-rose-800 transition" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100091449397418"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-rose-600 hover:text-rose-800 transition" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Maheshwari Action Forum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

{/* Social Links
            <div className="mt-6 flex justify-center lg:justify-start space-x-6">
              <a href="mailto:teammaheshwaripak@gmail.com" aria-label="Email">
                <Mail className="h-6 w-6 text-rose-600 hover:text-rose-800 transition" />
              </a>
              <a
                href="https://www.instagram.com/maheshwariactionforum/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-rose-600 hover:text-rose-800 transition" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100091449397418"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-rose-600 hover:text-rose-800 transition" />
              </a>
            </div> */}