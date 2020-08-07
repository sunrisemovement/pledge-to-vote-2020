import React from 'react'
import { css } from 'styled-components'

const ImageContainer: React.FC = (props) => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <div
        css={css`
          background: url('assets/nelson_pelosi-action_11.13.18.jpg'),
            rgba(51, 52, 46, 0.7);
          background-blend-mode: saturation;
          z-index: -1;
          width: 100%;
          height: 100%;
          position: absolute;
          background-position: center;
          filter: grayscale(100%);
        `}
      ></div>
      {props.children}
    </div>
  )
}

export default ImageContainer
