import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
function CartItem() {
  const [count, setcount] = useState(1);
  return (
    <div>
      <div className="text-right ">
        <button className="btn btn-sm btn-circle btn-ghost mt-2 me-4">✕</button>
      </div>
      <div className="flex justify-evenly border-b-2 py-5 gap-2 ">
        <div className="md:h-[12rem] md:w-[12rem] w-[6rem]">
          <img
            src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg"
            alt=""
            srcset=""
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col justify-between text-start">
          <div className="">
            <div>
              <h1>Basic Tee</h1>
            </div>
            <div>
              <h1>Sienna | Large</h1>
            </div>
            <div className="flex space-x-4 gap-5 ">
              <p className=" text-white font-semibold ">120</p>
              <p className=" opacity-50 line-through font-semibold ">150</p>
              <p className=" text-green-600 tracking-tight ">20% off</p>
            </div>
            <div className="flex space-x-4 mt-5">
              <div
                onClick={() => {
                  if (count>0) {
                    setcount(count - 1);
                  }
                }}
              >
                <RemoveCircleIcon />
              </div>
              <div>{count}</div>
              <div onClick={() => setcount(count + 1)}>
                <AddCircleIcon />
              </div>
            </div>
          </div>
          <div>
            <h1>in/out stock</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
