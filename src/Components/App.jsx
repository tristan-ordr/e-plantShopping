
import React, { useState } from 'react';
import ProductList from './shopping/ProductList.tsx';
import './App.css';
import LandingPage from "./welcome/LandingPage.jsx";

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
        <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
            <LandingPage handleGetStartedClick={handleGetStartedClick}/>
        </div>

      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onHomeClick={handleHomeClick}/>
      </div>
    </div>
  );
}

export default App;



