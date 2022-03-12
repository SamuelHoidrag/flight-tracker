/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

// Web Components
import moment from 'moment'

export default ({ flightData, airportInfo }) => {
  const { operationalTimes } = flightData

  const [arrival, departure] = airportInfo

  return (
    <>
      <h3>
        Status: <span className="scheduledActive">Scheduled</span>
      </h3>
      <h4>
        Take off time:{' '}
        {moment(operationalTimes.estimatedGateArrival.dateLocal).format('LLL')}(
        {moment(operationalTimes.estimatedGateArrival.dateUtc).fromNow()})
      </h4>
      <hr className="deviderLineSearch" />
      <div className="detailArrDep">
        <div className="arrivalContainer">
          <h4 className="arrivalTitle">Arrival</h4>
          <div>
            {arrival.name}
            {` - `}
            {arrival.fs}
          </div>
          <div>
            {arrival.city}
            {` - `}
            {arrival.countryName}
          </div>
        </div>
        <div className="departureContainer">
          <h4 className="departureTitle">Departure</h4>
          <div>
            {departure.name}
            {` - `}
            {departure.fs}
          </div>
          <div>
            {departure.city}
            {` - `}
            {departure.countryName}
          </div>
        </div>
      </div>
    </>
  )
}
