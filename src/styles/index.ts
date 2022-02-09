import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --white: #FFFFFF;

    --gray-300: #a5a5a5;
    --gray-500: #373737;

    --black-900: #111111;

    --green-200: #62fcb1;
    --green-500: #00e676;
  }

  html, body, #root {
    height: 100%;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 16px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
