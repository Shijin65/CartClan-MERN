import React from "react";
import CartItem from "./CartItem";
import { Grid } from "@mui/material";
const cartsummery = [
  { title: "Subtotal", amount: "99.00" },
  { title: "Shipping estimate", amount: "5.00" },
  { title: "Tax estimate", amount: "8.32" },
];
function Cart() {
  return (
    <div className="md:m-10 md:p-10 p-5  md:border-2 rounded-md">
      <h1 className="text-start text-2xl sm:text-5xl font-bold sm:mb-10">
        shoping cart
      </h1>
      <Grid container>
        <Grid item md={7} sm={12} xs={12}>
          <CartItem />
          <CartItem />
        </Grid>
        <Grid item md={5} sm={12} xs={12}>
          <div className="w-full bg-slate-300 rounded-lg mx-5 text-black p-5 md:p-10 max-w-[500px]">
            <div>
              <h1 className="text-lg text-start font-bold py-5">
                Order Summary
              </h1>
            </div>
            <div className="border-b-2 text-gray-500">
            {cartsummery.map((item) => (
              <div className="flex justify-between  py-2  ">
                <h1>{item.title}</h1>
                <h1>${item.amount}</h1>
              </div>
            ))}</div>
            <div className="flex justify-between  py-2 border-black font-semibold mt-2 mb-5">
              <h1>Order total</h1>
              <h1>$112.32</h1>
            </div>
            <div>
              <button className="btn btn-primary w-full lowercase">Checkout</button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cart;
