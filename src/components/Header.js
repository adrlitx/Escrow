import React from 'react';
import './../App.css';
import Logo from './Logo'; // Import the Logo component
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Logo height="32px" /> 
          <h4 style={{ marginLeft: '10px' }}>NOANE Escrow</h4>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="theme-toggle">
          <DarkModeOutlinedIcon style={{ color: '#2ac9b0', marginRight: '5px' }} />
          <input
            type="checkbox"
            id="theme-toggle"
            onChange={toggleTheme}
          />
          <label htmlFor="theme-toggle" className="theme-toggle-slider"></label>
        </div>
        <button className="menu-button" onClick={toggleMenu}><TuneOutlinedIcon/></button>
      </div>
    </header>
  );
};

export default Header;
