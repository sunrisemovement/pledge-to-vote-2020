import React from 'react'
import { css } from 'styled-components'
import { Colors } from '../pages/index'

type Props = {
  imageLocation: string
  colors: Colors
}

const Footer: React.FC<Props> = (props) => {
  return (
    <div
      css={css`
        background-color: ${props.colors.footerBackgroundColor};
        text-align: center;
        padding-top: 3em;
        padding-bottom: 5em;
      `}
    >
      <img
        src={props.imageLocation}
        alt="Logo"
        css={css`
          height: 8em;
        `}
      />
    </div>
  )
}

export default Footer
