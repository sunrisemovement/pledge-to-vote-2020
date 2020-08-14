import React from 'react'

const Html: React.FC<{
  htmlAttributes: Record<string, string>
  headComponents: Array<React.ReactNode>
  bodyAttributes: Record<string, string>
  preBodyComponents: Array<React.ReactNode>
  body: string
  postBodyComponents: Array<React.ReactNode>
}> = (props) => {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script
          src="https://app.sunrisemovement.civicengine.com/embed.js"
          async
        ></script>
        <link
          rel="stylesheet"
          href="https://app.sunrisemovement.civicengine.com/embed.css"
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

export default Html
