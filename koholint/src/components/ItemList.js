import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ItemList = ({ items = [] }) => {
  return (
    <div className="item-container">
      <div className="item-list">
        {items.map((item, index) => {
          const { id, name, image, slug } = item
          return (
            <Link to={name} key={id} className="item">
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
      </div>{" "}
    </div>
  )
}

export default ItemList
