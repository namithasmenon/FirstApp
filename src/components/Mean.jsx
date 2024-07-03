import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
const Mean = () => {
   
  return (
    <Card  style={{marginTop:'5%', width:'30%',marginLeft:'35%'}} sx={{ minWidth: 100 }}>
    <CardContent>
      <Typography sx={{ fontSize: 40}} style={{color:'black',bold:'bold'}}>
        MOVIES
      </Typography>
      <Typography sx={{fontSize:20}} style={{color:'violet'}}>
        Available movies:
      </Typography>
      <Typography variant="body2" style={{colour:'black'}}>
        1.SHREK
        <br />
        {'2.LITTLE MERMAID'}
        <br />
        {'3.HARRY POTTER'}
        <br />
        {'4.CINDERELLA'}
      </Typography>
    </CardContent>
  </Card>
  )
}

export default Mean