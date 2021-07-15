'use strict'

const { as } = require('@cuties/cutie')
const { ResponseFromHttpsGetRequest, ResponseBody } = require('@cuties/https')
const { StringFromBuffer } = require('@cuties/buffer')
const { ParsedJSON } = require('@cuties/json')
const { Logged } = require('@cuties/async')
const { CreatedInterface, AnswersOfQuestionedInterface, ClosedInterface } = require('@cuties/readline')

const UserInput = require('./UserInput')
const ListOfEarthShakes = require('./ListOfEarthShakes')
const FormattedOutput = require('./FormattedOutput')

const hostname = 'earthquake.usgs.gov'
const port = 443
const options = {
  hostname: hostname,
  port: port,
  path: '/earthquakes/feed/v1.0/summary/all_month.geojson',
  method: 'GET'
}

// New York
const defaultCoordinates = {
  lat: 40.730610,
  lon: -73.935242
}

new CreatedInterface({
    input: process.stdin,
    output: process.stdout
}).as('interface').after(
  new UserInput(
    new AnswersOfQuestionedInterface(
      as('interface'), 'Please enter latitude(40.730610):',
      new AnswersOfQuestionedInterface(
        as('interface'), 'Please enter longitude(-73.935242): '
      )
    ),
    defaultCoordinates
  ).as('coordinates').after(
    new Logged(
      new FormattedOutput(
        new ListOfEarthShakes(
          new ParsedJSON(
            new StringFromBuffer(
              new ResponseBody(
                new ResponseFromHttpsGetRequest(
                  options
                )
              ),'utf-8'
            )
          ),
          as('coordinates')
        )
      )
    ).after(
      new ClosedInterface(
        as('interface')
      )
    )
  )
).call()
