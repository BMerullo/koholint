import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupCatagories from "../../utils/setupCatagories"
import { StaticImage } from "gatsby-plugin-image"

const catagories = ({ data }) => {
  const newCatagories = setupCatagories(data.allContentfulLinksAwakening.nodes)
  return (
    <Layout>
      <main className="page">
        <header className="hero-catagory">
          <StaticImage
            src="../assets/images/sword.jpeg"
            alt="koholint island"
            className="hero-img"
            placeholder="blurred"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Catagories</h1>
            </div>
          </div>
        </header>
        <section className="catagories-page">
          {newCatagories.map((catagory, index) => {
            const [text] = catagory
            return (
              <Link to={`/${text}`} key={index} className="catagory">
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
          catagories
        }
      }
    }
  }
`

export default catagories
