import { Grid, TextField } from '@mui/material'
import React from 'react'

const AddressCardForm = () => {
    return (
        <div className='dark:text-white border rounded-s-md'>
            Delivery Form
            <form >
                <Grid container className=' dark:text-white pt-5' spacing={3}>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name='firstname'
                        id='firstname'
                        // placeholder='FirstName'
                        label="First Name" 
                        
                         
                        
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name='lastname'
                        id='lastname'
                        
                        label="Last Name" 
                        color="" 
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name='Address'
                        id='Address'
                        label="Address" 
                        rows={4}
                        color="" 
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name='State'
                        id='State'
                        label="State" 
                        color="" 
                    />
                </Grid><Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name='City'
                        id='City'
                        label="City" 
                        color="" 
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name='Zipcode'
                        id='Zipcode'
                        label="ZipCode" 
                        color="" 
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name='Number'
                        id='Number'
                        label="Number" 
                        color="" 
                       
                    />
                </Grid>
                <button className='btn btn-primary ms-auto mt-5' type='submit'>Deliver Here</button>


            </Grid>

            </form>
        </div>
    )
}

export default AddressCardForm
