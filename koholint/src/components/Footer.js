import React from "react"
import { Link } from "gatsby"
import linkedinImg from "../assets/images/logos/linkedin-img.png"
import githubImg from "../assets/images/logos/github-img.png"
import logo from "../assets/images/logos/logo.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer-content-container">
        <div>
          <Link to="/">
            <img className="bob-logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="footer-links">
          <div>
            <ul className="footer-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/explore">Explore</Link>
              </li>
              <li>
                <Link to="/catagories">Catagories</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="footer-list">
              <a href="#">Bob's Portfolio</a>
              <div>
                <li>
                  <a href="https://www.linkedin.com/in/bobmerullo/">
                    <img
                      className="link-icon"
                      src={linkedinImg}
                      alt="linkedin logo"
                    />{" "}
                    linkedin
                  </a>
                </li>
              </div>
              <div>
                <li>
                  <a href="https://github.com/BMerullo">
                    <img
                      className="link-icon"
                      src={githubImg}
                      alt="github logo"
                    />{" "}
                    github
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
