import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import setupLocations from "../../utils/setupLocations"
import slugify from "slugify"

const explore = ({ data }) => {
  const newLocations = setupLocations(data.allContentfulLinksAwakening.nodes)
  // console.log(data)
  return (
    <Layout>
      <main className="page">
        <header className="hero-catagory">
          <StaticImage
            src="../assets/images/landscape.jpeg"
            alt="koholint island"
            className="hero-img"
            placeholder="blurred"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Locations</h1>
            </div>
          </div>
        </header>
        <section className="catagories-page">
          {newLocations.map((location, index) => {
            const [text] = location
            const locationSlug = slugify(text, { lower: true })
            return (
              <Link to={`/${locationSlug}`} key={index} className="location">
                <h5>{text}</h5>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulLinksAwakening {
      nodes {
        info {
          locations
        }
      }
    }
  }
`

export default explore
