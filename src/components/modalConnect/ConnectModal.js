import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import PersonPinTwoToneIcon from '@mui/icons-material/PersonPinTwoTone'
import Logo from '../../images/logo.png'
import LogoAuth from '../../images/magiclinkloginBg.svg'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import DeleteIcon from '@mui/icons-material/Delete'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import AppleIcon from '@mui/icons-material/Apple'
import { Link } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ChildModal from './ChildModalAuth'
import { useStyles } from '../../style'

const ConnectModal = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleOpen} className={classes.connectModal}>
        <PersonPinTwoToneIcon className={classes.buttonConnect} />
        Conectează-te
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box id="containerModalStepOne">
          <button onClick={handleClose} className="closeModalOne">
            <CloseIcon />
          </button>
          <img className="momondoLogo" src={Logo} alt="Logo Momondo" />
          <img className="momondoAuth" src={LogoAuth} alt="Connect" />
          <h7 className="modalOneStep">
            Inițiază sesiune sau creează-ți un cont
          </h7>
          <p className="modalTextStepOne">
            Urmărește prețurile, organizează-ți planurile de călătorie și
            accesează oferte destinate doar membrilor cu contul tău momondo.
          </p>
          <ChildModal />
          <Divider>
            <Chip label="sau" />
          </Divider>
          <div className="authGroup">
            <Button
              className={classes.buttonBooking}
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Booking.com
            </Button>
            <Button
              className={classes.buttonFacebook}
              variant="outlined"
              startIcon={<FacebookIcon />}
            >
              Facebook
            </Button>
            <Button
              className={classes.buttonGoogle}
              variant="outlined"
              startIcon={<GoogleIcon />}
            >
              Google
            </Button>
            <Button
              className={classes.buttonApple}
              variant="outlined"
              startIcon={<AppleIcon />}
            >
              Apple
            </Button>
          </div>
          <p className="registration">
            Prin înscriere, ești de acord cu{' '}
            <Link href="#">termenii noștri de utilizare </Link>
            și cu <Link href="#">politica de confidențialitate.</Link>
          </p>
        </Box>
      </Modal>
    </div>
  )
}

export default ConnectModal
