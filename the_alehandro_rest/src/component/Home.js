import * as React from "react";

import Box from "@mui/material/Box";

import gbr1 from "./assets/logo.png";
import gbr2 from "./assets/garis.png";
import gbr3 from "./assets/ab.png";
import gbr4 from "./assets/kotak.png";
import gbr5 from "./assets/motif.png";
import Grid from "@mui/material/Grid";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";
import style from "./Home.module.css";
import Menu from "./Menu";
import Reservation from "./Reservation";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <div>
     
      <Box sx={{ width: 100 + "%", minHeight: 10+"%" }} key={1} id={`#section1`}>

      <Grid container spacing={0}>
      <Grid item xs={0.5}>
      <img src={gbr2} className={style.garis1} />
    
          </Grid>
          <Grid item xs={0.5}>
     
      <img src={gbr2} className={style.garis2} />
          </Grid>
        <Grid item xs={3}>
        <img src={gbr1} className={style.logo} />
        <Box className={style.box}>
            <Typography variant="h3">Tasty</ Typography>
            <Typography variant="h3">Luxury</ Typography>
            <Typography variant="h3">Fresh Ingredients</ Typography>
           
          
            <br/>
            <Button variant="contained" size="large">
        order now
        </Button>
          </Box>
          </Grid>
          <Grid item xs={3} sx={{ zIndex: "tooltip" }}>
          <img src={gbr3} className={style.makanan} />
       
          </Grid>
          <Grid item xs={2.5}>
          <img src={gbr4} className={style.kotak} />
       
          </Grid>
          <Grid item xs={2.5}>
          
          <img src={gbr5} className={style.motif} sx={{ zIndex: 'modal' }}/>
          </Grid>
        </Grid>
        {/* <Masonry columns={2} spacing={19}>
          <MasonryItem sx={{ width: 40 + "%" }}>
           
          </MasonryItem>
          <MasonryItem sx={{ zIndex: "tooltip" }}>
            <img src={gbr3} className={style.makanan} />
          </MasonryItem>
          <MasonryItem sx={{ width: 10 + "%" }}>
            <img src={gbr2} className={style.garis1} />
          </MasonryItem>
          <MasonryItem sx={{ width: 10 + "%" }}>
            <img src={gbr2} className={style.garis2} />
          </MasonryItem>

          <Box className={style.box}>
            <h1>Tasty</h1>
            <h1>Luxury</h1>
            <h1>Fresh Ingredients</h1>
          </Box>

          <MasonryItem sx={{ width: 90 + "%" }}>
            <img src={gbr4} className={style.kotak} />
          </MasonryItem>

          <MasonryItem sx={{ width: 80 + "%" }}>
            <img src={gbr5} className={style.motif} />
          </MasonryItem>
        </Masonry> */}
      </Box>


      <Box
      sx={{
        width: 100+"%",
       
      }}
      key={2} id={`#section2`}
    >
      <Reservation />
      
      </Box>

      <Box key={3} id={`#section3`}>
      <Menu />
      </Box>


    </div>
  );
}

export default Home;
