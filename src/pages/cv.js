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
            <div className="cv-email">
              <i className="material-icons">email</i>
              <a href="mailto:edargent@pucp.edu.pe">edargent@pucp.edu.pe</a>
            </div>
            <div className="cv-phone">
              <i className="material-icons">phone</i>
              <span>(+51) 998 996 519 - (+51) 01 4451887</span>
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
