import React from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    // { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Team', href: '#team' },
    { label: 'Events', href: '#events' },
    { label: 'Collaborations', href: '#collaborations' },
    { label: 'Donate', href: '#donations' },
    { label: 'Book Appointment', href: '#book' },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
          <img src="/Assets/MAF_logo.jpg" alt="Maheshwari Action Forum Logo" className="h-10 w-10" />
            <span className="ml-2 text-xl font-bold text-gray-800">Maheshwari Action Forum</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-gray-600 hover:text-rose-600 transition-colors
                  ${item.label === 'Donate' ? 'bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 hover:text-white' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block px-3 py-2 text-gray-600 hover:text-rose-600 transition-colors
                    ${item.label === 'Donate' ? 'bg-rose-600 text-white rounded-lg hover:bg-rose-700 hover:text-white' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}