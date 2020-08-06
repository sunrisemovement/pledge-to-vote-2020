import React from 'react'

type Props = {
  quote: string
}

const FormQuote: React.FC<Props> = (props) => {
  return (
    <header>
      <h2>{props.quote}</h2>
    </header>
  )
}

export default FormQuote
