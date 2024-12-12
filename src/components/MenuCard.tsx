import React from 'react';
import { ChefHat } from 'lucide-react';

interface MenuItemProps {
  name: string;
  description: string;
  ingredients: string[];
  price: string;
  image: string;
  category: string;
}

export default function MenuCard({ name, description, ingredients, price, image, category }: MenuItemProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-black/75 text-white px-3 py-1 rounded-full text-sm">
          {price}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <ChefHat className="w-5 h-5 text-orange-500" />
          <span className="text-sm font-medium text-orange-500">{category}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Ingredients:</h4>
          <div className="flex flex-wrap gap-2">
            {ingredients.map((ingredient, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}