import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s, color 0.3s;
    max-width: 1200px;
    margin: 0 auto;
  }
  * {
    box-sizing: border-box;
  }
    // NAVBAR
    nav li > * {
      color: ${({ theme }) => theme.text};
      transition: background-color 0.3s, color 0.3s;
      }
      .logo > * {
        color: ${({ theme }) => theme.text};    
        transition: background-color 0.3s, color 0.3s;
    }

`;