const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulIdeas(limit: 500, sort: { fields: fecha, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulLibros(limit: 500, sort: { fields: anho, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allContentfulIdeas.edges.forEach(edge => {
      createPage({
        path: `blog/${edge.node.slug}`,
        component: path.resolve(`./src/components/Article.js`),
        context: {
          slug: edge.node.slug,
        },
      })
    })
    result.data.allContentfulLibros.edges.forEach(edge => {
      createPage({
        path: `libros/${edge.node.slug}`,
        component: path.resolve(`./src/components/Libro.js`),
        context: {
          slug: edge.node.slug,
        },
      })
    })
  })
}
