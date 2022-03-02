import * as React from 'react'
import './App.css'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import FormFlight from './components/formFlight/FormFlight'
import { useStyles, AppBar, DrawerHeader } from './style'
import DrawerMenu from './components/drawerMenu/DrawerMenu'
import ToolbarNav from './components/toolbar/ToolbarNav'

function App() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Box>
        <CssBaseline />
        <AppBar className={classes.appBar} position="fixed" open={open}>
          <ToolbarNav handleDrawerOpen={handleDrawerOpen} open={open} />
        </AppBar>
        {/* Drawer */}
        <DrawerMenu open={open} handleDrawerClose={handleDrawerClose} />
        {/* Drawer */}
        <Box className={classes.boxTitleH1} component="main">
          <DrawerHeader />
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
