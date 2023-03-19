import React from 'react';
import './../App.css';
import Logo from './Logo'; // Import the Logo component

const Header = ({ toggleMenu }) => {

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      window.localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      window.localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Logo height="32px" /> 
        <h4>NOANE Escrow</h4>
      </div>
      <button className="menu-button" onClick={toggleMenu}>Menu</button>
      <div className="theme-toggle">
        <input
          type="checkbox"
          id="theme-toggle"
          onChange={toggleTheme}
        />
        <label htmlFor="theme-toggle" className="theme-toggle-slider"></label>
      </div>
    </header>
  );
}

export default Header;
