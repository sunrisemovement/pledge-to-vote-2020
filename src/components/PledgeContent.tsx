import React from 'react'

type Props = {
  content: string
}

const PledgeContent: React.FC<Props> = (props) => {
  return <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
}

export default PledgeContent
