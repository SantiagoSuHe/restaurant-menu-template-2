import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Hero from '../components/Hero';
import MenuCard from '../components/MenuCard';
import Footer from '../components/Footer';
import { translations } from '../i18n/translations';
import { menuItems } from '../i18n/menuItems';

export default function RestaurantPage() {
  const { lang = 'en' } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const currentTranslation = translations[lang as keyof typeof translations] || translations.en;
  const currentMenu = menuItems[lang as keyof typeof menuItems] || menuItems.en;

  const categories = Array.from(new Set(currentMenu.map(item => item.category)));
  const filteredItems = selectedCategory
    ? currentMenu.filter(item => item.category === selectedCategory)
    : currentMenu;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Link
          to="/en"
          className={`px-3 py-1 rounded-full ${
            lang === 'en' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          EN
        </Link>
        <Link
          to="/es"
          className={`px-3 py-1 rounded-full ${
            lang === 'es' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          ES
        </Link>
      </div>

      <Hero translations={currentTranslation.hero} />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === null
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {currentTranslation.menu.categories.all}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <MenuCard
              key={index}
              {...item}
              ingredientsLabel={currentTranslation.menu.ingredients}
            />
          ))}
        </div>
      </div>

      <Footer translations={currentTranslation.footer} />
    </div>
  );
}