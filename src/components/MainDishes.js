import React from 'react';
import './mainDishes.css'

const MainDishes = () => {
  // Define the list of main dishes
  const mainDishes = [
    {
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon fillet seasoned and grilled to perfection, served with roasted vegetables and lemon butter sauce."
    },
    {
      name: "Classic Beef Burger",
      description: "Juicy beef patty grilled to your liking, topped with melted cheddar cheese, crispy bacon, lettuce, tomato, and pickles, served with fries."
    },
    {
      name: "Pesto Chicken Pasta",
      description: "Tender chicken breast slices sautéed in creamy pesto sauce, tossed with al dente pasta and cherry tomatoes, garnished with Parmesan cheese."
    },
    {
      name: "Vegetable Stir-Fry",
      description: "A colorful medley of fresh vegetables stir-fried in a savory ginger-soy sauce, served with jasmine rice."
    },
    {
      name: "Ribeye Steak",
      description: "Premium ribeye steak grilled to perfection, served with loaded mashed potatoes and grilled asparagus spears."
    },
    {
      name: "Eggplant Parmesan",
      description: "Slices of eggplant breaded and baked with marinara sauce and melted mozzarella cheese, served with spaghetti marinara."
    }
  ];

  return (
    <div className="main-dishes-container">
      <h1>Delicious Main Dishes</h1>
      <p>Explore our selection of mouthwatering main courses:</p>
      <ul>
        {/* Map through the list of main dishes and render each one */}
        {mainDishes.map((dish, index) => (
          <li key={index}>
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default MainDishes;
