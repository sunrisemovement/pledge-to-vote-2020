import React from 'react'
import Container from '../styles/Container'
import { css } from 'styled-components'
import { Colors } from '../pages/index'
import leftQuote from '../../static/noEditAssets/left-quote.svg'
import rightQuote from '../../static/noEditAssets/right-quote.svg'

type Props = {
  quote: string
  colors: Colors
}

const FormQuote: React.FC<Props> = (props) => {
  return (
    <Container>
      <h2
        css={css`
          font-weight: bold;
          font-size: 1.5em;
          color: ${props.colors.primaryColor};
          position: relative;
          padding-top: 2em;
          padding-bottom: 2em;

          &:before {
            content: '';
            position: absolute;
            left: -1.2em;
            top: 1.8em;
            background-color: ${props.colors.secondaryColor};
            width: 1em;
            height: 1em;
            mask: url(${leftQuote});
            mask-size: contain;
            mask-repeat: no-repeat;
          }
          &:after {
            content: '';
            position: absolute;
            background-color: ${props.colors.secondaryColor};
            width: 0.7em;
            height: 0.7em;
            mask: url(${rightQuote});
            mask-size: contain;
            mask-repeat: no-repeat;
          }
        `}
      >
        {props.quote}
      </h2>
    </Container>
  )
}

export default FormQuote
