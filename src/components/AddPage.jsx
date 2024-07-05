import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';

const AddPage = () => {
  return (
    <Box
      component="form"
      sx={{
        textAlign: 'center',
      }}
      noValidate
      autoComplete="off"
    >
    <div style={{ marginTop:'3%' }}>
        <Typography
        variant='h4'
        style={{ fontWeight:'bold' }}
        >
          ADD PRODUCT  
        </Typography>
    </div>
    <div style={{ marginTop:'2%' }}>
        <TextField
            required
            label="Product Name"
            variant="standard" 
            style={{ width:'20%'  }}
           />
    </div>
    <div style={{ marginTop:'2%' }}>
        <TextField
            required
            label="Description"
            multiline
            variant='standard'
            style={{ width:'20%'  }}
         />
    </div>
    <div style={{ marginTop:'2%' }}>
        <TextField
            required
            label="Price"
            variant='standard'
            style={{ width:'20%'  }}
         />
    </div>
    <div style={{ marginTop:'2%' }}>
        <TextField
            required
            label="Category"
            variant='standard'
            style={{ width:'20%'  }}
         />
    </div>
    <div style={{ marginTop:'3%' }}>
    <Button
     variant="contained"
    >
        ADD
    </Button>
    </div>
    </Box>
  )
}

export default AddPage