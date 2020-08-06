import React from 'react'
import { graphql } from 'gatsby'
import { css, injectGlobal } from 'styled-components'

import SiteTitle from '../components/SiteTitle'
import PledgeContent from '../components/PledgeContent'
import FormQuote from '../components/FormQuote'
import Form from '../components/Form'
import Footer from '../components/Footer'

type PageQuery = {
  file: {
    childMarkdownRemark: {
      html: string
      frontmatter: {
        siteTitle: string
        quoteContent: string
        footerLogo: string
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
          quoteContent
          footerLogo
        }
      }
    }
  }
`

type PageData = {
  body: string
  siteTitle: string
  quoteContent: string
  footerLogo: string
}

const transformQuery = (query: PageQuery): PageData => {
  return {
    body: query.file.childMarkdownRemark.html,
    siteTitle: query.file.childMarkdownRemark.frontmatter.siteTitle,
    quoteContent: query.file.childMarkdownRemark.frontmatter.quoteContent,
    footerLogo: query.file.childMarkdownRemark.frontmatter.footerLogo,
  }
}

const HomePage = ({ data }: { data: PageQuery }) => {
  const page = transformQuery(data)

  return (
    <div
      css={css`
        font-family: 'Source Sans Pro';
      `}
    >
      <div>
        <SiteTitle title={page.siteTitle} />
        <PledgeContent content={page.body} />

        <div>
          <FormQuote quote={page.quoteContent} />
          <Form />
        </div>
      </div>
      <Footer imageLocation={page.footerLogo} />

      <div
        css={css`
          color: blue;
        `}
      >
        This is how you style things
      </div>
    </div>
  )
}

export default HomePage
