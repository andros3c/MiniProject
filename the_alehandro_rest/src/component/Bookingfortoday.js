// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DatePicker from "@mui/lab/DatePicker";
// import TimePicker from "@mui/lab/TimePicker";
// import { IconButton } from "@mui/material";
// import { useState } from "react";
// const BookingForToday=()=>{
//     const [value, setValue] = React.useState(null);
//     return(<div>
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//         <DatePicker
//           label="Masukkan Tanggal Booking"
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} />}
//         />
//         <TimePicker
//           label="Basic example"
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} />}
//         />
//       </LocalizationProvider>
//       <TextField label="Nama Pemesan" />
//       <br />
//       <TextField id="outlined-number" label="Jumlah Orang" type="number" />
//       </div>
//       )


// }
// export default BookingForToday