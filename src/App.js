import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import SeeYouSoon from './components/SeeYouSoon';
import Appetizers from './components/Appetizers';
import MainDishes from './components/MainDishes';
import Desserts from './components/Desserts';
import './App.css';

const App = () => {
  return (
    <Router>
      <BackgroundContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/see-you-soon" element={<SeeYouSoon />} />
          <Route path="/appetizers" element={<Appetizers />} />
          <Route path="/main-dishes" element={<MainDishes />} />
          <Route path="/desserts" element={<Desserts />} />
        </Routes>
      </BackgroundContainer>
    </Router>
  );
};

const BackgroundContainer = ({ children }) => {
  const location = useLocation();

  let backgroundClass = '';
  if (location.pathname === '/') {
    backgroundClass = 'home-background';
  } else if (location.pathname === '/menu') {
    backgroundClass = 'menu-background';
  } else if (location.pathname === '/about') {
    backgroundClass = 'about-background';
  } else if (location.pathname === '/see-you-soon') {
    backgroundClass = 'see-you-soon-background';
  } else if (location.pathname === '/appetizers') {
    backgroundClass = 'appetizers-background';
  } else if (location.pathname === '/main-dishes') {
    backgroundClass = 'main-dishes-background';
  } else if (location.pathname === '/desserts') {
    backgroundClass = 'desserts-background';
  }

  return (
    <div className={backgroundClass}>
      {children}
    </div>
  );
};

export default App;
