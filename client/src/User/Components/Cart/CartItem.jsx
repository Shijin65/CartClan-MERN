import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
function CartItem() {
  const [count, setcount] = useState(1);
  return (
    <div className="mt-5 me-5 border-gray-500 border-t-2">
      <div className="text-right ">
        <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
      </div>
      <div className="flex border-b-2 border-gray-500 pb-5 gap-5 ps-5  ">
        <div className="flex flex-col items-center ">
          {/* card image */}
        <div className="md:h-[12rem] md:w-[12rem] h-[6rem] w-auto">
          <img
            src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg"
            alt=""
            srcset=""
            className="h-full w-full"
          />
          </div>
          {/* add remove buttons */}
          <div className="flex space-x-4 mt-5">
              <div
                onClick={() => {
                  if (count>0) {
                    setcount(count - 1);
                  }
                }}
              >
                {count==0?<RemoveCircleIcon color="disabled" className="disabled"/>:<RemoveCircleIcon className="cursor-pointer"/>}
              </div>
              <div>{count}</div>
              <div onClick={() => setcount(count + 1)}>
                <AddCircleIcon className="cursor-pointer"/>
              </div>
            </div>
        </div>
        <div className="flex flex-col justify-between text-start ">
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
