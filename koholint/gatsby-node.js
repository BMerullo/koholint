const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetCatagories {
      allContentfulLinksAwakening {
        nodes {
          info {
            catagories
          }
        }
      }
    }
  `)

  result.data.allContentfulLinksAwakening.nodes.forEach(item => {
    item.info.catagories.forEach(catagory => {
      createPage({
        path: `/${catagory}`,
        component: path.resolve(`src/templates/catagory-template.js`),
        context: {
          catagory: catagory,
        },
      })
    })
  })
}
