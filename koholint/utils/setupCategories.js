const setupCategories = items => {
  const allCategories = {}

  items.forEach(item => {
    item.info.catagories.forEach(category => {
      if (allCategories[category]) {
        allCategories[category] = allCategories[category] + 1
      } else {
        allCategories[category] = 1
      }
    })
  })
  const newCategories = Object.entries(allCategories).sort((a, b) => {
    const [firstCategory] = a
    const [secondCategory] = b
    return firstCategory.localeCompare(secondCategory)
  })
  return newCategories
}

export default setupCategories
