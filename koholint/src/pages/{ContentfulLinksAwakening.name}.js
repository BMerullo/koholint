import React from "react"
import { graphql } from "gatsby"
import { gatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

const ItemTemplate = ({ data }) => {
  const {
    name,
    description: { description },
    image,
    info: { locations, catagories },
    locationBoolean,
  } = data.contentfulLinksAwakening
  const items = data.contentfulLinksAwakening

  // console.log(data)
  return (
    <Layout>
      <main className="page">
        <div>
          <h4>{name}</h4>
          <p>{description}</p>
          <p>Catagories: {catagories}</p>
        </div>
        {locationBoolean === true ? <div>test</div> : null}
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleItem($name: String) {
    contentfulLinksAwakening(name: { eq: $name }) {
      name
      description {
        description
      }
      id
      image {
        gatsbyImageData(layout: FIXED, placeholder: BLURRED)
      }
      info {
        locations
        catagories
      }
      locationBoolean
    }
  }
`

export default ItemTemplate
