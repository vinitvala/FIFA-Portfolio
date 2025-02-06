import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    primary: '#1a1a1a',
    secondary: '#2a2a2a',
    accent: '#00ff9d',
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
    text: '#ffffff',
    textSecondary: '#a0a0a0',
    menuBackground: 'rgba(26, 26, 26, 0.95)',
    menuHover: 'rgba(0, 255, 157, 0.1)'
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  }
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Rajdhani', sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }
`
