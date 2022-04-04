import React, { useState, useEffect } from 'react'
// Images
import Logo from '../../images/logo.png'
// Style
import { useStyles } from '../../style'
// Material Ui
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import LogoutIcon from '@mui/icons-material/Logout'
// Components
import CountryPicker from '../countryPicker/CountryPicker'
import ConnectModal from '../modalConnect/ConnectModal'
// Firebase
import { auth } from '../configFirebase/firebase'
import firebase from '../configFirebase/firebase'

const ToolbarNav = (props) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  }, [])

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
        </Typography>{' '}
        {user ? (
          <div className="loginInfo">
            <h1 className="nameLogin">
              Bună, <span></span>
              {user.displayName}
            </h1>
            <Button
              onClick={() => auth.signOut()}
              className={classes.connectModal}
            >
              <LogoutIcon className={classes.buttonConnect} />
              Sign out
            </Button>
          </div>
        ) : (
          <ConnectModal />
        )}
        <CountryPicker />
      </Toolbar>
    </>
  )
}

export default ToolbarNav
