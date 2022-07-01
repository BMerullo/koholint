import React from "react"

const ItemTemplate = props => {
  console.log(props)
  return (
    <div>
      <h1>{props.params.name}</h1>
    </div>
  )
}

export default ItemTemplate
