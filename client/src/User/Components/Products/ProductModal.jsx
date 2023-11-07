import React from 'react'

const ProductModal = ({Product}) => {
console.log(Product)
  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
          <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg flex justify-center sm:col-span-4 lg:col-span-5">
            <img
              src={Product.image_url}
              alt="img"
              className="object-cover object-center"
            />
          </div>
          <div className="sm:col-span-8 lg:col-span-7">
        
            <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
              </div>
            <h2 className="text-2xl font-bold  sm:pr-12">{Product.title}</h2>

            <section aria-labelledby="information-heading" className="mt-2">
              <h3 id="information-heading" className="sr-only">
                Product information
              </h3>

              <p className="text-2xl ">{Product.price}</p>

              {/* Reviews */}
              <div className="mt-6">
                <h4 className="sr-only">Reviews</h4>
                <div className="flex items-center">
                  <div className="flex items-center">
                   
                  </div>
                  <p className="sr-only">{Product.rating} out of 5 stars</p>
                  <a
                    href="/product"
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {Product.reviewCount} reviews
                  </a>
                </div>
              </div>
            </section>

            <section aria-labelledby="options-heading" className="mt-10">
              <h3 id="options-heading" className="sr-only">
                Product options
              </h3>

              <form>
                {/* Colors */}
                

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium ">Size</h4>
                    <a
                      href="/product"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  
                </div>

                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default ProductModal