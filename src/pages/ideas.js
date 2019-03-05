import React from 'react'
import Page from '../components/Page'
import Card from '../components/Card'
import { Link, graphql } from 'gatsby'
import './ideas.css'

export default ({ data }) => {
  return (
    <Page class="ideas">
      <div className="ideas-items">
        {data.allContentfulIdeas.edges.map((edge, i) => (
          <Card key={i}>
            <Link to={`/ideas/${edge.node.slug}`}>
              <div
                className="card-image"
                style={{ backgroundImage: `url(${edge.node.foto.file.url})` }}
              />
              <h2 className="card-title">{edge.node.titulo}</h2>
              <div className="card-date">{edge.node.fecha}</div>
              <div className="card-excerpt">
                {edge.node.texto.childMarkdownRemark.excerpt}
              </div>
            </Link>
          </Card>
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
            }
          }
        }
      }
    }
  }
`
