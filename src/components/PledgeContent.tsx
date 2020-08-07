import React from 'react'
import { css } from 'styled-components'
import { Colors } from '../pages/index'

type Props = {
  content: string
  colors: Colors
}

const PledgeContent: React.FC<Props> = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.content }}
      css={css`
        p {
          padding-bottom: 1em;
        }
        p:first-child {
          padding-top: 2em;
        }
        em {
          color: ${props.colors.primaryColor};
          font-style: normal;
        }
      `}
    ></div>
  )
}

export default PledgeContent
