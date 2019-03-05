import React from 'react'
import Page from '../components/Page'
import { graphql } from 'gatsby'
import './cv.css'

export default ({ data }) => {
  let edge = data.allContentfulCv.edges[0]
  return (
    <Page class="cv">
      <div className="cv-content">
        <div className="cv-header">
          <div className="cv-data">
            <div className="cv-title">
              <h1>Eduardo Dargent Bocanegra</h1>
            </div>
            <div>
              <a className="cv-email" href="mailto:edargent@pucp.edu.pe">
                edargent@pucp.edu.pe
              </a>
              <div>998996519 - 4451887</div>
            </div>
          </div>
          <div>
            <img
              className="cv-image"
              src={edge.node.foto.file.url}
              alt="cover"
            />
          </div>
        </div>
        <div className="cv-text">
          <div
            dangerouslySetInnerHTML={{
              __html: edge.node.texto.childMarkdownRemark.html,
            }}
          />
        </div>
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
