import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const explore = () => {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/koholint-map.png"
            alt="koholint island"
            className="hero-img"
            placeholder="blurred"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Explore Koholint</h1>
              {/* <h4>A guide to The Legend of Zelda</h4> */}
            </div>
          </div>
        </header>
      </main>
    </Layout>
  )
}

export default explore
