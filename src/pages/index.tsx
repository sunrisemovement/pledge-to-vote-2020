import React from 'react'
import { graphql } from 'gatsby'
import { css } from 'styled-components'

type PageQuery = {
  file: {
    childContentJson: {
      example: string
    }
  }
}

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "config.json" }) {
      childContentJson {
        example
      }
    }
  }
`

type PageData = {
  example: string
}

const transformQuery = (query: PageQuery): PageData => {
  return {
    example: query.file.childContentJson.example,
  }
}

const HomePage = ({ data }: { data: PageQuery }) => {
  const config = transformQuery(data)
  return (
    <div>
      <h1>Home Page</h1>
      <div
        css={css`
          color: blue;
        `}
      >
        This is how you style things
      </div>
      <div>
        This string is from the CMS: <strong>{config.example}</strong>
      </div>
      <div>
        You can edit it at{' '}
        <a href="/admin/#/collections/config/entries/config">
          /admin/#/collections/config/entries/config
        </a>
      </div>
    </div>
  )
}

export default HomePage
