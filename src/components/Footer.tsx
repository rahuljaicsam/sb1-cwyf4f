import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mayo Clinic</h3>
            <p className="text-gray-400">Providing hope and healing through integrated clinical practice, education, and research.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Research</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Education</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Patient Care</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Find a Doctor</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Medical Departments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">International Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Clinical Trials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mayo Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}