import React from 'react';
import { Heart, Brain, Stethoscope, Baby } from 'lucide-react';
import Container from '../common/Container';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'World-renowned heart care with innovative treatments and procedures.'
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Advanced neurological care for complex brain and spine conditions.'
  },
  {
    icon: Stethoscope,
    title: 'Primary Care',
    description: "Comprehensive healthcare for you and your family's everyday needs."
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    description: 'Specialized care for children from newborns to young adults.'
  }
];

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <Icon className="w-12 h-12 text-blue-800 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <div className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Medical Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </Container>
    </div>
  );
}