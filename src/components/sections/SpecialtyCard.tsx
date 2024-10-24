import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SpecialtyCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export default function SpecialtyCard({ title, description, image, slug }: SpecialtyCardProps) {
  return (
    <Link to={`/specialties/${slug}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center text-blue-800 font-semibold">
            Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
          </div>
        </div>
      </div>
    </Link>
  );
}