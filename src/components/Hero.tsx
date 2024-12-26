import React from 'react';
import { UtensilsCrossed, ChefHat } from 'lucide-react';

interface HeroProps {
  translations: {
    title: string;
    subtitle: string;
    description: string;
  };
}

export default function Hero({ translations }: HeroProps) {
  return (
    <div className="relative bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000"
          alt="Restaurant interior"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            {translations.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-orange-400 mb-6">
            <UtensilsCrossed className="w-6 h-6" />
            <span className="text-xl font-light">{translations.subtitle}</span>
            <ChefHat className="w-6 h-6" />
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {translations.description}
          </p>
        </div>
      </div>
    </div>
  );
}