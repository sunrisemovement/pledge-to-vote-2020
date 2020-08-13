import React from 'react'
import { css } from 'styled-components'

const Form: React.FC = () => {
  const container = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    if (!container.current) return

    const script = document.createElement('script')
    script.src = 'https://app.sunrisemovement.civicengine.com/embed.js'
    script.addEventListener(
      'load',
      () => window.dispatchEvent(new Event('load')),
      { once: true },
    )
    container.current.appendChild(script)

    const style = document.createElement('link')
    style.rel = 'stylesheet'
    style.href = 'https://app.sunrisemovement.civicengine.com/embed.css'
    container.current.appendChild(style)
  }, [])

  return (
    <div
      ref={container}
      css={css`
        padding-bottom: 2em;
      `}
    >
      <div
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
