import { createGlobalStyle } from 'styled-components'

type Props = {
  primaryColor: string
}

export default createGlobalStyle`
*, *:before, *:after {
  box-sizing: border-box;
  margin:0;
}
  html {
    @media only screen and (min-width: 1200px) {
      font-size: 18px;
    }
  }
  body {
    margin: 0;
  };
`
