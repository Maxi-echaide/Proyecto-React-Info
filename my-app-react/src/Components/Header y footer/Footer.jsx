/*import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
*/
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';





 const Footer = () => {
    return (
        <Box  position= 'fixed' sx={{bottom: 0,
        width: '100%'}} >
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
          <Toolbar variant="regular">
           
            <Typography variant="h6" color="inherit" component="div" pl={58} sx={{}}  >
                   Copyright 2022
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      );
}



/* const Footer = () => {
    return (
        <React.Fragment>
        
      
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
          <Toolbar variant="regular">
            
            
            
            <Typography variant="h6" color="inherit" component="div"  sx={{ marginLeft:"400px"}}  >
                   Copyright 2022
            </Typography>
           
          </Toolbar>
        </AppBar>
      </React.Fragment>

        )
    }
*/

export default Footer