import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllItems from "../components/AllItems"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home Page" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/koholint-img.jpeg"
            alt="koholint island"
            className="hero-img"
            placeholder="blurred"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h3>The Legend of Zelda</h3>
              {/* <h4>A guide to The Legend of Zelda</h4> */}
              <h2>Link's Awakening</h2>
            </div>
          </div>
        </header>
        <AllItems />
      </main>
    </Layout>
  )
}
