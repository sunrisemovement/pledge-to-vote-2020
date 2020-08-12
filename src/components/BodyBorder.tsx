import React from 'react'
import { Colors } from '../pages/index'
import { css } from 'styled-components'

type Props = {
  colors: Colors
  size: string
}

const BodyBorder: React.FC<Props> = (props) => {
  return (
    <div
      css={css`
        .top,
        .bottom,
        .left,
        .right {
          background: ${props.colors.primaryColor};
          position: fixed;
          z-index: 10;
        }
        .left,
        .right {
          top: 0;
          bottom: 0;
          width: ${props.size};
        }
        .left {
          left: 0;
        }
        .right {
          right: 0;
        }

        .top,
        .bottom {
          left: 0;
          right: 0;
          height: ${props.size};
        }
        .top {
          top: 0;
        }
        .bottom {
          bottom: 0;
        }
      `}
    >
      <div className="left"></div>
      <div className="right"></div>
      <div className="top"></div>
      <div className="bottom"></div>
    </div>
  )
}

export default BodyBorder
