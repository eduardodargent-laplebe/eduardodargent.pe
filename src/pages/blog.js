import React from 'react'
import Page from '../components/Page'
import Card from '../components/Card'
import { Link, graphql } from 'gatsby'
import './blog.css'

export default ({ data }) => {
  return (
    <Page class="blog">
      <div className="blog-items">
        {data.allContentfulIdeas.edges.map((edge, i) => (
          <Card key={i}>
            <Link to={`/blog/${edge.node.slug}`}>
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
      <nav className="blog-items-nav">
        <a className="blog-items-nav--left" href="#">
          <i className="material-icons">navigate_before</i>
          <span>anterior</span>
        </a>
        <a className="blog-items-nav--right" href="#">
          <span>siguiente</span>
          <i className="material-icons">navigate_next</i>
        </a>
      </nav>
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
