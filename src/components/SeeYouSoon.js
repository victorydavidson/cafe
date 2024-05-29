import React from 'react';
import './seeYouSoon.css';

const SeeYouSoon = () => {
  return (
    <div className="see-you-soon-container">
      <div className="image-container">
        <img src="https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=600" alt="placeholder" />
      </div>
      <div className="text-container">
        <h1 className="see-you-soon-heading">See You Soon!</h1>
        <div className="contact-info">
          <p><strong>Phone Number:</strong></p>
          <p>(123) 456-7890</p>
        </div>
        <div className="contact-info">
          <p><strong>Email Address:</strong></p>
          <p>contact@bistro.com</p>
        </div>
        <div className="contact-info">
          <p><strong>Restaurant Address:</strong></p>
          <p>123 Bistro Lane, Food City</p>
        </div>
      </div>
    </div>
  );
};

export default SeeYouSoon;
