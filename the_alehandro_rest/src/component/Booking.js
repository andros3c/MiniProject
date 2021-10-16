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
const Booking = (pilihan) => {
    const [nilai, setNilai] = useState({
        nama: "",
        jlh_org: "",
        tgl_lahir: "",
        jlh_org: "",
        jam_booking: "",
      });
    const a = new Date();
  const b = a.getFullYear();
  const c = a.getMonth() + 1;
  const d = a.getDate();

  const date = b + "-" + c + "-" + d;
console.log(pilihan)
 

  console.log(date);
    const [value, setValue] = useState();
    const [age, setAge] = React.useState("");
    const [err, setErr] = useState();
    const chgnilai = (e) => {
    //   const namaRegex = /^[a-zA-Z ]*$/;
    //   if (e.target.name === "nama") {
    //     if (namaRegex.test(e.target.value)) {
    //       setErr({ [e.target.name]: "" });
    //     } else {
    //       setErr({ [e.target.name]: "Nama Tidak boleh berupa angka" });
    //     }
    //   }
  
    //   setNilai({ ...nilai, [e.target.name]: e.target.value });
    };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
      <div>
        <p>
          <div>
            <table>
              <tr>
                <td>
                  {" "}
                  <TextField label="Nama Pemesan" />
                </td>
              
                {" "}
                <td>
                  <TextField hintText="Email" label="Email" type="email" />
                </td>
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
                <td>
                  {" "}
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Tanggal Booking"
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
                <td>
                  <TextField
                    id="outlined-number"
                    label="Jumlah Orang"
                    type="number"
                  />
                </td>
              </tr>
             
            </table>
          </div>{" "}
        </p>

        <Button variant="contained" onClick={pilih_meja}>
                Next
              </Button>

        {pilihan.isi ? <PilihMeja {...nilai} /> : <div></div>}
      </div>
    </Box>
  );
};

export default Booking;
