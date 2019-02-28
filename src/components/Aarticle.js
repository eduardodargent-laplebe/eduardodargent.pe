import React from 'react'
import Page from './Page'
import { graphql } from 'gatsby'
import './Aarticle.css'

export default ({ data }) => {
  let edge = data.allContentfulIdeas.edges[0]
  return (
    <Page class="ideas-article">
      <div className="article">
        <div className="article-header">
          <div className="article-data">
            <div className="article-taxonomy">IDEAS</div>
            <h1 className="article-title">{edge.node.titulo}</h1>
            <div className="article-date">{edge.node.fecha}</div>
          </div>
          <div>
            <img
              className="article-image"
              src={edge.node.foto.file.url}
              alt="cover"
            />
          </div>
        </div>
        <div
          className="article-text"
          dangerouslySetInnerHTML={{
            __html: edge.node.texto.childMarkdownRemark.html,
          }}
        />
      </div>
    </Page>
  )
}

export const articleQuery = graphql`
  query($slug: String!) {
    allContentfulIdeas(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          titulo
          fecha
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
