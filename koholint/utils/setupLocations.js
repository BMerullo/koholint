const setupLocations = items => {
  const allLocations = {}

  items.forEach(item => {
    item.info.locations.forEach(location => {
      if (allLocations[location]) {
        allLocations[location] = allLocations[location] + 1
      } else {
        allLocations[location] = 1
      }
    })
  })
  const newLocation = Object.entries(allLocations).sort((a, b) => {
    const [firstLocation] = a
    const [secondLocation] = b
    return firstLocation.localeCompare(secondLocation)
  })
  return newLocation
}

export default setupLocations
