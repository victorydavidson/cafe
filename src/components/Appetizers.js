import React from 'react';
import './appetizers.css'; // Import the CSS file for styling

const Appetizers = () => {
  // Define the list of appetizers
  const appetizers = [
    {
      name: "Crispy Coconut Shrimp",
      description: "Succulent shrimp coated in crispy coconut flakes, served with tangy pineapple dipping sauce."
    },
    {
      name: "Truffle Parmesan Fries",
      description: "Crispy hand-cut fries tossed in aromatic truffle oil and sprinkled with savory Parmesan cheese, served with garlic aioli."
    },
    {
      name: "Caprese Skewers",
      description: "Fresh mozzarella balls, juicy cherry tomatoes, and fragrant basil leaves drizzled with balsamic glaze, served on skewers for a delightful bite."
    },
    {
      name: "Spinach and Artichoke Dip",
      description: "Creamy spinach and artichoke hearts blended with melted cheese, served bubbling hot with toasted crostini for dipping."
    },
    {
      name: "Stuffed Mushroom Caps",
      description: "Plump mushroom caps filled with a savory mixture of herbs, garlic, breadcrumbs, and melted cheese, baked to perfection."
    },
    {
      name: "Charcuterie Board",
      description: "A selection of fine cured meats, artisan cheeses, olives, nuts, and seasonal fruits, served with crusty bread and gourmet crackers."
    }
  ];

  return (
    <div className="appetizers-container">
      <h1>Mouthwatering Appetizers</h1>
      <p>Choose from our selection of appetizers:</p>
      <ul>
        {/* Map through the list of appetizers and render each one */}
        {appetizers.map((appetizer, index) => (
          <li key={index}>
            <h2>{appetizer.name}</h2>
            <p>{appetizer.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appetizers;
