import { RadioGroup } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";
const size =[{x:{inStock:true}},{}]
const ProductCard = ({ Product }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div>
      <div
        className="card card-compact w-56  bg-base-100  hover:shadow-xl shadow-md  cursor-pointer p-5 dark:shadow-white ms-2 hover:-translate-y-2 dark:text-white"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        <figure className="h-60">
          <img
            src={Product.image_url}
            alt="Shoes"
            className="h-60 object-cover"
          />
        </figure>
        <div className="flex-col pt-4 ">
          <h2 className=" dark:text-white text-start font-bold">
            {Product.brand}
          </h2>
          <h3 className="text-start ">{Product.title}</h3>
          <div className="flex gap-2 ">
            <div className=" font-semibold">${Product.discounted_price}</div>
            <div className=" opacity-60 line-through">${Product.price}</div>
            <div className="text-green-600 font-semibold">
              {Product.discount_percentage}%
            </div>
          </div>
        </div>
      </div>


      {/* quick review */}
      
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img
                src={Product.image_url}
                alt="img"
                className="object-cover object-center"
              />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
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
                      {/* {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  // className={classNames(
                                  //   Product.rating > rating ? '' : 'text-gray-200',
                                  //   'h-5 w-5 flex-shrink-0'
                                  // )}
                                  aria-hidden="true"
                                /> */}
                      {/* ))} */}
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
    </div>
  );
};

export default ProductCard;
