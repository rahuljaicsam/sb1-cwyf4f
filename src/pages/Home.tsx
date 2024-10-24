import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import AppointmentCTA from '../components/sections/AppointmentCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <AppointmentCTA />
    </>
  );
}