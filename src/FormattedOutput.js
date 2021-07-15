'use strict'

const { AsyncObject } = require('@cuties/cutie')

class FormattedOutput extends AsyncObject {
  constructor (listOfEarthShakes) {
    super(listOfEarthShakes)
  }

  syncCall () {
    return (listOfEarthShakes) => {
      return listOfEarthShakes.map(earthShake => {
        return `${earthShake.place} || ${earthShake.distanceFromInputCoordinates}`
      }).join('\n')
    }
  }
}

module.exports = FormattedOutput
