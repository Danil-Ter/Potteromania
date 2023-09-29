import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './pages/home/Home';
import Person from './pages/all/Person';
import Magic from './pages/magic/Magic';

import './App.css';

function App() {
  const [isBackgroundImage1, setBackground1] = useState(true);
  const [isAnimating, setAnimating] = useState(false);

  const toggleBackground = () => {
    if (!isAnimating) {
      setAnimating(true);

      const rootElement = document.getElementById('root');
      rootElement.style.transition = 'opacity 0.5s ease';
      rootElement.style.opacity = 0;

      setTimeout(() => {
        setBackground1(!isBackgroundImage1);
        rootElement.style.transition = 'opacity 0.5s ease';
        rootElement.style.opacity = 1;
        setAnimating(false);
      }, 600);
    }
  };

  return (
    <div id="root" className={isBackgroundImage1 ? 'background-1' : 'background-2'}>
      <Router>
        <Header toggleBackground={toggleBackground} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:house" element={<Home />} />
          <Route path="/all" element={<Person />} />
          <Route path="/magic" element={<Magic />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
