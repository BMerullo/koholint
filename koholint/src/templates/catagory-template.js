import React from "react"
import { graphql } from "gatsby"
import ItemList from "../components/ItemList"
import Layout from "../components/Layout"
const CatagoryTemplate = ({ data, pageContext }) => {
  const items = data.allContentfulLinksAwakening.nodes
  console.log(data)
  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.catagory}</h2>
        <div>
          <ItemList items={items} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetItemByCatagory($catagory: String) {
    allContentfulLinksAwakening(
      sort: { fields: name, order: ASC }
      filter: { info: { catagories: { eq: $catagory } } }
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

export default CatagoryTemplate
