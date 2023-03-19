import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Logo from './Logo';

function SideMenu({ menuOpen, setMenuOpen, toggleMenu }) {

  return (
    <>
        
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <Logo className="logo-style" />
        <ul>
          <li className="list-item" onClick={toggleMenu}><DashboardIcon /> Dashboard</li>
          <li className="list-item" onClick={toggleMenu}><AccountCircleIcon /> Profile</li>
          <li className="list-item" onClick={toggleMenu}><AccountBalanceIcon /> Escrow</li>
          <li className="list-item" onClick={toggleMenu}><LocalShippingIcon /> Shipping</li>
          <li className="list-item" onClick={toggleMenu}><HistoryIcon /> History</li>
          <li className="list-item" onClick={toggleMenu}><ChatBubbleIcon /> Messages</li>
          <li className="list-item" onClick={toggleMenu}><SettingsIcon /> Settings</li>
          <li className="list-item" onClick={toggleMenu}><HomeIcon /> Home</li>
          <li className="list-item" onClick={toggleMenu}><HelpIcon /> Help</li>
          <li className="list-item" onClick={toggleMenu}><LogoutIcon /> Logout</li>
        </ul>
      </div>
    </>
  );
}

export default SideMenu;
