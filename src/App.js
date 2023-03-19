import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Render the Login component if the user is not logged in
  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  // Render the main app if the user is logged in
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
