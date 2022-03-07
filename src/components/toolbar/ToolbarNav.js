import React from 'react'
import CountryPicker from '../countryPicker/CountryPicker'
import ConnectModal from '../modalConnect/ConnectModal'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Link from '@mui/material/Link'
import Logo from '../../images/logo.png'
import { useStyles } from '../../style'

const ToolbarNav = (props) => {
  const classes = useStyles()

  const { handleDrawerOpen, open } = props

  return (
    <>
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
    </>
  )
}

export default ToolbarNav
