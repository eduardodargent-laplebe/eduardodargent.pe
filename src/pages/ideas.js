import React from 'react'
import Page from '../components/Page'
import { graphql } from 'gatsby'
import './ideas.css'

export default ({ data }) => {
  return (
    <Page class="ideas">
      <div className="grid">
        {data.allContentfulIdeas.edges.map((edge, i) => (
          <a href={`./${edge.node.slug}`} className="card" key={i}>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${edge.node.foto.file.url})` }}
            />
            <h2 className="card-title">{edge.node.titulo}</h2>
            <div className="card-date">{edge.node.fecha}</div>
            <div className="card-excerpt">
              {edge.node.texto.childMarkdownRemark.excerpt}
            </div>
          </a>
        ))}
      </div>
    </Page>
  )
}

export const ideasQuery = graphql`
  query {
    allContentfulIdeas(sort: { fields: fecha, order: DESC }) {
      edges {
        node {
          slug
          titulo
          fecha
          foto {
            file {
              url
            }
          }
          texto {
            childMarkdownRemark {
              excerpt
              html
            }
          }
        }
      }
    }
  }
`
