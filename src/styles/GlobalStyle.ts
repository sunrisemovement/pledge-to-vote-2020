import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle<{ background: string }>`
*, *:before, *:after {
  box-sizing: border-box;
  margin:0;
}
  html {
    font-size: 21px;
    background-color: ${(p) => p.background};
  }
  body {
    margin: 0;
  };
`
