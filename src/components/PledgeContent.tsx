import React from 'react'
import { css } from 'styled-components'
import { Colors } from '../pages/index'

type Props = {
  content: string
  colors: Colors
}

const PledgeContent: React.FC<Props> = (props) => {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: props.content }}
        css={css`
          padding-bottom: 2em;
          p {
            padding-bottom: 1.5em;
          }
          em {
            color: ${props.colors.primaryColor};
            font-style: normal;
            font-weight: bold;
          }
        `}
      ></div>
    </div>
  )
}

export default PledgeContent
