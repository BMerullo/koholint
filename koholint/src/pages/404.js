import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const Error = () => {
  return (
    <Layout>
      <main className="page">
        <header className="error">
          <StaticImage
            src="../assets/images/tired-link.jpeg"
            alt="koholint island"
            className="hero-img"
            placeholder="blurred"
            layout="fullWidth"
          ></StaticImage>
          <div className="error-container">
            <div className="hero-text">
              <h1>404</h1>
              <h4>Page Not Found</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  )
}

export default Error
