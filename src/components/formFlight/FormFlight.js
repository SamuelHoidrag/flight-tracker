import * as React from 'react'
import { Container } from '@mui/material'
import { Select, Button, InputNumber, DatePicker, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'
import Results from '../results/Results'

const { Option } = Select

const FormFlight = () => {
  const [carrier, setCarrier] = useState('')
  const [date, setDate] = useState('')
  const [flightNum, setFlightNum] = useState('')
  const [data, setData] = useState({})

  const onChange = (value) => {
    setCarrier(value)
  }

  const onChangeDate = (dateString) => {
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
          appKey: '0a52b5dcdfd800e78d224c515c935074',
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
    </Container>
  )
}

export default FormFlight
