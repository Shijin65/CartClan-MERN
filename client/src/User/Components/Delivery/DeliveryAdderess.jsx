import { Grid } from '@mui/material'
import React from 'react'
import AddressCard from './AddressCard'
import AddressCardForm from './AddressCardForm'

function DeliveryAdderess() {
  return (
    <div>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={5} className='border rounded-md h-[36rem] overflow-y-scroll'>
            <AddressCard/>
                <button className='btn btn-primary  '>Deliver Here</button>
            </Grid>
            <Grid item xs={12} sm={7}>
                <AddressCardForm/>
            </Grid>
        </Grid>
    </div>
  )
}

export default DeliveryAdderess