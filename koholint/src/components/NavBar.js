import React, { useState } from "react"
import { Link } from "gatsby"
import palmTree from "../assets/images/logos/island.jpg"

const NavBar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav>
      <div className="nav-bar">
        <Link to="/">
          <div className="flex fullscreen">
            <h2 className="link">Koholint Wiki</h2>
            <img src={palmTree} alt="logo" className="logo nav-link" />
          </div>
          <div className="flex mobilescreen">
            <h2 className="link">Koholint Wiki</h2>
          </div>
        </Link>
        <button
          className="btn-link mobilescreen"
          onClick={() => setShow(!show)}
        >
          <img src={palmTree} alt="logo" className="btn-logo" />
        </button>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link" activeClassName="active-link">
          home
        </Link>
        <Link to="/explore" className="nav-link" activeClassName="active-link">
          explore
        </Link>
        <Link
          to="/catagories"
          className="nav-link"
          activeClassName="active-link"
        >
          catagories
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
