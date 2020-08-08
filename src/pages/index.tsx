import React from 'react'
import { graphql } from 'gatsby'
import { css } from 'styled-components'

import SiteTitle from '../components/SiteTitle'
import PledgeContent from '../components/PledgeContent'
import FormQuote from '../components/FormQuote'
import Form from '../components/Form'
import Footer from '../components/Footer'
import BodyBorder from '../components/BodyBorder'

import GlobalStyle from '../styles/GlobalStyle'
import ImageContainer from '../components/ImageContainer'
import Container from '../styles/Container'

export type Colors = {
  primaryColor: string
  secondaryColor: string
  thirdColor: string
  backgroundColor: string
  footerBackgroundColor: string
  bodyTextColor: string
}

export type SiteTitleType = {
  primaryColor: string
  secondaryColor: string
  thirdColor: string
}

type PageQuery = {
  file: {
    childMarkdownRemark: {
      html: string
      frontmatter: {
        siteTitle: SiteTitleType
        quoteContent: string
        footerLogo: string
        backgroundImage: string
        colors: Colors
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
          siteTitle {
            primaryColor
            secondaryColor
            thirdColor
          }
          quoteContent
          footerLogo
          backgroundImage
          colors {
            primaryColor
            secondaryColor
            thirdColor
            bodyTextColor
            backgroundColor
            footerBackgroundColor
          }
        }
      }
    }
  }
`

type PageData = {
  body: string
  siteTitle: SiteTitleType
  quoteContent: string
  footerLogo: string
  backgroundImage: string
  colors: Colors
}

const transformQuery = (query: PageQuery): PageData => {
  return {
    body: query.file.childMarkdownRemark.html,
    siteTitle: query.file.childMarkdownRemark.frontmatter.siteTitle,
    quoteContent: query.file.childMarkdownRemark.frontmatter.quoteContent,
    footerLogo: query.file.childMarkdownRemark.frontmatter.footerLogo,
    backgroundImage: query.file.childMarkdownRemark.frontmatter.backgroundImage,
    colors: query.file.childMarkdownRemark.frontmatter.colors,
  }
}

const HomePage: React.FC<{ data: PageQuery }> = ({ data }) => {
  const page = transformQuery(data)

  // eslint-disable-next-line no-console
  console.log(page)

  return (
    <div
      css={css`
        font-family: 'Source Sans Pro', sans-serif;
        color: ${page.colors.bodyTextColor};
      `}
    >
      <BodyBorder colors={page.colors} size="5px" />
      <GlobalStyle />
      <ImageContainer imageURL={page.backgroundImage}>
        <Container>
          <SiteTitle title={page.siteTitle} colors={page.colors} />
          <PledgeContent content={page.body} colors={page.colors} />
        </Container>
      </ImageContainer>
      <div
        css={css`
          background-color: ${page.colors.backgroundColor};
        `}
      >
        <Container>
          <FormQuote quote={page.quoteContent} colors={page.colors} />
          <Form />
        </Container>
      </div>
      <Footer imageLocation={page.footerLogo} colors={page.colors} />
    </div>
  )
}

export default HomePage
