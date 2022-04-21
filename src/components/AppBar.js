import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import image from '../assets/ist.png'

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor: 'white'}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <img src={image} width={40.52} height={50} style={{marginLeft: 20 }}/>
          </IconButton>
          <Typography variant="h6" color="black" component="div">
            Donasi
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
