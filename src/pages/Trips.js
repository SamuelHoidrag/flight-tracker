import React from 'react'
// Material Ui
import { Container, Box } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
//Components
import Layout from '../components/layoutMain/Layout'
import TravelAdvice from '../components/travelAdvice/TravelAdvice'
import VacantionHouses from '../components/vacantionHouses/VacantionHouses'
import Footer from '../components/footer/Footer'
import PopulatedCity from '../components/populatedCity/PopulatedCity'

const Trips = () => {
  return (
    <Box className="mainContainer">
      <Container>
        <CssBaseline />
        <Layout />
        <Box className="mainContainerCazari" component="main">
          <Typography className="titleCazare" variant="h4">
            Trips - planifică-ți întreaga călătorie într-un singur loc
          </Typography>
          <TravelAdvice />
          <PopulatedCity />
          <VacantionHouses />
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}

export default Trips
