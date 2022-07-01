const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const catagoryResult = await graphql(`
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

  const locationResult = await graphql(`
    query GetLocations {
      allContentfulLinksAwakening {
        nodes {
          slug
          info {
            locations
          }
        }
      }
    }
  `)

  catagoryResult.data.allContentfulLinksAwakening.nodes.forEach(item => {
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

  locationResult.data.allContentfulLinksAwakening.nodes.forEach(item => {
    item.info.locations.forEach(location => {
      createPage({
        path: `/${location}`,
        component: path.resolve(`src/templates/location-template.js`),
        context: {
          location: location,
        },
      })
    })
  })
}
