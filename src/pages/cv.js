import React from 'react'
import Page from '../components/Page'
import { graphql } from 'gatsby'
import './cv.css'

export default ({ data }) => {
  const foto = data.allContentfulCv.edges[0].node.foto.file.url
  const texto =
    data.allContentfulCv.edges[0].node.texto.childMarkdownRemark.html
  return (
    <Page class="cv">
      <div className="hero">
        <img alt="" className="hero-img" src={foto} />
      </div>
      <div className="text">
        <div
          dangerouslySetInnerHTML={{
            __html: texto,
          }}
        />
      </div>
    </Page>
  )
}

export const cvQuery = graphql`
  query {
    allContentfulCv {
      edges {
        node {
          foto {
            file {
              url
            }
          }
          texto {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
