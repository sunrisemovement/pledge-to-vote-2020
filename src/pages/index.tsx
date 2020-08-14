import React from 'react'
import { graphql } from 'gatsby'
import { css } from 'styled-components'

import PledgeContent from '../components/PledgeContent'
import Quote from '../components/Quote'
import Form from '../components/Form'
import Footer from '../components/Footer'
import BodyBorder from '../components/BodyBorder'

import GlobalStyle from '../styles/GlobalStyle'
import ImageContainer from '../components/ImageContainer'
import Container from '../styles/Container'
import FormSection from '../styles/FormSection'
import MainWrapper from '../styles/MainWrapper'
import SEO from '../components/SEO'

export type Colors = {
  primaryColor: string
  secondaryColor: string
  thirdColor: string
  backgroundColor: string
  footerBackgroundColor: string
  bodyTextColor: string
}

type PageQuery = {
  file: {
    childMarkdownRemark: {
      html: string
      frontmatter: {
        siteTitle: string
        siteDescription: string
        siteImage: string
        siteUrl: string
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
          siteTitle
          siteUrl
          siteDescription
          siteImage
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
  siteTitle: string
  siteDescription: string
  siteImage: string
  siteUrl: string
  quoteContent: string
  footerLogo: string
  backgroundImage: string
  colors: Colors
}

const transformQuery = (query: PageQuery): PageData => {
  return {
    body: query.file.childMarkdownRemark.html,
    siteTitle: query.file.childMarkdownRemark.frontmatter.siteTitle,
    siteDescription: query.file.childMarkdownRemark.frontmatter.siteDescription,
    siteImage: query.file.childMarkdownRemark.frontmatter.siteImage,
    siteUrl: query.file.childMarkdownRemark.frontmatter.siteUrl,
    quoteContent: query.file.childMarkdownRemark.frontmatter.quoteContent,
    footerLogo: query.file.childMarkdownRemark.frontmatter.footerLogo,
    backgroundImage: query.file.childMarkdownRemark.frontmatter.backgroundImage,
    colors: query.file.childMarkdownRemark.frontmatter.colors,
  }
}

const HomePage: React.FC<{ data: PageQuery }> = ({ data }) => {
  const page = transformQuery(data)

  return (
    <div
      css={css`
        font-family: 'Source Sans Pro', sans-serif;
        color: ${page.colors.bodyTextColor};
      `}
    >
      <SEO
        title={page.siteTitle}
        description={page.siteDescription}
        image={`${page.siteUrl}/${page.siteImage}`}
      />
      <GlobalStyle background={page.colors.footerBackgroundColor} />
      <BodyBorder size="5px" colors={page.colors} />
      <ImageContainer imageURL={page.backgroundImage}>
        <Quote quote={page.quoteContent} colors={page.colors} />
        <MainWrapper>
          <div
            css={css`
              grid-area: right;
            `}
          >
            <FormSection colors={page.colors}>
              <Container>
                <Form />
              </Container>
            </FormSection>
          </div>
          <div
            css={css`
              grid-area: left;
            `}
          >
            <Container>
              <PledgeContent content={page.body} colors={page.colors} />
            </Container>
          </div>
        </MainWrapper>
      </ImageContainer>
      <div
        css={css`
          background-color: ${page.colors.backgroundColor};
        `}
      ></div>
      <Footer imageLocation={page.footerLogo} colors={page.colors} />
    </div>
  )
}

export default HomePage
