import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TimePicker from "@mui/lab/TimePicker";
import { IconButton } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import { gql, useSubscription, useLazyQuery } from "@apollo/client";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PilihMeja from "./PilihMeja";
import Book_conf from "./Book_conf";

const Reservation = () => {
  

 
//   const a = new Date();
//   const b = a.getFullYear();
//   const c = a.getMonth() + 1;
//   const d = a.getDate()-1;

//   const date = b + "-" + c + "-" + d;
  
  


  const [stat, setStat] = useState({
    booktable: false,
    
    bookconf: false,
  });
  const [pilih, setPilih] = useState({ isi: false });
  const [err, setErr] = useState();

  const muncul = (e) => {
    if (e.target.name == "Booking Table") {
      setStat({ booktable: !stat.booktday, bookconf: false });
      setPilih({ isi: false });
    } 
    else if (e.target.name == "Booking Confirmation") {
      setStat({ booktable: false,  bookconf: !stat.bookconf });
      setPilih({ isi: false });
    }
    //  else if (e.target.name == "Booking by Date") {
    //   setStat({ booktday: false, schbook: !stat.schbook, bookconf: false });
    //   setPilih({ isi: false });
    // }
  };
  const [nilai, setNilai] = useState({
    nama: "",
    jlh_org: "",
    tgl_lahir: "",
  
    tgl_booking:"",
    jam_booking: "",
    // email:"",
  });

  const chgnilai = (e) => {
    const namaRegex = /^[a-zA-Z ]*$/;
    if (e.target.name === "nama") {
      if (namaRegex.test(e.target.value)) {
        setErr("");
      } else {
        setErr( "Nama Tidak boleh berupa angka" );
      }
    }

    setNilai({ ...nilai, [e.target.name]: e.target.value });
  };

  const realtm = gql`
  subscription MySubscription($tgl_booking: date_comparison_exp = {}) {
    booking_data(where: {tgl_booking: $tgl_booking}) {
      booking_id
      id_user
      jam_booking
      jlh_org
      konfirmasi
      nomor_meja
      tgl_booking
    }
  }
  
  `;

  const { data, loading } = useSubscription(realtm,{variables: {"tgl_booking":{"_eq":nilai.tgl_booking}} ,
    
  });

  const pilih_meja = () => {
    
    setPilih({ isi: !pilih.isi });
    setStat({ booktday: false, schbook: false, bookconf: false });
  };
   
   

  //   // const kirim = [{ aku: "mereka" }];
  

    const [age, setAge] = React.useState("");

    // const handleChange = (event) => {
    //   setAge(event.target.value);
    // };
const cekjam=(jam)=>{


  
    for(let a=0;a<data?.booking_data.length;a++){
      console.log(jam)
       console.log(data?.booking_data[a].jam_booking)
          
            }
    
}
    const [value, setValue] = useState();

  return (
    <div>
      <Box
        sx={{
          width: 100 + "%",
          minHeight: 500,
        }}
      >
        <div className="Reservation">
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={
                  "https://drive.google.com/uc?export=view&id=1Xoc82LGw-sc_fF0hH5MWrkHvr2LCDz3f"
                }
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  width: 50 + "%",
                  minHeight: 200,
                }}
              >
                <p>
                  Based on government regulations and to reduce the spread of
                  covid 19, you only have 90 minutes at the restaurant
                </p>

                <p>One table can only fit 2-3 diners</p>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center", gap: 4 }}
            >
              <Button
                name="Booking Table"
                variant="contained"
                size="large"
                onClick={muncul}
              >
                Booking for Today
              </Button>
              
              <Button
                name="Booking Confirmation"
                variant="contained"
                size="large"
                onClick={muncul}
              >
                Booking Confirmation
              </Button>
            </Grid>
          </Grid>

          <br />
          <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
            <div>
              {stat.booktable ? (
                <div>
                  <table>
                    <tr>
                      <td>
                        {" "}
                        <TextField
                          label="Nama Pemesan"
                          name="nama"
                          value={nilai.nama}
                          onChange={chgnilai}
                        />
                      </td>
                      
                      {/* <td>
                        <TextField
                          hintText="Email"
                          label="Email"
                          type="email"
                        />
                      </td> */}
                      <td>
                        <TextField
                          name="tgl_lahir"
                          id="date"
                          label="Birthday"
                          value={nilai.tgl_lahir}
                          type="date"
                          onChange={chgnilai}
                          sx={{ width: 220 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </td>
                      
                     
                    </tr>
                    <tr>
                      {" "}
                     
                      <td>
                        {" "}
                        <TextField
                          name="tgl_booking"
                          id="date"
                          label="Booking Date"
                          value={nilai.tgl_booking}
                          type="date"
                          onChange={chgnilai}
                          sx={{ width: 220 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                       
                      </td>
                      <td>
                        {" "}
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Choose Time
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={nilai.jam_booking}
                            name="jam_booking"
                            label="Age"
                            onChange={chgnilai}
                          >
                            <MenuItem value={"10:00:00"} disabled={cekjam("10:00:00")}>10:00 AM</MenuItem>
                            <MenuItem value={"11:35:00"} disabled={cekjam("11:35:00")}>11:35 AM</MenuItem>
                            <MenuItem value={"13:10:00"} disabled={cekjam("13:10:00")}>13:10 PM</MenuItem>
                            <MenuItem value={"14:45:00"} disabled={cekjam("14:45:00")}>14:45 PM</MenuItem>
                            <MenuItem value={"16:20:00"} disabled={cekjam("16:20:00")}>16:20 PM</MenuItem>
                            <MenuItem value={"17:55:00"} disabled={cekjam("17:55:00")}>17:55 PM</MenuItem>
                            <MenuItem value={"19:30:00"} disabled={cekjam("19:30:00")}>19:30 PM</MenuItem>
                            <MenuItem value={"21:05:00"} disabled={cekjam("21:05:00")}>21:05 PM</MenuItem>
                          </Select>
                        </FormControl>
                      </td>
                      <td>
                        <TextField
                          id="outlined-number"
                          label="Count of People"
                          value={nilai.jlh_org}
                          type="number"
                          name="jlh_org"
                          onChange={chgnilai}
                        />
                      </td>
                    </tr>
                    <p style={{color:"#FF0000"}}>{err}</p>
                    <Button variant="contained" onClick={pilih_meja}>
                      Next
                    </Button>
                  </table>
                </div>
              ) : (
                <div></div>
              )}
                          {stat.bookconf ? (
             <div><Book_conf/></div>
            ) : (
              <div></div>
            )}
            
             {pilih.isi ? <PilihMeja {...nilai} /> : <div></div>}
            </div>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default Reservation;

