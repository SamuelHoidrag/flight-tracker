import * as React from 'react'
import './App.css'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import FormFlight from './components/formFlight/FormFlight'
import Layout from './components/layoutMain/Layout'
import { useStyles } from './style'

function App() {
  const classes = useStyles()
  return (
    <>
      <Box>
        <CssBaseline />
        <Layout />
        <Box className={classes.boxTitleH1} component="main">
          <Typography className={classes.mainTitle} variant="h4">
            Bun venit! Caută un zbor flexibil pentru următoarea ta călătorie.
          </Typography>
          <FormFlight />
        </Box>
      </Box>
    </>
  )
}

export default App
