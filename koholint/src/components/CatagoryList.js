import React from "react"
import { Link } from "gatsby"
import setupCatagories from "../../utils/setupCatagories"

const CatagoryList = ({ items }) => {
  const newCatagory = setupCatagories(items)
  return (
    <div className="catagory-flex">
      <div className="catagory-container">
        <h2 className="catagory-title">Catagories</h2>
        <div className="catagory-list">
          {newCatagory.map((catagory, index) => {
            const [text, value] = catagory
            return (
              <Link to={`/${text}`} key={index}>
                <div className="catagory-text-container">
                  <span className="catagory-text">
                    <h4>
                      {text} ({value})
                    </h4>
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CatagoryList
