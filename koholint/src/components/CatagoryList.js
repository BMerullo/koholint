import React from "react"
import { Link } from "gatsby"
import setupCatagories from "../../utils/setupCatagories"

const CatagoryList = ({ items }) => {
  const newCatagory = setupCatagories(items)
  return (
    <div className="catagory-container">
      <h4>Catagories</h4>
      <div className="catagory-list">
        {newCatagory.map((catagory, index) => {
          const [text, value] = catagory
          return (
            <Link to={`/${text}`} key={index}>
              <div className="catagory-text">
                {text} ({value})
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default CatagoryList
