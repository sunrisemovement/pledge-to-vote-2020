import React from 'react'
import { css } from 'styled-components'

const Form: React.FC = () => {
  return (
    <div
      css={css`
        padding-bottom: 2em;
      `}
    >
      <div
        ref={() => {
          // BallotReady runs on the window load event, but it seems like they designed it that way
          // with fully static or server-rendered pages in mind. We can use React's callback refs to
          // trigger another load event and trick BallotReady into running when this div is actually
          // in the DOM.
          window.dispatchEvent(new Event('load'))
        }}
        className="civicengine-address"
        data-input-email="required"
        data-input-first-name="required"
        data-input-last-name="required"
        data-input-phone="required"
        data-input-notifications-opt-in="required"
      />
    </div>
  )
}

export default Form
