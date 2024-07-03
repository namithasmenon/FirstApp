import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  axios  from 'axios';

const View = () => {
   /* const rows=[{name:'Namitha',email:'namithamenon2004@gmail.com',phone:8590974944},
                 {name:'Deepta',email:'deeptasv2004@gmail.com',phone:9446015554},
                 {name:'Parvathy',email:'parvathysalin2004@gmail.com',phone:9847566864},
                 {name:'Riya',email:'riyamariamathews2004@gmail.com',phone:9447418020},
                 {name:'Nandana',email:'nandanarajesh2004@gmail.com',phone:9495915071}
                ]*/
                const [rows,setRows]=useState([])
                useEffect(()=>{
                  axios.get('https://dummyjson.com/users').then((res)=>{
                     // console.log(res.data.users)
                     setRows(res.data.users)
                  })
                },[])
  return (
    <div>
        <TableContainer style={{marginTop:'5%'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell align="right">EMAIL</TableCell>
            <TableCell align="right">PHONE</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
         {rows.map((row) => (
            <TableRow
              key={row.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
         ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default View
