import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  @media (max-width: 1080px) {
    html,
    #root {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html,
    #root {
      font-size: 87.5%;
    }
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
