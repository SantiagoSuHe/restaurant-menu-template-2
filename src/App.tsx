import React, { useState } from 'react';
import { UtensilsCrossed, ChefHat } from 'lucide-react';
import MenuCard from './components/MenuCard';
import { menuItems } from './data/menuItems';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(menuItems.map(item => item.category)));
  const filteredItems = selectedCategory
    ? menuItems.filter(item => item.category === selectedCategory)
    : menuItems;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
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
              La Maison Gourmande
            </h1>
            <div className="flex items-center justify-center gap-2 text-orange-400 mb-6">
              <UtensilsCrossed className="w-6 h-6" />
              <span className="text-xl font-light">Fine French Cuisine</span>
              <ChefHat className="w-6 h-6" />
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the epitome of French gastronomy with our carefully curated menu
              featuring the finest ingredients and traditional techniques.
            </p>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === null
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">La Maison Gourmande</h2>
            <p className="mb-2">123 Culinary Avenue, Gastronomy District</p>
            <p className="mb-4">Open Tuesday - Sunday | 6:00 PM - 11:00 PM</p>
            <p className="text-sm text-gray-400">
              For reservations, please call: (555) 123-4567
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;