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
import {
  gql,
  useQuery,
  useLazyQuery,
  useMutation,
  useSubscription,
} from "@apollo/client";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PilihMeja from "./PilihMeja";

const Reservation = () => {
  const loginquery = gql`
    query MyQuery($user_name: String_comparison_exp = {}) {
      booking_data(where: { user_name: $user_name }) {
        booking_id
        id_user
        jam_booking
        jlh_org
        konfirmasi
        nomor_meja
        tgl_booking
        user_name
      }
    }
  `;

  const subs = gql`
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

const [nilai, setNilai] = useState({
  nama: "",
  jlh_org: "",
  tgl_lahir: "",
  jlh_org: "",
  jam_booking: "",
});

const {
  data2,
  loading2,
  error: gagal,
} = useSubscription(subs, {
  variables: {"tgl_booking": {"_eq": nilai.jam_booking}},
});
  
const kirim = [{"aku":"mereka"}]
  const[err,setErr] =  useState()
  const chgnilai = (e) => {
    const namaRegex = /^[a-zA-Z ]*$/;
    if(e.target.name==="nama"){
      if (namaRegex.test(e.target.value)){
        setErr({[e.target.name]: "" });
      } else {
        setErr({ [e.target.name]: "Nama Tidak boleh berupa angka" });
      }
      }
      
      
    setNilai({ ...nilai, [e.target.name]: e.target.value });
   
  };
  const [user, setUser] = useState();
  const cek_username = (e) => {
    setUser(e.target.value);
  };
  const [login, { data, loading, error }] = useLazyQuery(loginquery);

  const cek_login = () => {
    login({ variables: { user_name: { _eq: user } } });
    setTimeout(() => {
      if (data?.bookdata) {
        alert("Sukses");
      } else {
        alert("Gagal");
      }
    }, 1000);

    console.log(data);
  };

  const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const [value, setValue] = useState();
  
  const [stat, setStat] = useState({
    booktday: false,
    schbook: false,
    bookconf: false,
  });
  const [pilih, setPilih] = useState({ isi: false });
  const muncul = (e) => {
    if (e.target.name == "Booking for Today") {
      setStat({ booktday: !stat.booktday, schbook: false, bookconf: false });
      setPilih({ isi: false });
    } else if (e.target.name == "Booking Confirmation") {
      setStat({ booktday: false, bookconf: false, bookconf: !stat.bookconf });
      setPilih({ isi: false });
    } else if (e.target.name == "Booking by Date") {
      setStat({ booktday: false, schbook: !stat.schbook, bookconf: false });
      setPilih({ isi: false });
    }
  };

  const pilih_meja = () => {
    setPilih({ isi: !pilih.isi });
    setStat({ booktday: false, schbook: false, bookconf: false });
  };

  return (
    <div className="Reservation">
      <Box
        sx={{
          width: 100 + "%",
          minHeight: 500,
        }}
      >
        <Grid container>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={
                "https://drive.google.com/uc?export=view&id=1Xoc82LGw-sc_fF0hH5MWrkHvr2LCDz3f"
              }
            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
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
              name="Booking for Today"
              variant="contained"
              size="large"
              onClick={muncul}
            >
              Booking for Today
            </Button>
            <Button
              name="Booking by Date"
              variant="contained"
              size="large"
              onClick={muncul}
            >
              Booking by Date
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
            {stat.booktday ? (
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
                    <td>
                      <TextField
                        id="outlined-number"
                        label="Jumlah Orang"
                        value={nilai.jlh_org}
                        type="number"
                        name="jlh_org"
                        onChange={chgnilai}
                      />
                    </td>
                  </tr>
                  <tr>
                    {" "}
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
                          <MenuItem value={"10:00:00"}>10:00 AM</MenuItem>
                          <MenuItem value={"11:35:00"}>11:35 AM</MenuItem>
                          <MenuItem value={"13:10:00"}>13:10 PM</MenuItem>
                          <MenuItem value={"14:45:00"}>14:45 PM</MenuItem>
                          <MenuItem value={"16:20:00"}>16:20 PM</MenuItem>
                          <MenuItem value={"17:55:00"}>17:55 PM</MenuItem>
                          <MenuItem value={"19:30:00"}>19:30 PM</MenuItem>
                          <MenuItem value={"21:05:00"}>21:05 PM</MenuItem>
                        </Select>
                      </FormControl>
                    </td>
                  </tr>
                  <Button variant="contained" onClick={pilih_meja}>
                    Next
                  </Button>
                </table>
              </div>
            ) : (
              <div></div>
            )}
            {stat.bookconf ? (
              <div>
                <input type="text" onChange={cek_username} />
                <Button variant="contained" onClick={cek_login}>
                  Check your Booking username
                </Button>
              </div>
            ) : (
              <div></div>
            )}
            {stat.schbook ? (
              <p>
                <div>
                  <table>
                    <tr>
                      <td>
                        {" "}
                        <TextField label="Nama Pemesan" />
                      </td>
                      <td>
                        <TextField
                          id="outlined-number"
                          label="Jumlah Orang"
                          type="number"
                        />
                      </td>
                    </tr>
                    <tr>
                      {" "}
                      <td>
                        <TextField
                          hintText="Email"
                          label="Email"
                          type="email"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            label="Basic example"
                            value={value}
                            onChange={(newValue) => {
                              setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
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
                            value={age}
                            label="Age"
                            onChange={chgnilai}
                          >
                            <MenuItem value={"10:00:00"}>10:00 AM</MenuItem>
                            <MenuItem value={"11:35:00"}>11:35 AM</MenuItem>
                            <MenuItem value={"13:10:00"}>13:10 PM</MenuItem>
                            <MenuItem value={"14:45:00"}>14:45 PM</MenuItem>
                            <MenuItem value={"16:20:00"}>16:20 PM</MenuItem>
                            <MenuItem value={"17:55:00"}>17:55 PM</MenuItem>
                            <MenuItem value={"19:30:00"}>19:30 PM</MenuItem>
                            <MenuItem value={"00:21:05"}>21:05 PM</MenuItem>
                          </Select>
                        </FormControl>
                      </td>
                    </tr>
                    <Button variant="contained" onClick={pilih_meja}>
                      Next
                    </Button>
                  </table>
                </div>{" "}
              </p>
            ) : (
              <div></div>
            )}
            {pilih.isi ? <PilihMeja {...nilai}/> : <div></div>}
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Reservation;
