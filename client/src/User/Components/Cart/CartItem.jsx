import React from 'react'

function CartItem() {
  return (
    <div>
        
        <div className='flex justify-evenly border-b-2 py-5 gap-2 JU'>
          <div className='md:h-[12rem] md:w-[12rem] w-[6rem]'><img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg" alt="" srcset="" className='h-full w-full'/></div>
          <div className='flex-col justify-between text-start'>
            <div>
              <div><h1>Basic Tee</h1></div>
              <div><h1>Sienna | Large</h1></div>
              <div className="flex space-x-4 gap-5 ">
                  <p className=" text-white font-semibold ">120</p>
                  <p className=" opacity-50 line-through font-semibold ">
                    150
                  </p>
                  <p className=" text-green-600 tracking-tight ">20% off</p>
                </div>
            </div>
            <div>
              <div><h1>in/out stock</h1></div>
            </div>
          </div>
          <div><h1>1</h1></div>
          <div><h1>X</h1></div>
        </div>
    </div>
  )
}

export default CartItem