import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import LocationItemList from "../components/LocationItemList"
import slugify from "slugify"
import SEO from "../components/SEO"

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
      <SEO title={name} />
      <main className="page">
        <h3 className="singleItemTitle">{name}</h3>
        <section className=" singleItemContainer">
          <article className="image-description-container">
            <div className="single-item-image-container">
              <GatsbyImage
                image={pathToImage}
                alt={name}
                className="singleImage"
              />
            </div>
            <p className="descriptionText">{description}</p>
          </article>
          <div className="tag-flex">
            <h5>Located in: </h5>
            {/* <div className="tag-container"> */}
            <h5 className="tag-container">
              {locations.map((location, index) => {
                const locationSlug = slugify(location, { lower: true })
                return (
                  <Link
                    to={`/${locationSlug}`}
                    key={index}
                    className="single-page-location-link"
                  >
                    {location}
                  </Link>
                )
              })}
            </h5>
          </div>
          {/* </div> */}
          <div className="tag-flex">
            <h5>Catagorie(s): </h5>
            <h5 className="tag-container">
              {catagories.map((catagory, index) => {
                return (
                  <Link
                    to={`/${catagory}`}
                    key={index}
                    className="single-page-catagory-link"
                  >
                    {catagory}
                  </Link>
                )
              })}
            </h5>
          </div>
        </section>
        {locationBoolean === true ? (
          <h3 className="locationItemListTitle">Found in {name} . . .</h3>
        ) : null}
        <section className="locationItemList">
          {locationBoolean === true ? (
            <div className="catagories-page">
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
