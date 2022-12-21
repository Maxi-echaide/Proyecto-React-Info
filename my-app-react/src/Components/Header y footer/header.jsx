import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


  
  
/*
export const Header = () => {
    return (
        <Box sx={{ bottom: 0,
            width: '100%' }}>
        <AppBar position="relative"  sx={{ top: 'auto', bottom: 0 }}>
          <Toolbar variant="dense">
           
            <Typography variant="h6" color="inherit" component="div" pl={12}  sx={{ }}>
              Buscador de noticias
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      );
}
*/

export const Header = () => {
    return ( <Box position= 'absolute' mt={-10} ml={-45} sx={{width: '100%'  }}>
        <AppBar position="relative" sx={{ top: 'auto', width: '100%' }}>
          <Toolbar variant="regular">
            
            <Typography variant="h6" component="div" sx={{  }}>
              Buscador de noticias
            </Typography>
            
          </Toolbar>
        </AppBar>
      </Box>)
}
export default Header