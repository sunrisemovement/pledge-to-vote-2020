import styled, { css } from 'styled-components'

type Props = {
  imageURL: string
}

export default styled.div`
  font-family: 'Source Sans Pro', sans-serif;

  margin-right: auto;
  margin-left: auto;
  margin-top: 0

  // max-width: 960px;

  padding-right: 10px;
  padding-left: 10px;
  background: url('${(props: Props) => props.imageURL}'), rgba(51, 52, 46, 0.7);
  background-position: center;
  filter: grayscale(100%);
  background-blend-mode: multiply;
`
