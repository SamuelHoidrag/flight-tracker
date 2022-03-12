import React from 'react'

// Material Ui
import { Box } from '@mui/system'

// Components
import { useStyles, AppBar } from '../../style'
import ToolbarNav from '../toolbar/ToolbarNav'
import DrawerMenu from '../drawerMenu/DrawerMenu'

const Layout = () => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Box>
      <AppBar className={classes.appBar} position="fixed" open={open}>
        <ToolbarNav handleDrawerOpen={handleDrawerOpen} open={open} />
      </AppBar>
      <DrawerMenu open={open} handleDrawerClose={handleDrawerClose} />
    </Box>
  )
}

export default Layout
