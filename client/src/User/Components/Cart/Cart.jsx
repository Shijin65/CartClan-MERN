import React from "react";
import CartItem from "./CartItem";
import { Grid } from "@mui/material";

function Cart() {
  return (
    <div className="md:m-10 md:p-10 p-5  md:border-2 rounded-md">
      
        <h1 className="text-start text-2xl sm:text-5xl font-bold sm:mb-10">shoping cart</h1>
        <Grid container >
          <Grid item md={7} sm={12} xs={12}>
            <CartItem />
            <CartItem />
          </Grid>
          <Grid item md={5}  sm={12} xs={12}>
            <h1>order summary</h1>
          </Grid>
        </Grid>
      </div>
    
  );
}

export default Cart;
