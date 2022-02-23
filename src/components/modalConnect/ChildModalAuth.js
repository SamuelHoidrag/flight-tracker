import React from 'react'
import { useState } from 'react'
import validator from 'validator'
import TextField from '@mui/material/TextField'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 430,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  margin: 'auto',
}

const ChildModal = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Please enter your valid e-mail')
    }
  }

  return (
    <React.Fragment>
      <Button id="insertEmailAuth" onClick={handleOpen}>
        Continuă cu Emailul
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <p id="child-modal-title">Care este adresa ta de e-mail?</p>
          <Box id="containerSecondModalAuthInput">
            <TextField
              helperText={emailError}
              id="demo-helper-text-misaligned"
              label="Adresa de e-mail"
              onChange={(e) => validateEmail(e)}
            />
          </Box>
          <Button id="continueButtonModalTwo">Continuare</Button>
          <Button id="backModalOne" onClick={handleClose}>
            Înapoi
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  )
}

export default ChildModal
