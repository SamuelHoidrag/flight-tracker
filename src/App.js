import * as React from 'react'
import './App.css'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '../src/images/logo.png'
import CountryPicker from './components/countryPicker/CountryPicker'
import ConnectModal from './components/modalConnect/ConnectModal'
import Link from '@mui/material/Link'
import FormFlight from './components/formFlight/FormFlight'
import { useStyles, AppBar, DrawerHeader } from './style'
import DrawerMenu from './components/drawerMenu/DrawerMenu'

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
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar className={classes.appBar} position="fixed" open={open}>
          <Toolbar>
            <IconButton
              className={classes.iconSliderMenu}
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.logoAlign} component="div">
              <img className="momondoLogo" src={Logo} alt="Logo Momondo" />
            </Typography>
            <Link className={classes.linkTrips} href="#" underline="none">
              {'Trips'}
            </Link>
            <ConnectModal />
            <CountryPicker />
          </Toolbar>
        </AppBar>
        <DrawerMenu open={open} handleDrawerClose={handleDrawerClose} />
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
