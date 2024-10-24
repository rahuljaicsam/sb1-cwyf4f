import React, { useState } from 'react';
import { Menu, Search, User, Phone } from 'lucide-react';
import Container from '../common/Container';
import NavLink from './NavLink';
import { Link } from 'react-router-dom';

const navLinks = [
  { href: '/specialties', label: 'Medical Specialties' },
  { href: '#', label: 'Find a Doctor' },
  { href: '#', label: 'Request Appointment' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <Container>
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-blue-800 font-bold text-2xl">Mayo Clinic</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
              <User className="w-5 h-5 text-gray-600 cursor-pointer" />
              <Phone className="w-5 h-5 text-gray-600 cursor-pointer" />
            </div>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.label} 
                  href={link.href}
                  className="block px-3 py-2 hover:bg-gray-50"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}