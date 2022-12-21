import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';







 const Footer = () => {
    return (
        <Box  position= 'fixed' sx={{bottom: 0,
        width: '100%'}} >
        <AppBar position="sticky"  sx={{flexGrow: 0, width: '408px', marginBottom:"0px",  bottom:0, textAlign:"center", justifyContent:"center" }}>
          <Toolbar variant="regular">
           
            <Typography variant="h6" color="inherit" component="div" pl={14} sx={{textAlign:"center"}}  >
                   Copyright 2022
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      );
        
    
              
    
        
}


export default Footer