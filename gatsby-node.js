const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulIdeas(sort: { fields: fecha, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    // if (result.errors) {
    //   throw result.errors
    // }
    result.data.allContentfulIdeas.edges.forEach(edge => {
      createPage({
        path: `ideas/${edge.node.slug}`,
        component: path.resolve(`./src/components/Article.js`),
        context: {
          slug: edge.node.slug,
        },
      })
    })
  })
}
