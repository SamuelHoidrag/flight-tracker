import React from 'react'
// Material Ui
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import { Container, Box } from '@mui/material'
//Components
import Layout from '../components/layoutMain/Layout'
import TravelAdvice from '../components/travelAdvice/TravelAdvice'
import VacantionHouses from '../components/vacantionHouses/VacantionHouses'
import Footer from '../components/footer/Footer'
import PopulatedCity from '../components/populatedCity/PopulatedCity'

const Cazari = () => {
  return (
    <Box className="mainContainer">
      <Container>
        <CssBaseline />
        <Layout />
        <Box className="mainContainerCazari" component="main">
          <Typography className="titleCazare" variant="h4">
            Rezervă o cazare cu anulare gratuită. Caută acum!
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

export default Cazari
