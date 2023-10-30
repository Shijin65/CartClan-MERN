import React from 'react'

const ProductCard = ({Product}) => {
  return (
    <div>
              <div className="card card-compact w-56  bg-base-100  hover:shadow-xl shadow-md  cursor-pointer p-5 dark:shadow-white ms-2 hover:-translate-y-2">
         <figure className="h-60">
            <img
              src={Product.image_url}
              alt="Shoes"
              className="h-60 object-cover"
            />
          </figure>
          <div className="flex-col pt-4 ">
             <h2 className=" dark:text-white text-start font-bold">{Product.brand}</h2>
            <h3 className='text-start '>{Product.title}</h3>
            <div className="flex gap-2 ">
              <div className=" font-semibold">${Product.discounted_price}</div>
              <div className=" opacity-60 line-through">${Product.price}</div>
              <div className="text-green-600 font-semibold">{Product.discount_percentage}%</div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductCard