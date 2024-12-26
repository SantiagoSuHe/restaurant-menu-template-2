import React from 'react';

interface FooterProps {
  translations: {
    address: string;
    hours: string;
    reservations: string;
  };
}

export default function Footer({ translations }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">La Maison Gourmande</h2>
          <p className="mb-2">{translations.address}</p>
          <p className="mb-4">{translations.hours}</p>
          <p className="text-sm text-gray-400">{translations.reservations}</p>
        </div>
      </div>
    </footer>
  );
}