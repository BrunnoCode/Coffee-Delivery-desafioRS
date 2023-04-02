import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0:
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${(props) => props.theme.colors["base-background"]};
    color: ${(props) => props.theme.colors["base-text"]};
    -webkit-font-soothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.regular}
    font-weight: 400;
    font-size: ${({ theme }) => theme.textSizes["text-regular-m"]}
  }
  
  button {
    cursor: pointer;
  }

      <h1>Hello World</h1>
  a { text-decoration: none}
`;
