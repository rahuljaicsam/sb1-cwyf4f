import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';

export default function AppointmentCTA() {
  return (
    <section className="bg-blue-900 text-white py-12">
      <Container className="text-center">
        <h2 className="text-3xl font-bold mb-6">Need to Make an Appointment?</h2>
        <p className="text-xl mb-8">We're here to help you get the care you need.</p>
        <Button>Schedule Now</Button>
      </Container>
    </section>
  );
}