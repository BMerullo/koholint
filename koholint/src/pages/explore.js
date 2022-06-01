import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const explore = () => {
  return (
    <Layout>
      <main className="page">
        <header>
          <StaticImage
            src="../assets/images/koholint-img.jpeg"
            alt="koholint island"
            className="hero-img"
            placeholder="blurred"
            layout="fullWidth"
          ></StaticImage>
        </header>
      </main>
    </Layout>
  )
}

export default explore
