import React from 'react';
import Container from '../common/Container';

const benefits = [
  'Comprehensive, coordinated care',
  'Cutting-edge research and treatments',
  'Expert, whole-person care'
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Mayo Clinic?</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                For more than 100 years, millions of people from all walks of life have found answers at Mayo Clinic.
              </p>
              <ul className="space-y-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-800 rounded-full mr-2"></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80"
              alt="Medical facility"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}