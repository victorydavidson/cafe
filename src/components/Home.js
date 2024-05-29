import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import "./home.css"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="buttons">
        <Link to="/menu">
          <button className="button">Dine With Us</button>
        </Link>
        <Link to="/about">
          <button className="button">About Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
