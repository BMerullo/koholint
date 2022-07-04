import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"

const query = graphql`
  {
    allContentfulLinksAwakening {
      nodes {
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        info {
          locations
        }
        name
      }
    }
  }
`

const LocationItemList = props => {
  const data = useStaticQuery(query)
  const items = data.allContentfulLinksAwakening.nodes
  // const singleItemLocation = locationItems.info.locations
  // console.log(singleItemLocation)
  console.log(props)
  console.log(items)
  return (
    <div className="catagory-location-page">
      {items.map((item, index) => {
        const location = item.info.locations
        const itemSlug = slugify(item.name, { lower: true })
        return location.includes(props.name) ? (
          <div className="item-img-container">
            <Link
              to={`http://localhost:8000/${itemSlug}`}
              key={item.id}
              className="item"
            >
              <div className="item-img">
                <GatsbyImage
                  image={item.image.gatsbyImageData}
                  alt={item.name}
                  className="item-img"
                />
              </div>
              <h5>{item.name}</h5>
            </Link>
          </div>
        ) : null
      })}
    </div>
  )
}

export default LocationItemList
