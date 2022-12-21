
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



export const Header = () => {
    return (
        <Box sx={{ flexGrow: 0 }}>
        <AppBar position="relative"  sx={{ maxWidth: "408px" }}>
          <Toolbar variant="dense">
           
            <Typography variant="h6" color="inherit" component="div"   sx={{ }}>
              Buscador de noticias
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      );  
}



