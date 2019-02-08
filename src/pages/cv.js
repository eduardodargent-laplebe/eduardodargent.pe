import React from 'react'
import Wrapper from '../components/Wrapper'
import { graphql } from 'gatsby'

class IndexPage extends React.Component {
  render() {
    const html = this.props.data.markdownRemark.html
    const img = this.props.data.contentfulAsset.file.url
    return (
      <Wrapper>
        <main className="main">
          <div className="hero">
            <img alt="" className="hero-img" src={img} />
          </div>

          <div className="main-bio-text">
            <div
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
          </div>
        </main>
      </Wrapper>
    )
  }
}

export const queryCV = graphql`
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

export default IndexPage
