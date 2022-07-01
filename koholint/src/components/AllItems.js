import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import CatagoryList from "./CatagoryList"
import ItemList from "./ItemList"

const query = graphql`
  {
    allContentfulLinksAwakening(sort: { fields: name, order: ASC }) {
      nodes {
        id
        name
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        info {
          locations
          catagories
        }
      }
    }
  }
`

const AllItems = () => {
  const data = useStaticQuery(query)
  const items = data.allContentfulLinksAwakening.nodes
  return (
    <section className="item-container">
      <CatagoryList items={items} />
      <ItemList items={items} />
    </section>
  )
}

export default AllItems
