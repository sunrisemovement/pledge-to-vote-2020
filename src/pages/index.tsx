import React from 'react'
import { graphql } from 'gatsby'
import { css } from 'styled-components'

type PageQuery = {
  file: {
    childMarkdownRemark: {
      html: string
    }
  }
}

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "landing.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`

type PageData = {
  body: string
}

const transformQuery = (query: PageQuery): PageData => {
  return {
    body: query.file.childMarkdownRemark.html,
  }
}

const HomePage = ({ data }: { data: PageQuery }) => {
  const page = transformQuery(data)
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
      <div dangerouslySetInnerHTML={{ __html: page.body }} />
    </div>
  )
}

export default HomePage
