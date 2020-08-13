import React from 'react'
import { css } from 'styled-components'

type Props = {
  imageURL: string
}

const ImageContainer: React.FC<Props> = (props) => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <div
        css={css`
          background: url(${props.imageURL}), rgba(51, 52, 46, 0.85);
          background-blend-mode: saturation;
          background-repeat: no-repeat;
          z-index: -1;
          width: 100%;
          height: 100%;
          position: absolute;
          background-position: center top;
          background-size: cover;
          filter: grayscale(100%);
        `}
      ></div>
      {props.children}
    </div>
  )
}

export default ImageContainer
