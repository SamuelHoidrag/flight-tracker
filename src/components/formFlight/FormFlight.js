import React from 'react'
import { Container } from '@mui/material'

const FormFlight = () => {
  return (
    <Container>
      <div className="containerForm">
        <div className="select">
          <select>
            <option value="1">Doar dus</option>
            <option value="2">Dus-Întors</option>
            <option value="3">Multi-City</option>
          </select>
        </div>
        <div className="select">
          <select>
            <option value="1">Economic</option>
            <option value="2">Premium Economic</option>
            <option value="3">Business</option>
            <option value="4">Clasa întâi</option>
            <option value="5">Mixte</option>
          </select>
        </div>
      </div>
      <div className="selectFlightLocation">
        <div className="chooseLocationFrom"></div>
        <div className="calendarFlights"></div>
      </div>
    </Container>
  )
}

export default FormFlight
