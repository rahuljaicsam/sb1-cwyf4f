import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';

export default function Hero() {
  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80"
          alt="Medical professionals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
      </div>
      
      <Container className="h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">Providing World-Class Healthcare</h1>
          <p className="text-xl mb-8">Experience exceptional care with our team of renowned medical experts. Your health is our priority.</p>
          <div className="flex space-x-4">
            <Button>Find a Doctor</Button>
            <Button variant="secondary">Request Appointment</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}