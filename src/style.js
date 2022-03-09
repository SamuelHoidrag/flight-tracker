import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'

const useStyles = makeStyles({
  mainTitle: {
    textAlign: 'center',
    paddingTop: '200px',
    fontFamily: 'Roboto',
    fontWeight: '700 !important',
    color: '#ffffff',
  },
  iconDrawer: {
    color: '#ffffff',
    marginLeft: '10px',
  },
  drawerHeader: {
    backgroundColor: '#21033A',
  },
  listItemIcon: {
    marginRight: '5px',
  },
  iconDivider: {
    backgroundColor: '#ffffff94',
  },
  backgroundBodyColor: {
    backgroundColor: '#21033A',
  },
  itemBoxDrawer: {
    '&:hover': {
      backgroundColor: '#ffffff60',
      transition: 'all 0.1s ease-out',
    },
  },
  boxTitleH1: {
    flexGrow: 1,
    padding: '3px',
    backgroundColor: '#21033A',
    color: '#ffffff',
  },
  linkTrips: {
    fontFamily: 'Roboto!important',
    marginRight: '20px !important',
    fontSize: '15px !important',
    color: '#ffffff !important',
    fontWeight: '500 !important',
  },
  logoAlign: {
    flexGrow: '1',
    alignSelf: 'auto',
  },
  iconSliderMenu: {
    marginRight: '36px !important',
  },
  appBar: {
    backgroundColor: '#21033A !important',
    borderBottom: '1px solid #402754 !important',
    display: 'flex !important',
  },
  connectModal: {
    color: '#ffffff !important',
    border: '1px solid  #ffffff !important',
    outline: 'none !important',
    fontSize: '12px !important',
    fontFamily: 'Roboto !important ',
    padding: '8px 25px !important',
    '&:hover': {
      backgroundColor: '#ffffff20 !important',
      transition: 'all 0.1s ease-out !important',
    },
  },
  buttonConnect: {
    color: '#ffffff',
    marginRight: '15px ',
  },
  buttonBooking: {
    color: 'black !important',
    fontSize: '11px ! important',
    fontWeight: '600 !important',
  },
  buttonFacebook: {
    fontSize: '11px !important',
    fontWeight: '600 !important',
  },
  buttonGoogle: {
    color: '#E82C19 !important',
    fontSize: '11px !important',
    fontWeight: '600 !important',
  },
  buttonApple: {
    color: 'grey !important',
    fontSize: '11px !important',
    fontWeight: '600 !important',
  },
  linkColorDrawer: {
    color: '#ffffff !important',
    fontSize: '16px !important',
    fontWeight: '400 !important',
  },
})

const drawerWidth = 210

const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: '#21033A',
  color: '#ffffff',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  borderRight: '1px solid #402754',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: '#21033A',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
    borderRight: '1px solid #402754',
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: '#ffffff',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    color: '#ffffff',
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

export { useStyles, openedMixin, closedMixin, DrawerHeader, AppBar, Drawer }
