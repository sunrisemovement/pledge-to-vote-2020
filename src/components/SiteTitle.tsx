import React from 'react'
import { css } from 'styled-components'
import { Colors, SiteTitleType } from '../pages/index'

type Props = {
  title: SiteTitleType
  colors: Colors
}

const SiteTitle: React.FC<Props> = (props) => {
  return (
    <h1
      css={css`
        margin: 0;
        margin-bottom: 1.5em;
        text-align: center;
        padding-top: 2em;
        text-transform: uppercase;
      `}
    >
      <span
        css={css`
          color: ${props.colors.primaryColor};
        `}
      >
        {props.title.primaryColor}
      </span>
      <span
        css={css`
          color: ${props.colors.secondaryColor};
        `}
      >
        {props.title.secondaryColor}
      </span>
      <span
        css={css`
          color: ${props.colors.thirdColor};
        `}
      >
        {props.title.thirdColor}
      </span>
    </h1>
  )
}

export default SiteTitle
