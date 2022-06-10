import React from "react"
import { Link } from "gatsby"
import setupCatagories from "../../utils/setupCatagories"

const CatagoryList = ({ items }) => {
  const newCatagory = setupCatagories(items)
  return (
    <div className="tag-container">
      <h4>Catagories</h4>
      <div>
        {newCatagory.map((catagory, index) => {
          const [text, value] = catagory
          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default CatagoryList
