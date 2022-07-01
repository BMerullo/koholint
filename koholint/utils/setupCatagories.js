const setupCatagories = items => {
  const allCatagories = {}

  items.forEach(item => {
    item.info.catagories.forEach(catagory => {
      if (allCatagories[catagory]) {
        allCatagories[catagory] = allCatagories[catagory] + 1
      } else {
        allCatagories[catagory] = 1
      }
    })
  })
  const newCatagories = Object.entries(allCatagories).sort((a, b) => {
    const [firstCatagory] = a
    const [secondCatagory] = b
    return firstCatagory.localeCompare(secondCatagory)
  })
  return newCatagories
}

export default setupCatagories
