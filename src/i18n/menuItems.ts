interface MenuItem {
  name: string;
  description: string;
  ingredients: string[];
  price: string;
  image: string;
  category: string;
}

export const menuItems: Record<string, MenuItem[]> = {
  en: [
    {
      name: "Truffle Infused Risotto",
      description: "Creamy Arborio rice slowly cooked to perfection, finished with black truffle shavings and aged Parmesan.",
      ingredients: ["Arborio Rice", "Black Truffle", "Parmesan", "White Wine", "Mushrooms"],
      price: "$32",
      image: "https://savourontario.milk.org/SavourOntarioStaging/media/Images/Recipes/Mushroom%20Risotto%20with%20Black%20Truffle%20Cheese/Recipe-SO-Banner-1920x1080-Mushroom-Risotto-Black-Truffle-Cheese.jpg?ext=.jpg",
      category: "Main Course"
    },
    {
      name: "Pan-Seared Sea Bass",
      description: "Fresh Mediterranean sea bass with crispy skin, served on a bed of saffron-infused fennel purée.",
      ingredients: ["Sea Bass", "Fennel", "Saffron", "Butter", "Herbs"],
      price: "$38",
      image: "https://images.getrecipekit.com/20230928142853-lemon-20butter-20pan-20seared-20chilean-20sea-20bass-20-20sizzlefish-20x-20-40brightmomentco.jpg?class=16x9",
      category: "Seafood"
    },
    {
      name: "Wagyu Beef Tartare",
      description: "Hand-cut premium Wagyu beef seasoned with traditional accompaniments and house-made condiments.",
      ingredients: ["Wagyu Beef", "Capers", "Shallots", "Quail Egg", "Dijon"],
      price: "$29",
      image: "https://domainedrouhin.com/wp-content/uploads/2020/04/Steak-Tartare.jpg",
      category: "Appetizer"
    },
    {
      name: "Lobster Thermidor",
      description: "Classic French preparation of lobster meat in a rich brandy cream sauce, gratinated to golden perfection.",
      ingredients: ["Lobster", "Brandy", "Gruyère", "Mustard", "Cream"],
      price: "$45",
      image: "https://redcrabseafood.com/wp-content/uploads/2024/06/classic-lobster-thermidor-recipe-blog-featured-image-1200x900.jpg",
      category: "Signature"
    },
    {
      name: "Dark Chocolate Soufflé",
      description: "Individually baked chocolate soufflé served with vanilla bean ice cream and warm chocolate sauce.",
      ingredients: ["Dark Chocolate", "Eggs", "Butter", "Vanilla", "Sugar"],
      price: "$16",
      image: "https://static01.nyt.com/images/2017/01/13/dining/13SOUFLE-3/13SOUFLE-3-videoSixteenByNineJumbo1600.jpg",
      category: "Dessert"
    },
    {
      name: "Herb-Crusted Rack of Lamb",
      description: "New Zealand lamb rack with fresh herb crust, served with roasted vegetables and red wine reduction.",
      ingredients: ["Lamb", "Fresh Herbs", "Garlic", "Dijon", "Red Wine"],
      price: "$42",
      image: "https://lambrecipes.ca/wp-content/uploads/2022/01/Herb-Panko-Crusted-Rack-of-Lamb.jpg",
      category: "Main Course"
    }
  ],
  es: [
    {
      name: "Risotto con Trufa",
      description: "Arroz Arborio cremoso cocido lentamente a la perfección, terminado con láminas de trufa negra y parmesano añejo.",
      ingredients: ["Arroz Arborio", "Trufa Negra", "Parmesano", "Vino Blanco", "Champiñones"],
      price: "$32",
      image: "https://savourontario.milk.org/SavourOntarioStaging/media/Images/Recipes/Mushroom%20Risotto%20with%20Black%20Truffle%20Cheese/Recipe-SO-Banner-1920x1080-Mushroom-Risotto-Black-Truffle-Cheese.jpg?ext=.jpg",
      category: "Plato Principal"
    },
    {
      name: "Lubina a la Plancha",
      description: "Lubina fresca del Mediterráneo con piel crujiente, servida sobre puré de hinojo infusionado con azafrán.",
      ingredients: ["Lubina", "Hinojo", "Azafrán", "Mantequilla", "Hierbas"],
      price: "$38",
      image: "https://images.getrecipekit.com/20230928142853-lemon-20butter-20pan-20seared-20chilean-20sea-20bass-20-20sizzlefish-20x-20-40brightmomentco.jpg?class=16x9",
      category: "Pescados"
    },
    {
      name: "Tartar de Wagyu",
      description: "Carne Wagyu premium cortada a mano, sazonada con acompañamientos tradicionales y condimentos caseros.",
      ingredients: ["Carne Wagyu", "Alcaparras", "Chalotes", "Huevo de Codorniz", "Mostaza Dijon"],
      price: "$29",
      image: "https://domainedrouhin.com/wp-content/uploads/2020/04/Steak-Tartare.jpg",
      category: "Entrante"
    },
    {
      name: "Bogavante Thermidor",
      description: "Preparación clásica francesa de bogavante en una rica salsa de crema y brandy, gratinado hasta alcanzar una perfección dorada.",
      ingredients: ["Bogavante", "Brandy", "Gruyère", "Mostaza", "Crema"],
      price: "$45",
      image: "https://redcrabseafood.com/wp-content/uploads/2024/06/classic-lobster-thermidor-recipe-blog-featured-image-1200x900.jpg",
      category: "Especialidad"
    },
    {
      name: "Soufflé de Chocolate Negro",
      description: "Soufflé de chocolate horneado individualmente, servido con helado de vainilla y salsa de chocolate caliente.",
      ingredients: ["Chocolate Negro", "Huevos", "Mantequilla", "Vainilla", "Azúcar"],
      price: "$16",
      image: "https://static01.nyt.com/images/2017/01/13/dining/13SOUFLE-3/13SOUFLE-3-videoSixteenByNineJumbo1600.jpg",
      category: "Postre"
    },
    {
      name: "Rack de Cordero con Hierbas",
      description: "Rack de cordero de Nueva Zelanda con costra de hierbas frescas, servido con vegetales asados y reducción de vino tinto.",
      ingredients: ["Cordero", "Hierbas Frescas", "Ajo", "Mostaza Dijon", "Vino Tinto"],
      price: "$42",
      image: "https://lambrecipes.ca/wp-content/uploads/2022/01/Herb-Panko-Crusted-Rack-of-Lamb.jpg",
      category: "Plato Principal"
    }
  ]
};