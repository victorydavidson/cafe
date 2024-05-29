import React from 'react';
import './desserts.css'; // Import the CSS file for styling

const Desserts = () => {
  // Define the list of desserts
  const desserts = [
    {
      name: "Classic Cheesecake",
      description: "Smooth and creamy cheesecake on a graham cracker crust, topped with your choice of fruit compote or chocolate ganache."
    },
    {
      name: "Molten Chocolate Lava Cake",
      description: "Decadent chocolate cake with a gooey molten chocolate center, served warm with a scoop of vanilla ice cream."
    },
    {
      name: "Tiramisu",
      description: "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder for an indulgent Italian treat."
    },
    {
      name: "Fruit Tart",
      description: "Butter pastry crust filled with vanilla custard and topped with fresh seasonal fruits, glazed with apricot jam."
    },
    {
      name: "Key Lime Pie",
      description: "Tangy key lime custard in a graham cracker crust, topped with whipped cream and lime zest."
    },
    {
      name: "Crème Brûlée",
      description: "Rich custard base topped with a layer of caramelized sugar, creating a satisfying contrast of creamy and crunchy textures."
    }
  ];

  return (
    <div className="desserts-container">
      <h1>Delectable Desserts</h1>
      <p>Indulge in our tempting selection of desserts:</p>
      <ul>
        {/* Map through the list of desserts and render each one */}
        {desserts.map((dessert, index) => (
          <li key={index}>
            <h2>{dessert.name}</h2>
            <p>{dessert.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Desserts;
