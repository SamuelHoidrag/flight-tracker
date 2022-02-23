import React from 'react'
import CountryDropdown from 'country-dropdown-with-flags-for-react'

const CountryPicker = () => {
  return (
    <CountryDropdown
      id="countryPikID"
      className="countryPikerInput"
      preferredCountries={['ro', 'ro']}
      handleChange={(e) => console.log(e.target.value)}
    ></CountryDropdown>
  )
}

export default CountryPicker
