import React from 'react'
import Page from './Page'
import { graphql } from 'gatsby'
import './Article.css'

export default ({ data }) => {
  let edge = data.allContentfulLibros.edges[0]
  return (
    <Page class="ideas-article">
      <div className="article-content">
        <div className="article-header">
          <div className="article-data">
            <div className="article-title">
              <h1>{edge.node.titulo}</h1>
            </div>
            <div className="article-date">{edge.node.anho}</div>
          </div>
          <div>
            <img
              className="article-image"
              src={edge.node.portada.file.url}
              alt="cover"
            />
          </div>
        </div>
        <div
          className="article-text"
          dangerouslySetInnerHTML={{
            __html: edge.node.descripcion.childMarkdownRemark.html,
          }}
        />
      </div>
    </Page>
  )
}

export const articleQuery = graphql`
  query($slug: String!) {
    allContentfulLibros(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          titulo
          anho
          portada {
            file {
              url
            }
          }
          descripcion {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
