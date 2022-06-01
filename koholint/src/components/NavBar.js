import React from "react"
import { Link } from "gatsby"
import palmTree from "../assets/images/logos/island.jpg"

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <div className="flex">
          <h2 className="link">Koholint Wiki</h2>
          <img src={palmTree} alt="logo" className="logo nav-link" />
        </div>
      </Link>

      <div>
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
