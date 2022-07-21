import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"

const ItemList = ({ items = [] }) => {
  return (
    <div className="item-container">
      <div className="catagory-location-page">
        {items.map((item, index) => {
          const { id, name, image, slug } = item
          const itemSlug = slugify(name, { lower: true })
          return (
            <Link to={`/${itemSlug}`} key={id} className="item">
              <div className="item-img-container">
                <GatsbyImage
                  image={image.gatsbyImageData}
                  alt={name}
                  className="item-img"
                />
              </div>
              <h5>{name}</h5>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ItemList
