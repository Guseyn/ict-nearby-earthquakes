'use strict'

const { AsyncObject } = require('@cuties/cutie')
const Distance = require('geo-distance');

class ListOfEarthShakes extends AsyncObject {
  constructor (jsonData, inputCoordinates) {
    super(jsonData, inputCoordinates)
  }

  syncCall () {
    return (jsonData, inputCoordinates) => {
      const placesWithCoordinates = jsonData.features.map((earthShake) => {
        return {
          lon: earthShake.geometry.coordinates[0],
          lat: earthShake.geometry.coordinates[1],
          place: earthShake.properties.place
        }
      })
      placesWithCoordinates.forEach(placeWithCoordinates => {
        placeWithCoordinates.distanceFromInputCoordinates = Distance.between(
          placeWithCoordinates, inputCoordinates
        ).human_readable().distance * 1
      })
      placesWithCoordinates.sort((p1, p2) => {
        return p1.distanceFromInputCoordinates - p2.distanceFromInputCoordinates
      })
      const uniquePlacesWithCoordinates = []
      placesWithCoordinates.forEach(placeWithCoordinates => {
        if (
          uniquePlacesWithCoordinates.findIndex((uniquePlaceWithCoordinates) => {
            return uniquePlaceWithCoordinates.lon === placeWithCoordinates.lon &&
              uniquePlaceWithCoordinates.lat === placeWithCoordinates.lat
          }) === -1
        ) {
          uniquePlacesWithCoordinates.push(placeWithCoordinates)
        }
      })
      return uniquePlacesWithCoordinates.splice(0, 10)
    }
  }
}

module.exports = ListOfEarthShakes
