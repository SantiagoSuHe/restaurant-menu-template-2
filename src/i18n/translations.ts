interface Translation {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  footer: {
    address: string;
    hours: string;
    reservations: string;
  };
  menu: {
    categories: {
      all: string;
    };
    ingredients: string;
  };
}

export const translations: Record<string, Translation> = {
  en: {
    hero: {
      title: "La Maison Gourmande",
      subtitle: "Fine French Cuisine",
      description: "Experience the epitome of French gastronomy with our carefully curated menu featuring the finest ingredients and traditional techniques."
    },
    footer: {
      address: "123 Culinary Avenue, Gastronomy District",
      hours: "Open Tuesday - Sunday | 6:00 PM - 11:00 PM",
      reservations: "For reservations, please call: (555) 123-4567"
    },
    menu: {
      categories: {
        all: "All"
      },
      ingredients: "Ingredients:"
    }
  },
  es: {
    hero: {
      title: "La Maison Gourmande",
      subtitle: "Alta Cocina Francesa",
      description: "Experimente lo mejor de la gastronomía francesa con nuestro menú cuidadosamente seleccionado que presenta los mejores ingredientes y técnicas tradicionales."
    },
    footer: {
      address: "Avenida Culinaria 123, Distrito Gastronómico",
      hours: "Abierto de Martes a Domingo | 18:00 - 23:00",
      reservations: "Para reservas, llame al: (555) 123-4567"
    },
    menu: {
      categories: {
        all: "Todos"
      },
      ingredients: "Ingredientes:"
    }
  }
};