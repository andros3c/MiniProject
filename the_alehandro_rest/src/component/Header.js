import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Header=()=>{
    const theme = createTheme({
        palette: {
          primary: {
            main: "#FFFFFF"
          },
          secondary: {
            main: 	"#000000"
            
          },
         
        },
      });
    return(<ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1,boxShadow: 0  }} color="transparent"   >
      <AppBar sx={{boxShadow: 0  }}  color="transparent" position="static">
        <Toolbar sx={{mx:"auto"}}>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr:10 }}
          >
               <Link to={`/#section1`} >
            <Typography variant="subtitle2" component="div" sx={{mx:"auto" }} >
            Home
          </Typography>
          </Link>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr:10 }}
          >
              <Link to={`/#section2`} >
            <Typography variant="subtitle2" component="div" sx={{mx:"auto" }}>
           Reservation
          </Typography>
          </Link>
          
          </IconButton>
         
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr:10 }}
          >
           <Link to={`/#section3`} >
            <Typography variant="subtitle2" component="div" sx={{mx:"auto" }}>
              
           Menu
          
          </Typography>
          </Link>
          
          </IconButton>
         
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr:10 }}
          >
            
            <Typography variant="subtitle2" component="div" sx={{mx:"auto" }}>
          Gallery
          </Typography>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr:10 }}
          >
            <Typography variant="subtitle2" component="div" sx={{mx:"auto" }}>
         About
          </Typography>
          </IconButton>
         
        
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>);
}
export default Header;