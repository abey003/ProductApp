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
    <div style={{ marginTop:'3%' }}>
        <TextField
            required
            label="Product Name"
           variant="outlined" />
    </div>
    <div style={{ marginTop:'3%' }}>
        <TextField
            required
            label="Description"
           variant="outlined" />
    </div>
    <div style={{ marginTop:'3%' }}>
        <TextField
            required
            label="Price"
           variant="outlined" />
    </div>
    <div style={{ marginTop:'3%' }}>
        <TextField
            required
            label="Category"
           variant="outlined" />
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