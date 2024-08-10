import React from "react"
import { Link } from "gatsby"
import setupCategories from "../../utils/setupCategories"

const CategoryList = ({ items }) => {
  const newCategory = setupCategories(items)
  return (
    <div className="category-flex">
      <div>
        <h2 className="category-title">Categories</h2>
        <div className="category-list">
          {newCategory.map((category, index) => {
            const [text, value] = category
            return (
              <Link to={`/${text}`} key={index}>
                <div className="category-text-container">
                  <span className="category-text">
                    <h4>
                      {text}
                      {/* ({value}) */}
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

export default CategoryList
