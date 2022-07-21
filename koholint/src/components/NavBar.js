import React from "react"
import { Link } from "gatsby"
import palmTree from "../assets/images/logos/island.jpg"

const NavBar = () => {
  return (
    <nav>
      <div className="nav-bar">
        <Link to="/">
          <div className="flex fullscreen">
            <h2 className="link">Koholint Island</h2>
            <img src={palmTree} alt="logo" className="logo nav-link" />
          </div>
          <div className="flex mobilescreen">
            <h2 className="link">Koholint Wiki</h2>
          </div>
        </Link>
        <Link
          className="btn-link mobilescreen"
          to="https://koholint-wiki.netlify.app/koholint-island"
        >
          <img src={palmTree} alt="logo" className="btn-logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link" activeClassName="active-link">
          home
        </Link>
        <Link
          to="/catagories"
          className="nav-link"
          activeClassName="active-link"
        >
          catagories
        </Link>
        <Link to="/explore" className="nav-link" activeClassName="active-link">
          explore
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
