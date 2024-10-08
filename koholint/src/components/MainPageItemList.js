import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"

const MainPageItemList = ({ items = [] }) => {
  return (
    <div className="item-container">
      <div className="categories-page">
        {items.map((item, index) => {
          const { id, name, image, slug } = item
          const itemSlug = slugify(name, { lower: true })
          return (
            <Link
              to={`https://koholint-wiki.netlify.app/${itemSlug}`}
              key={id}
              className="item"
            >
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

export default MainPageItemList
