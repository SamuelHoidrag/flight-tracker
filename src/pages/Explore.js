import React from 'react'
// Material Ui
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import { Container, Box } from '@mui/material'
//Componets
import Layout from '../components/layoutMain/Layout'
import Footer from '../components/footer/Footer'
import TravelAdvice from '../components/travelAdvice/TravelAdvice'
import VacantionHouses from '../components/vacantionHouses/VacantionHouses'
import PopulatedCity from '../components/populatedCity/PopulatedCity'

const Explore = () => {
  return (
    <Box className="mainContainer">
      <Container>
        <CssBaseline />
        <Layout />
        <Box className="mainContainerCazari" component="main">
          <Typography className="titleCazare" variant="h4">
            Bun venit! Exploreaza cele mai frumoase locuri.
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

export default Explore
