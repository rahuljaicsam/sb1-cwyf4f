import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = '' }: NavLinkProps) {
  const isExternal = href.startsWith('http') || href.startsWith('#');
  
  if (isExternal) {
    return (
      <a 
        href={href} 
        className={`text-gray-700 hover:text-blue-800 ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link 
      to={href} 
      className={`text-gray-700 hover:text-blue-800 ${className}`}
    >
      {children}
    </Link>
  );
}