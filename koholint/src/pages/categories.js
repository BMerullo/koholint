import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupCategories from "../../utils/setupCategories"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/SEO"

const categories = ({ data }) => {
  const newCategories = setupCategories(data.allContentfulLinksAwakening.nodes)
  return (
    <Layout>
      <SEO title="Categories" />
      <main className="page">
        <header className="hero-category">
          <StaticImage
            src="../assets/images/sword.jpeg"
            alt="koholint island"
            className="hero-img"
            placeholder="blurred"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Categories</h1>
            </div>
          </div>
        </header>
        <section className="categories-page">
          {newCategories.map((category, index) => {
            const [text] = category
            return (
              <Link to={`/${text}`} key={index} className="category">
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

export default categories
