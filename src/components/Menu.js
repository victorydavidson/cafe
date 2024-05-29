import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
  return (
    <section className="menu-section">
      <div className="menu-background">
        <div className="text-white">
          <h1>FLAVORS OF BISTRO</h1>
          <div className="image-container">
            <div className="image-item">
              <img src="https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=600" alt="appetizer" />
              <Link to="/appetizers">
                <p>Mouthwatering Appetizers</p>
              </Link>
            </div>

            <div className="image-item">
              <img src="https://images.pexels.com/photos/18795894/pexels-photo-18795894/free-photo-of-steam-above-dishes-on-the-table.jpeg?auto=compress&cs=tinysrgb&w=600" alt="main-dish" />
              <Link to="/main-dishes">
                <p>Wholesome Mains</p>
              </Link>
            </div>

            <div className="image-item">
              <img src="https://images.pexels.com/photos/6605961/pexels-photo-6605961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="desserts" />
              <Link to="/desserts">
                <p>Sweet Endings</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
