import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
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
import PersonPinTwoToneIcon from '@mui/icons-material/PersonPinTwoTone'
import { useStyles, Drawer, DrawerHeader } from '../../style'

const DrawerMenu = (props) => {
  const classes = useStyles()

  const theme = useTheme()

  const { handleDrawerClose, open } = props

  return (
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
      <List className={classes.itemBoxDrawer}>
        <ListItem button>
          <ListItemIcon color="primary">
            {<HolidayVillageSharpIcon className={classes.iconDrawer} />}
          </ListItemIcon>
          <ListItemText primary={'Trips'} />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default DrawerMenu
