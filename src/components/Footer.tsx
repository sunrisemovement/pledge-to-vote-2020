import React from 'react'
import { css } from 'styled-components'
import { Colors } from '../pages/index'

type Props = {
  imageLocation: string
  colors: Colors
  privacyPolicy: string
}

const Footer: React.FC<Props> = (props) => {
  return (
    <div
      css={css`
        background-color: ${props.colors.footerBackgroundColor};
        padding-top: 3em;
        padding-bottom: 5em;
        text-align: center;
      `}
    >
      <img
        src={props.imageLocation}
        alt="Logo"
        css={css`
          height: 8em;
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 50%;
          padding-bottom: 1em;
        `}
      />
      <a
        css={css`
          color: white;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 0.8em;
          &:hover {
            color: ${props.colors.primaryColor};
            text-decoration: underline;
          }
        `}
        href={props.privacyPolicy}
      >
        Privacy Policy
      </a>
    </div>
  )
}

export default Footer
