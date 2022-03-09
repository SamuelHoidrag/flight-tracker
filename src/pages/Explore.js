import React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Layout from '../components/layout/Layout'

const Explore = () => {
  return (
    <Box>
      <CssBaseline />
      <Layout />
      <Box className="mainContainerCazari" component="main">
        <Typography className="titleCazare" variant="h4">
          Bun venit! Exploreaza cele mai frumoase locuri.
        </Typography>
      </Box>
    </Box>
  )
}

export default Explore
