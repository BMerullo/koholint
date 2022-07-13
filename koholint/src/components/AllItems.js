import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import CatagoryList from "./CatagoryList"
// import ItemList from "./ItemList"
import MainPageItemList from "./MainPageItemList"

const query = graphql`
  {
    allContentfulLinksAwakening(
      sort: { fields: name, order: ASC }
      filter: { featured: { eq: true } }
    ) {
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
    <section>
      <div className="main-item-container">
        <CatagoryList items={items} />
        <MainPageItemList items={items} />
      </div>
    </section>
  )
}

export default AllItems
