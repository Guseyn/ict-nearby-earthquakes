'use strict'

const { AsyncObject } = require('@cuties/cutie')

class UserInput extends AsyncObject {
  constructor (answers, defaultCoordinates) {
    super(answers, defaultCoordinates)
  }

  syncCall () {
    return (answers, defaultCoordinates) => {
      return {
        lat: answers[0] || defaultCoordinates.lat,
        lon: answers[1] || defaultCoordinates.lon
      }
    }
  }
}

module.exports = UserInput