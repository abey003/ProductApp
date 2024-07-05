import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const HomePage = () => {

  const [products,setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      // console.log(res.data)
      setProducts(res.data)
    })
  })

  return (
    <div>
      <div>
        <Typography
          variant='h4'
          style={{ marginTop:'3%', fontWeight:'bold' }}
        >
            HOME PAGE
        </Typography>
    </div>
    <Grid container spacing={2} justifyContent="center">
            {products.map((product) => (
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: '100%', margin: '5% auto', textAlign: 'left' }}>
                        <CardContent>
                            <CardMedia
                              component="img"
                              height="194"
                              image= {product.image}
                              alt="Paella dish"
                            />
                            <Typography sx={{ mb: 1.5 }}>
                                <b>Title:</b> {product.title} Rs
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                                <b>Price:</b> {product.price}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                                <b>Category:</b> {product.category}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </div>
  )
}

export default HomePage