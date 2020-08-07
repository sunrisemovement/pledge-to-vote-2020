import React from 'react'
import { css } from 'styled-components'

type Props = {
  imageLocation: string
}

const Footer: React.FC<Props> = (props) => {
  return (
    <div
      css={css`
        background-color: #33342e;
      `}
    >
      <img src={props.imageLocation} alt="Logo" />
    </div>
  )
}

export default Footer
