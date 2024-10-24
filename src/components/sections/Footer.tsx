import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Container from '../common/Container';

const footerLinks = {
  quickLinks: ['About Us', 'Careers', 'Research', 'Education'],
  patientCare: ['Find a Doctor', 'Medical Departments', 'International Services', 'Clinical Trials']
};

const socialIcons = [
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Twitter, label: 'Twitter' },
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Linkedin, label: 'LinkedIn' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mayo Clinic</h3>
            <p className="text-gray-400">Providing hope and healing through integrated clinical practice, education, and research.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Patient Care</h4>
            <ul className="space-y-2">
              {footerLinks.patientCare.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, label }) => (
                <Icon 
                  key={label}
                  className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer"
                  aria-label={label}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mayo Clinic. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}