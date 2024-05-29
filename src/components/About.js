import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import "../components/SeeYouSoon"

const About = () => {
  return (
    <section className="about-section">
      <div className="images-container">
        <img src="https://media.istockphoto.com/id/104704117/photo/restaurant-plates.jpg?s=612x612&w=0&k=20&c=MhFdN_qVgzoHov-kgFx0qWSW0nZht4lZV1zinC3Ea44=" alt="image1" className="image-diagonal" />
        <img src="https://images.pexels.com/photos/6947255/pexels-photo-6947255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image2" className="image-diagonal" />
      </div>
      <div className="about-content">
        <h1>About Bistro</h1>
        <p>
          Welcome to Bistro, where every meal is a celebration of culinary artistry. Our team is
          dedicated to providing you with an unforgettable dining experience.Bistro was born from a love of all things food. Our founder chef Rob West spent three amazing years in the city of love, training under the industry's best. He brought home everything he learned—the flavors, the feelings, the family-style-cafe, so you can learn the stories from each dish too.
        </p>
        <Link to="/see-you-soon">
          <button className="book-now-button">Book Now</button>
        </Link>
      </div>
    </section>
  );
};

export default About;
