import React from 'react'

// Material Ui
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Layout from '../components/layoutMain/Layout'

const Masini = () => {
  return (
    <Box>
      <CssBaseline />
      <Layout />
      <Box className="mainContainerCazari" component="main">
        <Typography className="titleCazare" variant="h4">
          Închiriază o mașină cu anulare gratuită. Caută acum!
        </Typography>
      </Box>
    </Box>
  )
}

export default Masini
