import React from 'react'
import { graphql } from 'gatsby'
import { css } from 'styled-components'

type PageQuery = {
  file: {
    childMarkdownRemark: {
      html: string
      frontmatter: {
        example: string
      }
    }
  }
}

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "landing.md" }) {
      childMarkdownRemark {
        html
        frontmatter {
          example
        }
      }
    }
  }
`

type PageData = {
  body: string
  example: string
}

const transformQuery = (query: PageQuery): PageData => {
  return {
    body: query.file.childMarkdownRemark.html,
    example: query.file.childMarkdownRemark.frontmatter.example,
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
      <div>
        This text is from the <code>Example Frontmatter Field</code> in the CMS:{' '}
        <strong>{page.example}</strong>
      </div>
    </div>
  )
}

export default HomePage
