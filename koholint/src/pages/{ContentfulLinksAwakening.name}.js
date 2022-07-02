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
        <h3 className="singleItemTitle">{name}</h3>
        <section className=" singleItemContainer">
          <article className="itemImage">
            <div className="item-image-container">
              <GatsbyImage
                image={pathToImage}
                alt={name}
                className="singleImage"
              />
            </div>
            <h5>Catagorie(s)</h5> : <button>{catagories}</button>
            <h5>Location(s) : {locations}</h5>
          </article>
          <article className="itemDescription">
            <p className="descriptionText">{description}</p>
          </article>
        </section>
        <section className="locationItemList">
          {locationBoolean === true ? (
            <div>
              <h3 className="locationItemListTitle">Found in {name} . . .</h3>
              <LocationItemList name={name} />
            </div>
          ) : null}
        </section>
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
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
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
