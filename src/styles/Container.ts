import styled from 'styled-components'

export default styled.div`
  margin-right: auto; /* 1 */
  margin-left: auto; /* 1 */ /* 2 */

  @media only screen and (max-width: 750px) {
    padding-right: 1.5em; /* 3 */
    padding-left: 1.5em;
  }
  @media only screen and (min-width: 750px) {
    padding-right: 4em; /* 3 */
    padding-left: 4em;
  }
  p {
  }
`
