import React from 'react'
import { css } from 'styled-components'
import { Colors } from '../pages/index'

type Props = {
  title: string
  colors: Colors
}

const SiteTitle: React.FC<Props> = (props) => {
  return (
    <h1
      css={css`
        margin: 0;
        color: ${props.colors.primaryColor};
        text-align: center;
        padding-top: 1em;
        text-transform: uppercase;
      `}
    >
      {props.title}
    </h1>
  )
}

export default SiteTitle
