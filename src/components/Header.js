import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';

const StyledHeader = styled.header`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.onBackground};
`;

function Header({ toggleTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <StyledHeader>
      <h1>Dashboard</h1>
      <div className="theme-toggle">
        <input
          type="checkbox"
          id="theme-toggle-input"
          onChange={toggleTheme}
          checked={theme === 'light'}
        />
        <label htmlFor="theme-toggle-input" className="theme-toggle-slider"></label>
      </div>
    </StyledHeader>
  );
}

function ThemedHeader({ toggleTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Header toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default ThemedHeader;
