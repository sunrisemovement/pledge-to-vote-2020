import React from 'react'

type Props = {
  imageLocation: string
}

const Footer: React.FC<Props> = (props) => {
  return (
    <div>
      <img src={props.imageLocation} alt="Logo" />
    </div>
  )
}

export default Footer
