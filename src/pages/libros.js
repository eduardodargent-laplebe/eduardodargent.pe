import React from 'react'
import Page from '../components/Page'
import Card from '../components/Card'
import { Link, graphql } from 'gatsby'
import './publicaciones.css'

export default ({ data }) => {
  return (
    <Page class="publicaciones">
      <div className="publicaciones-items">
        {data.allContentfulLibros.edges.map((edge, i) => (
          <Card key={i}>
            <Link to={`/libros/${edge.node.slug}`}>
              <div
                className="card-image"
                style={{
                  backgroundImage: `url(${edge.node.portada.file.url})`,
                }}
              />
              <h2 className="card-title">{edge.node.titulo}</h2>
              <div className="card-date">{edge.node.anho}</div>
              <div className="card-date">{edge.node.lugar}</div>
            </Link>
          </Card>
        ))}
      </div>
    </Page>
  )
}

export const ideasQuery = graphql`
  query {
    allContentfulLibros(sort: { fields: anho, order: DESC }) {
      edges {
        node {
          slug
          titulo
          anho
          lugar
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
