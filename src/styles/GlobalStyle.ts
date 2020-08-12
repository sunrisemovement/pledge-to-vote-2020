import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle<{ background: string }>`
*, *:before, *:after {
  box-sizing: border-box;
  margin:0;
}
  html {
    @media only screen and (min-width: 1200px) {
      font-size: 18px;
    }
    background-color: ${(p) => p.background};
  }
  body {
    margin: 0;
  };
`
