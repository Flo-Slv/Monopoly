import React from 'react';
import backgroundImage from '../../components/auth/authBackground.jpg';
import { Stack, Button, Typography } from '@mui/material';


export default function FormNewUser() {

  return (
    <Stack component='form' direction= 'column' spacing={2} sx={{
      backgroundColor: '#252d4a',
      padding: '30px',
      borderRadius: '10px',
      width: '250px',
      height: '420px',
      boxShadow: '10px 10px 42px 0px rgba(0, 0, 0, 0.95)',
      position: 'absolute',
      top: '100px'
      }}
       >
    
      <Typography variant='p' align='center'sx={{ color:'white'}}>Create an account</Typography>
      <input type='text' placeholder='First Name' style={{ height: '40px', borderRadius: '5px', fontSize: '18px'}}/>
      <input type='text' placeholder='Last Name' style={{ height: '40px', borderRadius: '5px', fontSize: '18px'}}/>
      <input type='text' placeholder='Nickname' style={{ height: '40px', borderRadius: '5px', fontSize: '18px'}}/>
      <input type='email' placeholder='Email' style={{ height: '40px', borderRadius: '5px', fontSize: '18px'}}/>
      <input type='password' placeholder='Password' style={{ height: '40px', borderRadius: '5px', fontSize: '18px'}}/>
      <Button variant='contained' size="small" color='primary' sx={{ fontSize: '18px'}}>Submit</Button>
      <Typography align='center' sx={{ paddingTop: '15px'}}><a href='#' style={{ color: 'white', fontSize: '13px'}}>Already registered ?</a></Typography> 

    </Stack>
  )
}
