import { Avatar, Grid, Rating } from '@mui/material'
import React from 'react'

function ProductReviewCard() {

    return(
        <div className="px-10 py-5 text-start border-b-2">
            <Grid containe>
                {/* avathar&name */}
                <Grid>
                    <div className='flex items-center gap-3'>
                        <div><Avatar alt="Shijin Puthur" src="/static/images/avatar/2.jpg" /></div>
                        <div className='flex flex-col text-lg font-semibold'>
                            <div>Shijin Puthur</div>
                            <div><Rating name="read-only" value={5} readOnly /></div>
                        </div>
                    </div>
                
                </Grid>
                <Grid className='mt-5'>
                    <p className='md:text-lg '> This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights</p>
                </Grid>
            </Grid>
        </div>
    )
    
}
export default ProductReviewCard