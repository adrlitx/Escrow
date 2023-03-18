import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './themes';
import './App.css';

function Footer() {
  return (
    <ThemeProvider theme={lightTheme}>
      <footer className="footer">
        <p>&copy; 2023 Lith Labs™/ LITH, LLC</p>
      </footer>
    </ThemeProvider>
  );
}

export default Footer;
