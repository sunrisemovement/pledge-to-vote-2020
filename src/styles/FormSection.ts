import styled from 'styled-components'
import { Colors } from '../pages/index'

type Props = {
  colors: Colors
}

export default styled.div`
  @media only screen and (max-width: 1200px) {
    padding-top: 0;
    max-width: 750px;
    margin: auto;
    /* background-color: ${(props: Props) => props.colors.backgroundColor}; */
  }
`
