import React from 'react'
import CountryDropdown from 'country-dropdown-with-flags-for-react'

const CountryPicker = () => {
  return (
    <CountryDropdown
      id="countryPikID"
      className="countryPikerInput"
      preferredCountries={['ro', 'ro']}
    ></CountryDropdown>
  )
}

export default CountryPicker
