import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ItemList = ({ items = [] }) => {
  return (
    <div>
      {items.map((item, index) => {
        const { id, name, image } = item
        return (
          <Link key={id}>
            <GatsbyImage image={image.gatsbyImageData} alt={name} />
            <h5>{name}</h5>
            {/* <p>Location | {info.location}</p> */}
          </Link>
        )
      })}
    </div>
  )
}

export default ItemList
