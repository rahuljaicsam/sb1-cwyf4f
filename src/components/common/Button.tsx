import React from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-md font-semibold transition";
  const variants = {
    primary: "bg-white text-blue-900 hover:bg-gray-100",
    secondary: "border-2 border-white text-white hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}