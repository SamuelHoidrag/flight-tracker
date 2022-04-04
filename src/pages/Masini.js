import React from 'react'
// Material Ui
import { Container, Box } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
//Components
import Layout from '../components/layoutMain/Layout'
import Footer from '../components/footer/Footer'
import TravelAdvice from '../components/travelAdvice/TravelAdvice'
import PopulatedCity from '../components/populatedCity/PopulatedCity'
import VacantionHouses from '../components/vacantionHouses/VacantionHouses'

const Masini = () => {
  return (
    <Box className="mainContainer">
      <Container>
        <CssBaseline />
        <Layout />
        <Box className="mainContainerCazari" component="main">
          <Typography className="titleCazare" variant="h4">
            Închiriază o mașină cu anulare gratuită. Caută acum!
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

export default Masini
