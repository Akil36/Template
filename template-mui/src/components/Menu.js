import React from 'react'
import  Box  from '@mui/system/Box'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { AirplanemodeActive, AirplaneTicket, Explore, FactCheck, Help, ListOutlined, Place } from '@mui/icons-material'

const Menu = () => {
  return (
    <Box mt={2} flex={1} sx={{display:{xs:'none',sm:'block'}}}>
      <Box position='fixed'>
      <List>
      <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AirplanemodeActive/>
              </ListItemIcon>
              <ListItemText primary='Plan Your Trip' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListOutlined/>
              </ListItemIcon>
              <ListItemText primary='Things To Do' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Explore/>
              </ListItemIcon>
              <ListItemText primary='Explore' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FactCheck/>
              </ListItemIcon>
              <ListItemText primary='Facts' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Place/>
              </ListItemIcon>
              <ListItemText primary='Places' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AirplaneTicket/>
              </ListItemIcon>
              <ListItemText primary='Tickets' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Help/>
              </ListItemIcon>
              <ListItemText primary='Help' />
            </ListItemButton>
          </ListItem>
          </List>
    </Box>
    </Box>
  )
}

export default Menu