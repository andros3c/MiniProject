import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import foto from "./assets/bb.png";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { gql, useSubscription } from "@apollo/client";
import { Component, useState } from "react";

const Menu = () => {
  const sub_menu = gql`
  subscription MySubscription($kategori: String_comparison_exp = {}) {
    menu(where: {kategori: $kategori}) {
      foto
      harga
      id_menu
      kategori
      nama
      ready_status
      waktu_tunggu
    }
  }
  
  `;
  const[menu,setMenu]=useState();
  const { data, loading } = useSubscription(sub_menu,{variables: {kategori: {_eq:menu }},
    
  });
  console.log(data);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
      },
      secondary: {
        main: "#303244",
      },
    },
  });

  const [value, setValue] = React.useState(0);
  const handleChange = (e, newValue) => {
    if(e.target.name=="Appetizers"){
      setMenu("appetizers");
    } else if(e.target.name=="Soup"){
      setMenu("soup");
    }
    else if(e.target.name=="Main"){
      setMenu("main");
    }
    else if(e.target.name=="Dessert"){
      setMenu("dessert");
    }
    else if(e.target.name=="Beverage"){
      setMenu("beverage");
    }
    else{
      setMenu()
    }
    setValue(newValue);
  
  };

  const getId = (e) => {
    console.log(e.target.id);
  };

  const pecahurl=(foto)=>{
    const a = foto.split('/d/')[1];
    const b = a.split('/view')[0];
   
return("https://drive.google.com/uc?export=view&id="+b)

  }
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "secondary.main" }}>
        <br />
        <Box sx={{ width: "100%" }}>
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label="icon label tabs example"
            selectionFollowsFocus
            sx={{ bgcolor: "secondary.main" }}
            centered
          >
            <Tab label="All Foods and Drinks" name = "all" />
            <Tab label="Appetizers" name = "Appetizers"  />
            <Tab label="Soup" name = "Soup" />
            <Tab label="Main" name = "Main"  />
            <Tab label="Dessert" name = "Dessert"  />
            <Tab label="Beverage" name = "Beverage"  />
          </Tabs>
        </Box>
        <br />

        <Container maxWidth="lg">
          <Box>
            <Grid
              container
              sx={{
                textAlign: "center",
                gap: 3,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {loading ? (
          <p>Loading...</p>
        ) : data?.menu.map((v) => (
                <Grid
                  item
                  xs={3.5}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Card sx={{ width: 85 + "%" }}>
                    <CardContent>
                      <CardMedia
                        component="img"
                        height="194"
                        image={pecahurl(v.foto)}
                        alt={v.nama}
                      />
                      <Typography variant="h5" component="div">
                        {v.nama}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {v.kategori}
                      </Typography>
                      <Typography variant="h6">
                        Rp{bull}
                        {v.harga}
                        <Typography variant="subtitle1" component="h4">
                          Estimated Serving Time
                        </Typography>
                        <Typography variant="h6" component="h4">
                          {v.waktu_tunggu}
                        </Typography>
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        id={v.id_menu}
                        onClick={getId}
                        variant="contained"
                        color="secondary"
                        disabled
                      >
                        ORDER
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

    
    </ThemeProvider>
  );
};
export default Menu;
