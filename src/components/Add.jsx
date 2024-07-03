import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Add = ({person}) => {
    const[page,setPage]=useState('LOGIN')
    const[count,setCount]=useState(0)
    const[form,setForm]=useState({
      name:person.name,
      email:person.email,
      password:person.password,
      phone:person.phone
    })
    function valueAdd(){
        /*setCount(count+1)*/
        console.log(form)
    }
    function valueCap(e){
      /*console.log(e)*/
      setForm({...form,[e.target.name]:e.target.value})      
    }
  return (
    <Box
      style={{marginTop:50}}  
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <h1> Welcome to {page} page</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          name='name'
          value={form.name}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="password"
          type="password"
          autoComplete="current-password"
          name='password'
          value={form.password}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-read-only-input"
          label="Email"
          name='email'
          value={form.email}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-number-input"
          label="phone"
          type="number"
          name='phone'
          value={form.phone }
          onChange={valueCap}
        />
        </div>
        <div>
            <Button variant='contained' onClick={valueAdd}>register</Button>
            <br></br>
            <small>button is clicked {count}</small>
        </div>
        </Box>
  )
}

export default Add