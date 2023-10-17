import React from 'react'

const ProductCard = ({Product}) => {
  return (
    <div>
              <div className="card card-compact w-56  bg-base-100  hover:shadow-xl shadow-lg hover:-translate-y-2  cursor-pointer p-5 ">
         <figure className="h-60">
            <img
              src={Product.image_url}
              alt="Shoes"
              className="h-60 object-cover"
            />
          </figure>
          <div className="flex-col pt-4 ">
             <h2 className="text-start font-bold">{Product.brand}</h2>
            <h3 className='text-start '>{Product.title}</h3>
            <div className="flex gap-2 ">
              <div className="text-black font-semibold">${Product.discounted_price}</div>
              <div className="text-black opacity-60 line-through">${Product.price}</div>
              <div className="text-green-600 font-semibold">{Product.discount_percentage}%</div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductCard