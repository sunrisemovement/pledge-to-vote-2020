import React from 'react'

type Props = {
  title: string
}

const SiteTitle: React.FC<Props> = (props) => {
  return <h1>{props.title}</h1>
}

export default SiteTitle
