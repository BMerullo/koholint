import React from "react"
import { graphql } from "gatsby"
import ItemList from "../components/ItemList"
import Layout from "../components/Layout"

// const query = graphql`
// //   {
// //     contentfulLinksAwakening(name: { eq: $name }) {
// //       description {
// //         description
// //       }
// //       name
// //       info {
// //         catagories
// //         locations
// //       }
// //       slug
// //       image {
// //         gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
// //       }
// //     }
// //   }
// // `

const LocationTemplate = ({ data, pageContext }) => {
  const items = data.allContentfulLinksAwakening.nodes
  console.log(data)
  return (
    <div>
      <Layout>
        <main className="page">
          <h2>{pageContext.location}</h2>
          <ItemList items={items} />
        </main>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query GetItemByLocation($location: String) {
    allContentfulLinksAwakening(
      sort: { fields: name, order: ASC }
      filter: { info: { locations: { eq: $location } } }
    ) {
      nodes {
        id
        name
        info {
          locations
          catagories
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default LocationTemplate
