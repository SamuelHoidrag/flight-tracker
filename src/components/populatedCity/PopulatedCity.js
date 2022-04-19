import React, { useState, useEffect } from 'react'

const PopulatedCity = () => {
  const [hotels, setHotels] = useState([])

  const getData = () => {
    fetch('cazari.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        setHotels(myJson)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div className="populatedCityBox">
        <h5 className="populatedCityHotels" variant="h5">
          Orașe populare pentru hoteluri
        </h5>
        <p>Destinațiile cele mai căutate pe momondo, după hoteluri</p>
      </div>
      <div className="hotelsContainer">
        {hotels &&
          hotels.length > 0 &&
          hotels.map((hotel) => (
            <div key={hotel.id} className="hotelItemBox">
              <div className="imgHotel">
                <img alt="hotel" src={hotel.img} />
              </div>
              <div className="hotelDetails">
                <p className="hotelTitle">Hoteluri în</p>
                <p className="hotelCity">{hotel.cityName}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default PopulatedCity
