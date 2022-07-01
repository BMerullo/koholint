import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulLinksAwakening {
      nodes {
        id
        image {
          gatsbyImageData(layout: FIXED, placeholder: BLURRED)
        }
        info {
          catagories
        }
        name
        slug
        description {
          description
        }
      }
    }
  }
`

const SingleLocation = props => {
  const data = useStaticQuery(query)
  const locationData = data.allContentfulLinksAwakening.nodes
  return (
    <section>
      <div>
        <article>
          {locationData.map((mapLocation, index) => {
            return props.title === mapLocation.name ? (
              <div>
                <article>image</article>
                <article>
                  <p>{mapLocation.description.description}</p>
                </article>
              </div>
            ) : null
          })}
        </article>
      </div>
    </section>
  )
}

export default SingleLocation
