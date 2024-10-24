import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import { UserMd, Award, BookOpen, Flask } from 'lucide-react';

const specialtyDetails = {
  cardiology: {
    title: 'Cardiology',
    description: 'Our cardiology department provides comprehensive care for all types of cardiovascular conditions.',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80',
    treatments: [
      'Coronary Artery Disease',
      'Heart Rhythm Disorders',
      'Heart Failure',
      'Structural Heart Disease'
    ],
    technologies: [
      'Advanced Cardiac Imaging',
      'Minimally Invasive Surgery',
      'Cardiac Rehabilitation',
      'Preventive Cardiology'
    ]
  },
  neurology: {
    title: 'Neurology',
    description: 'Expert care for disorders of the brain, spine, and nervous system.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80',
    treatments: [
      'Stroke Treatment',
      'Epilepsy Management',
      'Multiple Sclerosis',
      'Movement Disorders'
    ],
    technologies: [
      'Neurological Imaging',
      'Neuromodulation',
      'Brain Mapping',
      'Spine Surgery'
    ]
  },
  oncology: {
    title: 'Oncology',
    description: 'Comprehensive cancer care with personalized treatment plans.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80',
    treatments: [
      'Cancer Diagnosis',
      'Chemotherapy',
      'Radiation Therapy',
      'Immunotherapy'
    ],
    technologies: [
      'Advanced Imaging',
      'Precision Medicine',
      'Clinical Trials',
      'Targeted Therapy'
    ]
  },
  orthopedics: {
    title: 'Orthopedics',
    description: 'Expert care for bone, joint, and muscle conditions.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80',
    treatments: [
      'Joint Replacement',
      'Sports Medicine',
      'Spine Surgery',
      'Trauma Care'
    ],
    technologies: [
      'Robotic Surgery',
      'Computer-Assisted Navigation',
      'Physical Therapy',
      'Regenerative Medicine'
    ]
  }
};

export default function SpecialtyDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const specialty = specialtyDetails[slug as keyof typeof specialtyDetails];

  if (!specialty) {
    navigate('/specialties');
    return null;
  }

  return (
    <div className="bg-white">
      <div className="relative h-[400px]">
        <img
          src={specialty.image}
          alt={specialty.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
        <Container className="relative h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">{specialty.title}</h1>
            <p className="text-xl max-w-2xl">{specialty.description}</p>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Conditions & Treatments</h2>
            <ul className="space-y-4">
              {specialty.treatments.map((treatment) => (
                <li key={treatment} className="flex items-center text-gray-700">
                  <UserMd className="w-5 h-5 text-blue-800 mr-3" />
                  {treatment}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Advanced Technologies</h2>
            <ul className="space-y-4">
              {specialty.technologies.map((tech) => (
                <li key={tech} className="flex items-center text-gray-700">
                  <Flask className="w-5 h-5 text-blue-800 mr-3" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose Mayo Clinic?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of experts provides personalized care using the latest
              medical advances and research.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-800 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">World-renowned specialists dedicated to your care</p>
            </div>
            <div className="text-center">
              <Flask className="w-12 h-12 text-blue-800 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Latest Research</h3>
              <p className="text-gray-600">Access to cutting-edge treatments and clinical trials</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-blue-800 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Patient Education</h3>
              <p className="text-gray-600">Comprehensive resources and support for patients</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <div className="flex justify-center space-x-4">
            <Button>Schedule Appointment</Button>
            <Button variant="secondary">Contact Us</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}