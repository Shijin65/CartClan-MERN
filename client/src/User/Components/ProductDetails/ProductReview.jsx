import React from 'react'
import Grid from '@mui/material/Grid';
import { Box, Rating, Typography } from '@mui/material';


function ProductReview() {
  return (
    <div>
        <Grid container className='p-10'>
                <Grid item xs={5} >
                    <div className='text-start font-bold text-2xl '>Customer reviews</div>

                    <label htmlFor="rating">Good</label>
                    <Rating name="read-only" value={5} readOnly />
                </Grid>
                <Grid item xs={7} >
                <div className='text-start'> review section</div>
                   
                </Grid>
        </Grid>
    </div>
  )
}

export default ProductReview