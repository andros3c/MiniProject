import * as React from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import { gql, useMutation } from "@apollo/client";
import { v4 as uuidv4 } from 'uuid';
const ADD_PENGUNJUNG = gql`
mutation MyMutation($id: uuid = "", $nama: name = "", $tgl_lahir: date = "", $username: String = "") {
  insert_pengunjung_one(object: {id: $id, nama: $nama, tgl_lahir: $tgl_lahir, username: $username}) {
    id
    nama
    tgl_lahir
    username
  }
}`
const ADD_BOOKING_DATA = gql`
mutation MyMutation($booking_id: uuid = "", $id_user: uuid = "", $jam_booking: time = "", $jlh_org: Int = 10, $konfirmasi: Boolean = false, $nomor_meja: Int = 10, $tgl_booking: date = "") {
  insert_booking_data_one(object: {booking_id: $booking_id, id_user: $id_user, jam_booking: $jam_booking, jlh_org: $jlh_org, konfirmasi: $konfirmasi, nomor_meja: $nomor_meja, tgl_booking: $tgl_booking}) {
    booking_id
    id_user
    jam_booking
    jlh_org
    konfirmasi
    nomor_meja
    tgl_booking
  }
}`




const PilihMeja = (props) => {
  const [addpengunjung, { data, loading, error }] = useMutation(ADD_PENGUNJUNG);
  const [addbooking, { data2, loading2, error2 }] = useMutation(ADD_BOOKING_DATA);
  const [tampil,setTampil]=useState(true)
  const [meja, setMeja] = useState([]);
  


  let mejact = 0;
  if(props.jlh_org % 3 == 0){
 
    mejact =Math.floor( props.jlh_org/3)
    
  }
  else{
    mejact =Math.floor ((props.jlh_org/3)+1)
  
  }
  


  const rubahicon = (e) => {
    
    if (meja.includes(e.target.name)) {
      const index = meja.indexOf(e.target.name);

      setMeja(meja.filter((item) => item !== e.target.name));
    }else if(meja.length < mejact){
    
      setMeja([...meja, e.target.name]);
    }
  };
  const submitt=()=>{
    
   
    
    let a = [props.nama]+[props.tgl_lahir]
    
   a = ( a.split(' ').join(''))
   a= a.split('-').join('');

   alert("your username is "+a+"\n"+"\n"+"Please Confirm your booking one hour before your time!!!")

   const { v4: uuidv4 } = require('uuid');
   const id = uuidv4(); 

 addpengunjung({
   variables:{
     "id":id,
     "nama": props.nama,
     "tgl_lahir": props.tgl_lahir,
     "username":a
   },
 });
console.log(id)
 const mejat = [...meja]
//  mejat.forEach((item)=>{
  console.log( props.jam_booking)
  console.log( props.jlh_org)
  console.log( mejat)
  console.log( props.tgl_booking)
  
  for(let i=0;i<mejat.length;i++){
 addbooking({
   variables:{
    " booking_id": uuidv4(), 
    "id_user": uuidv4(), 
    "jam_booking": props.jam_booking,
    " jlh_org": props.jlh_org,
    " konfirmasi": false, 
    "nomor_meja": mejat[i], 
    "tgl_booking": props.tgl_booking
   }
  
 })
}

}

  

  const getImage = (a) => {
    // console.log(meja)
    // console.log(a)
    // console.log(meja.includes(a))
    
    if (meja.includes(a)) {
      return "https://drive.google.com/uc?export=view&id=1jB8QmpTRpZmALzlJQyz3A6o5zNxf305z";
    } else {
      return "https://drive.google.com/uc?export=view&id=1QKXURCquZJ0nIz32u3u7AuX5h5HUomdH";
    }
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={
              "https://drive.google.com/uc?export=view&id=1FL1Nt24hEhRbES82dwVku3Oznzr8YcgI"
            }
          />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={
              "https://drive.google.com/uc?export=view&id=1FL1Nt24hEhRbES82dwVku3Oznzr8YcgI"
            }
          />
        </Grid>

        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <table>
              <tr>
                <img src={getImage("1")} name="1" onClick={rubahicon} />
              </tr>
              <tr>1</tr>
            </table>
          </IconButton>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton onClick={rubahicon}>
            <table>
              <tr>
                <img src={getImage("2")} name="2" onClick={rubahicon} />
              </tr>
              <tr>2</tr>
            </table>
          </IconButton>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <table>
              <tr>
                <img src={getImage("3")} name="3" onClick={rubahicon} />
              </tr>
              <tr>3</tr>
            </table>
          </IconButton>
        </Grid>

        <Grid item xs={7} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <table>
              <tr>
                <img src={getImage("4")} name="4" onClick={rubahicon} />
              </tr>
              <tr>4</tr>
            </table>
          </IconButton>
        </Grid>

        <Grid item xs={3} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <table>
              <tr>
                <img src={getImage("5")} name="5" onClick={rubahicon} />
              </tr>
              <tr>5</tr>
            </table>
          </IconButton>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <table>
              <tr>
                <img src={getImage("6")} name="6" onClick={rubahicon} />
              </tr>
              <tr>6</tr>
            </table>
          </IconButton>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <table>
              <tr>
                <img src={getImage("7")} name="7" onClick={rubahicon} />
              </tr>
              <tr>7</tr>
            </table>
          </IconButton>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <table>
              <tr>
                <img src={getImage("8")} name="8" onClick={rubahicon} />
              </tr>
              <tr>8</tr>
            </table>
          </IconButton>
        </Grid>
        <Grid item xs={7} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <table>
              <tr>
                <img src={getImage("9")} name="9" onClick={rubahicon} />
              </tr>
              <tr>9</tr>
            </table>
          </IconButton>
        </Grid>
        <Grid item xs={3} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <table>
              <tr>
                <img src={getImage("10")} name="10" onClick={rubahicon} />
              </tr>
              <tr>10</tr>
            </table>
          </IconButton>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <table>
              <tr>
                <img src={getImage("11")} name="11" onClick={rubahicon} />
              </tr>
              <tr>11</tr>
            </table>
          </IconButton>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <table>
              <tr>
                <img src={getImage("12")} name="12" onClick={rubahicon} />
              </tr>
              <tr>12</tr>
            </table>
          </IconButton>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <table>
              <tr>
                <img src={getImage("13")} name="13" onClick={rubahicon} />
              </tr>
              <tr>13</tr>
            </table>
          </IconButton>
        </Grid>
        <Grid item xs={7} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <table>
              <tr>
                <img src={getImage("14")} name="14" onClick={rubahicon} />
              </tr>
              <tr>14</tr>
            </table>
          </IconButton>
        </Grid>
        <Grid item xs={3} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <table>
              <tr>
                <img src={getImage("15")} name="15" onClick={rubahicon} />
              </tr>
              <tr>15</tr>
            </table>
          </IconButton>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <table>
              <tr>
                <img src={getImage("16")} name="16" onClick={rubahicon} />
              </tr>
              <tr>16</tr>
            </table>
          </IconButton>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <table>
              <tr>
                <img src={getImage("17")} name="17" onClick={rubahicon} />
              </tr>
              <tr>17</tr>
            </table>
          </IconButton>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton>
            <table>
              <tr>
                <img src={getImage("18")} name="18" onClick={rubahicon} />
              </tr>
              <tr>18</tr>
            </table>
          </IconButton>
        </Grid>
      </Grid>
      <Grid container sx={{ gap: 3 }}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={
              "https://drive.google.com/uc?export=view&id=1oItjKLJqaV_3iR1C8k35BGWMnq1VOUBm"
            }
          />
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        {tampil?
          <Button variant="contained" color="warning"  disabled={mejact==meja.length?false:true} onClick={()=>setTampil(false)}>
            Book Table
          </Button>:<div>
           <h5> Data Confirmation</h5>
           <h3> are all of these correct ?</h3>
            <table>
              <tr>
              <td>Customer Name </td>
              <td>{props.nama}</td>
              </tr>
              <tr>
              <td>Birthday </td>
              <td>{props.tgl_lahir}</td>
              </tr>
              <tr>
              <td>Selected Hour</td>
              <td>{props.jam_booking}</td>
              </tr>
              <tr>
              <td>People Count </td>
              <td> {props.jlh_org}</td>
              </tr>
              <tr>
              <td>Table Number </td>
              <td>{meja}</td>
              </tr>
              <br/>
             </table>
             <Button variant="contained" onClick={submitt} >
                  The data is true
                </Button>
           
           
          
           
           
           
           
          </div>
}
      
        </Grid>
      </Grid>

      <br />
      <br />
    </div>
  );
};
export default PilihMeja;
