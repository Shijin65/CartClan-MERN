import { Grid } from '@mui/material'
import React from 'react'
import AddressCard from './AddressCard'
import AddressCardForm from './AddressCardForm'

function DeliveryAdderess() {
  return (
    <div>
      
        <Grid container spacing={4} >
            
            <Grid item xs={12} sm={5} className=''>
          <AddressCard/>
                
            </Grid>
            <Grid item xs={12} sm={7}>
                <AddressCardForm/>
            </Grid>
        </Grid>
    </div>
  )
}

export default DeliveryAdderess