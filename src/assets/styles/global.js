import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    color: ${({ theme }) => theme.color.black};
    font-family: Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }
`
