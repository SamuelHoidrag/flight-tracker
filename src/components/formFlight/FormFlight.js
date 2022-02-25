import * as React from 'react'
import { Container } from '@mui/material'
import { Select, Button, InputNumber, DatePicker, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
// import { useState } from 'react'

const { Option } = Select

const FormFlight = () => {
  // const [data, setData] = useState({})

  const onSearch = () => {
    fetch(
      `https://cors-anyware.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/EY/233/dep/2019/12/01`,
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
        console.log(finalData)
        // setConfirmed(finalData)
      })
  }

  function onFlightNumChange(value) {
    console.log('changed', value)
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
          >
            <Option value="EY">Emirates</Option>
            <Option value="2">Eithid</Option>
            <Option value="3">Qatar</Option>
          </Select>
        </div>
        <div>
          <InputNumber placeholder="ex 245" onChange={onFlightNumChange} />
        </div>
        <div>
          <Space direction="vertical">
            <DatePicker />
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
      <div className="contentFlightTracker"></div>
    </Container>
  )
}

export default FormFlight
