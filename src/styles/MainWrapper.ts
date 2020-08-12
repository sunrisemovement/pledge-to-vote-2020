import styled from 'styled-components'

export default styled.div`
  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 1em;
  }
`
