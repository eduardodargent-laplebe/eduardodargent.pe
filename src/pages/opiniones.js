import React from 'react'
import Page from '../components/Page'
import Card from '../components/Card'
import { graphql } from 'gatsby'
import './opiniones.css'

export default ({ data }) => {
  // var array = [1, 2, 1, 4, 1, 3]
  // var result = [...new Set(array)]
  // console.log(result)
  return (
    <Page class="opiniones">
      <div className="opiniones-items">
        {data.allContentfulOpiniones.edges.map((edge, i) => (
          <Card key={i}>
            <a href={edge.node.url}>
              <div>
                <div className="card-date">{edge.node.fecha}</div>
                <div className="card-media">{edge.node.medio}</div>
              </div>
              <div>
                <h2 className="card-title">{edge.node.titulo}</h2>
                <div className="card-description">
                  {edge.node.descripcion.descripcion}
                </div>
              </div>
            </a>
          </Card>
        ))}
      </div>
    </Page>
  )
}

export const opinionesQuery = graphql`
  query {
    allContentfulOpiniones(sort: { fields: fecha, order: DESC }) {
      edges {
        node {
          titulo
          medio
          fecha
          descripcion {
            descripcion
          }
          url
        }
      }
    }
  }
`
