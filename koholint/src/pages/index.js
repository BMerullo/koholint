import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllItems from "../components/AllItems"

export default function Home() {
  return (
    <Layout>
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
              <h1>The Legend of Zelda</h1>
              {/* <h4>A guide to The Legend of Zelda</h4> */}
              <h4>Link's Awakening</h4>
            </div>
          </div>
        </header>
        <AllItems />
      </main>
    </Layout>
  )
}
