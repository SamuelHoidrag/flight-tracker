import React, { useState } from 'react'
//Materiall UI
import { Container, Box } from '@mui/material'
import Typography from '@mui/material/Typography'
// Ant Design
import { Select, Button, InputNumber, DatePicker, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
// Components
import { useStyles } from '../../style'
import Results from '../results/Results'
import Footer from '../footer/Footer'
import TravelAdvice from '../travelAdvice/TravelAdvice'
import VacantionHouses from '../vacantionHouses/VacantionHouses'
import PopulatedCity from '../populatedCity/PopulatedCity'

const { Option } = Select

const FormFlight = () => {
  const [carrier, setCarrier] = useState('')
  const [date, setDate] = useState('')
  const [flightNum, setFlightNum] = useState('')
  const [data, setData] = useState({})
  const classes = useStyles()

  const onChange = (value) => {
    setCarrier(value)
  }

  const onChangeDate = (date, dateString) => {
    setDate(dateString)
  }

  const onFlightNumChange = (value) => {
    setFlightNum(value)
  }

  const onSearch = () => {
    if (!carrier || !flightNum || !date) {
      alert('Carrier, Flight Numer and Date is Required')
      return
    }

    let firstFormat = date.replace('-', '/')
    let formattedDate = firstFormat.replace('-', '/')

    fetch(
      `https://cors-anyware.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${carrier}/${flightNum}/dep/${formattedDate}`,
      {
        method: 'GET',
        headers: {
          appId: 'a7de6f15',
          appKey: '4ca7971077cb6836d3820cc574cc183c',
        },
      }
    )
      .then((data) => data.json())
      .then((finalData) => {
        setData(finalData)
        console.log(finalData)
      })
  }

  return (
    <Box className="mainContainer">
      <Container>
        <Typography className={classes.mainTitle} variant="h4">
          Bun venit! Caută un zbor flexibil pentru următoarea ta călătorie.
        </Typography>
        <div className="checkTrackerMain">
          <div>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select Airline"
              onChange={onChange}
            >
              <Option value="EK">Emirates</Option>
              <Option value="EY">Eithid</Option>
              <Option value="QR">Qatar</Option>
            </Select>
          </div>
          <div>
            <InputNumber
              min={0}
              placeholder="ex 245"
              onChange={onFlightNumChange}
            />
          </div>
          <div>
            <Space direction="vertical">
              <DatePicker onChange={onChangeDate} />
            </Space>
          </div>
          <div>
            <Button
              id="buttonSearchFlight"
              type="primary"
              icon={<SearchOutlined />}
              onClick={onSearch}
            >
              Search
            </Button>
          </div>
        </div>
        <div className="contentFlightTracker">
          {data.flightStatuses && data.flightStatuses.length > 0 && (
            <div className="mainBoxFlightDetails">
              <h2 className="searchResults">Search Result</h2>
              <Results
                status={data.flightStatuses[0].status}
                flightData={data.flightStatuses[0]}
                airportInfo={data.appendix.airports}
              />
            </div>
          )}
          {data.flightStatuses && data.flightStatuses.length === 0 && (
            <div className="mainBoxFlightDetails">
              <h3 className="searchResults">Search Result</h3>
              <hr className="deviderLineSearch" />
              <h2>Sorry no info available!</h2>
            </div>
          )}
        </div>
        <TravelAdvice />
        <PopulatedCity />
        <VacantionHouses />
      </Container>
      <Footer />
    </Box>
  )
}

export default FormFlight
