import React from 'react';
import Container from '../components/common/Container';
import SpecialtyCard from '../components/sections/SpecialtyCard';

const specialties = [
  {
    title: 'Cardiology',
    slug: 'cardiology',
    description: 'World-class heart and vascular care with innovative treatments.',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80'
  },
  {
    title: 'Neurology',
    slug: 'neurology',
    description: 'Advanced care for complex brain, spine and nervous system conditions.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80'
  },
  {
    title: 'Oncology',
    slug: 'oncology',
    description: 'Comprehensive cancer care and innovative treatment options.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80'
  },
  {
    title: 'Orthopedics',
    slug: 'orthopedics',
    description: 'Expert care for bone, joint and muscle health.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80'
  }
];

export default function Specialties() {
  return (
    <div className="py-16 bg-gray-50">
      <Container>
        <h1 className="text-4xl font-bold text-center mb-4">Medical Specialties</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our comprehensive range of medical specialties, each staffed by expert physicians
          dedicated to providing exceptional care.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty) => (
            <SpecialtyCard key={specialty.slug} {...specialty} />
          ))}
        </div>
      </Container>
    </div>
  );
}