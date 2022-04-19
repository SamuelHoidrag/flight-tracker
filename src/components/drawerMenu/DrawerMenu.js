import * as React from 'react'
import { Link } from 'react-router-dom'
// Material UI
import List from '@mui/material/List'
import PublicSharpIcon from '@mui/icons-material/PublicSharp'
import DirectionsCarTwoToneIcon from '@mui/icons-material/DirectionsCarTwoTone'
import { useTheme } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket'
import LocalHotelIcon from '@mui/icons-material/LocalHotel'
import HolidayVillageSharpIcon from '@mui/icons-material/HolidayVillageSharp'
//Components
import { useStyles, Drawer, DrawerHeader } from '../../style'

const DrawerMenu = (props) => {
  const classes = useStyles()

  const theme = useTheme()

  const { handleDrawerClose, open } = props

  return (
    <div>
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
        <Link className={classes.linkColorDrawer} to="/">
          <List className={classes.itemBoxDrawer}>
            <ListItem button>
              <ListItemIcon>
                {<AirplaneTicketIcon className={classes.iconDrawer} />}
              </ListItemIcon>
              {'Bilete avion'}
            </ListItem>
          </List>
        </Link>
        <Link className={classes.linkColorDrawer} to="/cazari">
          <List className={classes.itemBoxDrawer}>
            <ListItem button>
              <ListItemIcon>
                {<LocalHotelIcon className={classes.iconDrawer} />}
              </ListItemIcon>
              {'Cazări'}
            </ListItem>
          </List>
        </Link>
        <Link className={classes.linkColorDrawer} to="/masini">
          <List className={classes.itemBoxDrawer}>
            <ListItem button>
              <ListItemIcon>
                <DirectionsCarTwoToneIcon className={classes.iconDrawer} />
              </ListItemIcon>
              {'Mașini'}
            </ListItem>
          </List>
        </Link>
        <Divider variant="middle" className={classes.iconDivider} />
        <Link className={classes.linkColorDrawer} to="/explore">
          <List className={classes.itemBoxDrawer}>
            <ListItem button>
              <ListItemIcon>
                {<PublicSharpIcon className={classes.iconDrawer} />}
              </ListItemIcon>
              {'Explore'}
            </ListItem>
          </List>
        </Link>
        <Divider variant="middle" className={classes.iconDivider} />
        <Link className={classes.linkColorDrawer} to="/trips">
          <List className={classes.itemBoxDrawer}>
            <ListItem button>
              <ListItemIcon color="primary">
                {<HolidayVillageSharpIcon className={classes.iconDrawer} />}
              </ListItemIcon>
              {'Trips'}
            </ListItem>
          </List>
        </Link>
      </Drawer>
    </div>
  )
}

export default DrawerMenu
