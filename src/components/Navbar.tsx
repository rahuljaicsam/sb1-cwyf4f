import { Menu, Search, User, Phone } from 'lucide-react';
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-blue-800 font-bold text-2xl">Mayo Clinic</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-800">Request Appointment</a>
            <a href="#" className="text-gray-700 hover:text-blue-800">Find a Doctor</a>
            <a href="#" className="text-gray-700 hover:text-blue-800">Conditions & Treatments</a>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
              <User className="w-5 h-5 text-gray-600 cursor-pointer" />
              <Phone className="w-5 h-5 text-gray-600 cursor-pointer" />
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Request Appointment</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Find a Doctor</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Conditions & Treatments</a>
          </div>
        </div>
      )}
    </nav>
  );
}