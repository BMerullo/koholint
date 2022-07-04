import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import LocationItemList from "../components/LocationItemList"
import slugify from "slugify"

const ItemTemplate = ({ data }) => {
  const {
    name,
    description: { description },
    image,
    info: { locations, catagories },
    locationBoolean,
  } = data.contentfulLinksAwakening
  const pathToImage = getImage(image)
  // const { locations, catagories } = info
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
            <div className="flex">
              <h5>Location(s): </h5>
              <h5>
                {locations.map((location, index) => {
                  const locationSlug = slugify(location, { lower: true })
                  return (
                    <Link
                      to={`http://localhost:8000/${locationSlug}`}
                      key={index}
                      className="single-page-location-link"
                    >
                      {location}
                    </Link>
                  )
                })}
              </h5>
            </div>
            <div className="flex">
              <h5>Catagorie(s): </h5>
              <h5>
                {catagories.map((catagory, index) => {
                  return (
                    <Link
                      to={`http://localhost:8000/${catagory}`}
                      key={index}
                      className="single-page-catagory-link"
                    >
                      {catagory}
                    </Link>
                  )
                })}
              </h5>
            </div>
          </article>
          <article className="itemDescription">
            <p className="descriptionText">{description}</p>
          </article>
        </section>
        <section className="locationItemList">
          {locationBoolean === true ? (
            <h3 className="locationItemListTitle">Found in {name} . . .</h3>
          ) : null}
          {locationBoolean === true ? (
            <div>
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
