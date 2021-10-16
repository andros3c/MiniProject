import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { gql, useLazyQuery,useMutation } from "@apollo/client";
const Book_conf = () => {
  const query_cek_user = gql`
  query MyQuery($username: String_comparison_exp = {}) {
    pengunjung(where: { username: $username }) {
      nama
    }
  }
  `;
  const query_cek_booking = gql`
  query MyQuery($username: String_comparison_exp = {}) {
    booking_data(where: {username: $username}) {
      booking_id
      id_user
      jam_booking
      jlh_org
      konfirmasi
      nomor_meja
      tgl_booking
      username
    }
  }
  `;
  const query_update = gql`
  mutation MyMutation($username: String_comparison_exp = {}) {
    update_booking_data(where: {username: $username}, _set: {konfirmasi: true}) {
      returning {
        konfirmasi
      }
    }
  }`

  const [loginData, { loading, error, data }] = useLazyQuery( query_cek_booking);
  const [bookData, { data:data2, loading: proses }] =
    useLazyQuery(query_cek_user);
    const [update, { data3, loading: test }] =
    useMutation(query_update);
   
  const [user, setUser] = useState();
  const [datas, setDatas] = useState();
  const cek_username = (e) => {
    setUser(e.target.value);
  };

  const cekLog = () => {
    loginData({ variables: { username: { _eq: user } } });
    bookData({ variables: { username: { _eq: user } } });
    setUser("");
    console.log(data)
    console.log(data2)


  };
  const update_data = (nilai) => {
    let a = "" + nilai;
    setUser(a)
  
  };
  return (
    <div>
      <TextField
        id="outlined-search"
        label=" Check your Booking username"
        type="text"
        value={user}
        onChange={cek_username}
      />
      {/* <input type="text" value={datas} onChange={ambil_data}/> */}
     
      <Button variant="contained" size="large" onClick={cekLog}>
        Check
      </Button>
      <br/>
      <br/>

      <table>
      {
        proses?(
          <p>Wait a minute...</p>
        ) :<>{(data2?.pengunjung.map((a)=><tr><td>Your Name</td><td>{a.nama}</td></tr>))}</>
      }
      {loading ? (
        <></>
      ) : (
        <>
          {(data?.booking_data.map((b) =>
          <>
       
       <tr> <td>Your Username</td><td>{b.username}</td></tr>
       <tr><td>Booking Date</td><td>{b.tgl_booking}</td></tr>
       <tr><td>Booking Hour</td><td>{b.jam_booking}</td></tr>
       <tr> <td>Table Number</td><td>{b.nomor_meja}</td></tr>
      <tr> <Button variant="contained" size="small" onClick={()=>update({variables:{ username: { _eq: b.username } }})}>
      Confirm your book
      </Button></tr><tr>
      <Button variant="contained"  color="error" size="small" onClick={update({variables:{ username: { _eq: user } }})}>
      Cancel your book
      </Button></tr>
        </>
         ))}
        </>
      )}
      </table>
    </div>
  );
};
export default Book_conf;

// const log = gql`
// query MyQuery($username: String_comparison_exp = {}) {
//   pengunjung(where: {username: $username}) {
//     id
//   }
// }
// `;

//   const [user, setUser] = useState();
//   const cek_username = (e) => {
//     setUser(e.target.value);
//     console.log(user)

//   };
//   const [loginData, { loading,error,data }] = useLazyQuery(log);

//   const cek_login = () => {
//     loginData({ variables: {"username": {"_eq": user}} });
//   console.log(data)

//   };
//   return(
//       <div>
//       <TextField id="outlined-search" label=" Check your Booking username" type="text" onChange={cek_username} />

//    <Button variant="contained" size="large" onClick={cek_login}>
//      Check
//    </Button>
//  </div>
//   )
