/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Unknown from '../results/Unknown'
import Active from '../results/Active'
import Landed from '../results/Landed'
import Scheduled from '../results/Scheduled'

export default (props) => {
  return renderBasedOnStatus(props)
}

const renderBasedOnStatus = (props) => {
  const { status, flightData, airportInfo } = props
  switch (status) {
    case 'U':
      return <Unknown flightData={flightData} />
    case 'A':
      return <Active airportInfo={airportInfo} flightData={flightData} />
    case 'L':
      return <Landed airportInfo={airportInfo} flightData={flightData} />
    case 'S':
      return <Scheduled airportInfo={airportInfo} flightData={flightData} />
    default:
      return <p>Unavailable</p>
  }
}
