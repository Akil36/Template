import { AppBar, Badge, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar'
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/system';
import {  NotificationsActive } from '@mui/icons-material';
const StyledToolBar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
    
})

const Navbar = () => {
    
  return (
    <AppBar position='sticky'>
        <StyledToolBar>
            
            <Typography variant='h3'>Tours</Typography>
            <Box sx={{display:"flex",alignItems:'center',gap:'20px'}}>
            <Badge badgeContent={4} color="secondary">
               <MailIcon color="action" />
           </Badge>
           <Badge badgeContent={3} color='error'>
           <NotificationsActive color="action"/>
           </Badge>
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
            </Box>
        </StyledToolBar>
    </AppBar>
  )
}

export default Navbar