import React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import ItemList from "../components/ItemList"
import Layout from "../components/Layout"
import SingleLocation from "../components/SingleLocation"

const LocationTemplate = ({ data, pageContext }) => {
  const items = data.allContentfulLinksAwakening.nodes
  const locationTitle = pageContext.location
  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.location}</h2>
        <SingleLocation title={locationTitle} />
        <ItemList items={items} />
      </main>
    </Layout>
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
