import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import LocationItemList from "../components/LocationItemList"

const ItemTemplate = ({ data }) => {
  const {
    name,
    description: { description },
    image,
    info: { locations, catagories },
    locationBoolean,
  } = data.contentfulLinksAwakening
  const pathToImage = getImage(image)
  const items = data.contentfulLinksAwakening
  // console.log(data)
  return (
    <Layout>
      <main className="page">
        <GatsbyImage image={pathToImage} alt={name} />
        <article>
          <h4>{name}</h4>
          <p>{description}</p>
          <p>Catagories: {catagories}</p>
        </article>
        {locationBoolean === true ? (
          <div>
            <LocationItemList name={name} />
          </div>
        ) : null}
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
