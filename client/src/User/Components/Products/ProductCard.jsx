import React from 'react'

const ProductCard = () => {
  return (
    <div>
              <div className="card card-compact w-56  bg-base-100  hover:shadow-xl shadow-lg hover:-translate-y-2  cursor-pointer p-5">
         <figure className="h-60">
            <img
              src="https://img.freepik.com/free-photo/basic-green-shirt-men-rsquo-s-fashion-apparel-studio-shoot_53876-101197.jpg?size=626&ext=jpg&ga=GA1.1.1015071250.1697119014&semt=sph"
              alt="Shoes"
              className="h-60"
            />
          </figure>
          <div className="flex-col ">
             <h2 className="text-start font-bold">Brand</h2>
            <h3 className='text-start '>product name</h3>
            <div className="flex gap-2 ">
              <div className="text-black font-semibold">$25</div>
              <div className="text-black opacity-60 line-through">$250</div>
              <div className="text-green-600 font-semibold">90%</div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductCard