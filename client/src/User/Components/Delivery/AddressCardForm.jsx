import { Grid, TextField } from '@mui/material'
import React from 'react'

const AddressCardForm = () => {
    return (
        <div className='dark:text-white border rounded-s-md p-2 '>
            Delivery Form
            <form >
                <Grid container className=' dark:text-white pt-5' spacing={3}>

                <Grid item xs={12} sm={6} color={'white'} >
                    <TextField
                        fullWidth
                        name='firstname'
                        id='firstname'
                        label="First Name" 
                        sx={{   input: {color: 'white'},
                                label: { color: 'white'}}}
                        
                        
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name='lastname'
                        id='lastname'
                        border="white"
                        label="Last Name" 
                        sx={{   input: {color: 'white'},
                                label: { color: 'white'}}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        name='Address'
                        id='Address'
                        label="Address" 
                        rows={4}
                        sx={{   input: {color: 'white'},
                                label: { color: 'white'}}}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name='State'
                        id='State'
                        label="State" 
                        sx={{   input: {color: 'white'},
                                label: { color: 'white'}}}
                    />
                </Grid><Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name='City'
                        id='City'
                        label="City" 
                        sx={{   input: {color: 'white'},
                                borderColor:{color: 'white',},
                                label: { color: 'white'}}}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name='Zipcode'
                        id='Zipcode'
                        label="ZipCode" 
                        sx={{   input: {color: 'white'},
                                label: { color: 'white'}}}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        name='Number'
                        id='Number'
                        label="Number" 
                        sx={{   input: {color: 'white'},
                                label: { color: 'white'}}}
                       
                    />
                </Grid>
                <button className='btn btn-primary ms-auto mt-5' type='submit'>Deliver Here</button>


            </Grid>

            </form>
        </div>
    )
}

export default AddressCardForm
