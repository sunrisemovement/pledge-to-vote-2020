import React from 'react'
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
    <div
      css={css`
        @media only screen and (max-width: 1200px) {
          padding-left: 3em;
          padding-right: 1.5em;
          font-size: 1.5em;
          padding-top: 1em;
          padding-bottom: 1em;
        }

        display: flex;
        justify-content: center;
        font-size: 1.2em;
        padding-top: 5em;
        padding-bottom: 1.5em;
      `}
    >
      <h2
        css={css`
          font-weight: bold;
          @media only screen and (max-width: 800px) {
            font-size: 1.5em;
          }
          @media only screen and (min-width: 800px) {
            font-size: 2em;
          }
          color: ${props.colors.primaryColor};
          position: relative;
          @media only screen and (max-width: 1200px) {
            padding-top: 2em;
          }
          padding-bottom: 2em;

          &:before {
            content: '';
            position: absolute;
            left: -1.2em;
            @media only screen and (max-width: 1200px) {
              top: 1.8em;
            }
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
    </div>
  )
}

export default FormQuote
