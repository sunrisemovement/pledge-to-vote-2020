import styled from 'styled-components'

type Props = {
  imageURL: string
}

export default styled.div`
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;

    display: block;
    background: url('${(props: Props) =>
      props.imageURL}'), rgba(51, 52, 46, 0.7);
    background-position: center;
    filter: grayscale(100%);
    background-blend-mode: saturation;
    
    background-size:cover;
    width: 100%;
    height: 100%;
  }
  & {
    font-family: 'Source Sans Pro', sans-serif;
  
    margin-right: auto;
    margin-left: auto;
    margin-top: 0
  
    padding-right: 10px;
    padding-left: 10px;
  }
  `
