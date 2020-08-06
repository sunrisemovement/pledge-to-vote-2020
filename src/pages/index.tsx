import React from 'react'
import { graphql } from 'gatsby'
import { css } from 'styled-components'

type PageQuery = {
  file: {
    childMarkdownRemark: {
      html: string
      frontmatter: {
        siteTitle: string
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
          siteTitle
        }
      }
    }
  }
`

type PageData = {
  body: string
  siteTitle: string
}

const transformQuery = (query: PageQuery): PageData => {
  return {
    body: query.file.childMarkdownRemark.html,
    siteTitle: query.file.childMarkdownRemark.frontmatter.siteTitle,
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
        Site title: <strong>{page.siteTitle}</strong>
      </div>
    </div>
  )
}

export default HomePage
