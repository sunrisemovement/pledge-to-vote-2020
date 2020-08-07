import { createGlobalStyle } from 'styled-components'

type Props = {
  primaryColor: string
}

export default createGlobalStyle`
*, *:before, *:after {
  box-sizing: border-box;
  margin:0;
}
  body {
    margin: 0
  };
`
