import React from 'react'
import Page from '../components/Page'
import { graphql } from 'gatsby'
import '../css/cv.css'

export default props => {
  const html = props.data.markdownRemark.html
  const img = props.data.contentfulAsset.file.url
  return (
    <Page class="cv">
      <div className="hero">
        <img alt="" className="hero-img" src={img} />
      </div>
      <div className="text">
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>
    </Page>
  )
}

export const cvQuery = graphql`
  query {
    contentfulAsset {
      file {
        url
      }
    }
    markdownRemark {
      html
    }
  }
`
