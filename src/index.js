import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'; // Import HashRouter
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HashRouter> {/* Use HashRouter instead of BrowserRouter */}
    <App />
  </HashRouter>
</React.StrictMode>
);
