import * as React from 'react'
import './App.css'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket'
import LocalHotelIcon from '@mui/icons-material/LocalHotel'
import DirectionsCarTwoToneIcon from '@mui/icons-material/DirectionsCarTwoTone'
import PublicSharpIcon from '@mui/icons-material/PublicSharp'
import HolidayVillageSharpIcon from '@mui/icons-material/HolidayVillageSharp'
import Logo from '../src/images/logo.png'
import PersonPinTwoToneIcon from '@mui/icons-material/PersonPinTwoTone'
import CountryPicker from './components/countryPicker/CountryPicker'
import ConnectModal from './components/modalConnect/ConnectModal'
import Link from '@mui/material/Link'
import FormFlight from './components/formFlight/FormFlight'
import { useStyles, AppBar, Drawer, DrawerHeader } from './style'

function App() {
  const classes = useStyles()
  const theme = useTheme()
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
        <Drawer variant="permanent" open={open}>
          <DrawerHeader className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon className={classes.iconDrawer} />
              )}
            </IconButton>
          </DrawerHeader>
          <List className={classes.itemBoxDrawer}>
            <ListItem button>
              <ListItemIcon>
                {<PersonPinTwoToneIcon className={classes.iconDrawer} />}
              </ListItemIcon>
              <ListItemText primary={'Conectare'} />
            </ListItem>
          </List>
          <Divider variant="middle" className={classes.iconDivider} />
          <List className={classes.itemBoxDrawer}>
            <ListItem button>
              <ListItemIcon>
                {<AirplaneTicketIcon className={classes.iconDrawer} />}
              </ListItemIcon>
              <ListItemText primary={'Bilete avion'} />
            </ListItem>
          </List>
          <List className={classes.itemBoxDrawer}>
            <ListItem button>
              <ListItemIcon>
                {<LocalHotelIcon className={classes.iconDrawer} />}
              </ListItemIcon>
              <ListItemText primary={'Cazări'} />
            </ListItem>
          </List>
          <List className={classes.itemBoxDrawer}>
            <ListItem button>
              <ListItemIcon>
                <DirectionsCarTwoToneIcon className={classes.iconDrawer} />
              </ListItemIcon>
              <ListItemText primary={'Mașini'} />
            </ListItem>
          </List>
          <Divider variant="middle" className={classes.iconDivider} />
          <List className={classes.itemBoxDrawer}>
            <ListItem button>
              <ListItemIcon>
                {<PublicSharpIcon className={classes.iconDrawer} />}
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItem>
          </List>
          <Divider variant="middle" className={classes.iconDivider} />
          <Divider variant="middle" className={classes.iconDivider} />
          <List className={classes.itemBoxDrawer}>
            <ListItem button>
              <ListItemIcon color="primary">
                {<HolidayVillageSharpIcon className={classes.iconDrawer} />}
              </ListItemIcon>
              <ListItemText primary={'Trips'} />
            </ListItem>
          </List>
        </Drawer>
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
