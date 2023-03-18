import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './components/themes';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <div className="App">
        <Header toggleTheme={toggleTheme} />
        <div>LFG!</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
