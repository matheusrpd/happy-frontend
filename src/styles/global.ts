import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  body {
    color: #fff;
    background: #ebf2f5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 600 18px Nunito, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;