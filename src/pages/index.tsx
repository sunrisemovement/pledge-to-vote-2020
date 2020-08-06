import React from 'react'
import { graphql } from 'gatsby'
import { css, createGlobalStyle } from 'styled-components'

import SiteTitle from '../components/SiteTitle'
import PledgeContent from '../components/PledgeContent'
import FormQuote from '../components/FormQuote'
import Form from '../components/Form'
import Footer from '../components/Footer'

import GlobalStyle from '../styles/GlobalStyle'
import ImageContainer from '../styles/ImageContainer'

type PageQuery = {
  file: {
    childMarkdownRemark: {
      html: string
      frontmatter: {
        siteTitle: string
        quoteContent: string
        footerLogo: string
        backgroundImage: string
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
          backgroundImage
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
  backgroundImage: string
}

const transformQuery = (query: PageQuery): PageData => {
  return {
    body: query.file.childMarkdownRemark.html,
    siteTitle: query.file.childMarkdownRemark.frontmatter.siteTitle,
    quoteContent: query.file.childMarkdownRemark.frontmatter.quoteContent,
    footerLogo: query.file.childMarkdownRemark.frontmatter.footerLogo,
    backgroundImage: query.file.childMarkdownRemark.frontmatter.backgroundImage,
  }
}

const HomePage = ({ data }: { data: PageQuery }) => {
  const page = transformQuery(data)

  return (
    <div
      css={css`
        font-family: 'Source Sans Pro', sans-serif;
      `}
    >
      <GlobalStyle />
      <ImageContainer imageURL={page.backgroundImage}>
        <SiteTitle title={page.siteTitle} />
        <PledgeContent content={page.body} />

        <div>
          <FormQuote quote={page.quoteContent} />
          <Form />
        </div>
      </ImageContainer>
      <Footer imageLocation={page.footerLogo} />
    </div>
  )
}

export default HomePage
