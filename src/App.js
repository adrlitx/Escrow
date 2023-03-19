import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu'; // Import SideMenu component
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} />
      <SideMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className="content-container">
        {/* Your content goes here */}
        <div>LFG!</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
