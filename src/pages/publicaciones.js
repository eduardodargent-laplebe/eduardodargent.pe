import React from 'react'
import Page from '../components/Page'
import Card from '../components/Card'
import { Link, graphql } from 'gatsby'
import './publicaciones.css'

export default ({ data }) => {
  return (
    <Page class="publicaciones">
      <div className="publicaciones-items">
        {data.allContentfulPublicaciones.edges.map((edge, i) => (
          <Card key={i}>
            <Link to={`/publicaciones/${edge.node.slug}`}>
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
    allContentfulPublicaciones(sort: { fields: anho, order: DESC }) {
      edges {
        node {
          slug
          titulo
          anho
        }
      }
    }
  }
`
