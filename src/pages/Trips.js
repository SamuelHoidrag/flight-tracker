import React from 'react'

// Material Ui
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Layout from '../components/layoutMain/Layout'

const Trips = () => {
  return (
    <Box>
      <CssBaseline />
      <Layout />
      <Box className="mainContainerCazari" component="main">
        <Typography className="titleCazare" variant="h4">
          Trips - planifică-ți întreaga călătorie într-un singur loc
        </Typography>
      </Box>
    </Box>
  )
}

export default Trips
