import React from "react";

const ProductCard = ({ Product }) => {
  return (
    <div>
      <div
        className="card card-compact w-56  bg-base-100  hover:shadow-xl shadow-md  cursor-pointer p-5 dark:shadow-white ms-2 hover:-translate-y-2"
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
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">{Product.title}</h3>
          
          <span><div className="grid md:grid-flow-col  bg-cyan-500 gap-0 ">

            <div className="bg-red-600 basis-1/2">
              <img
                src={Product.image_url}
                alt="Shoes"
                className="max-w-96"
              />
            </div>
            <div className="bg-black basis-1/2">
              details
            </div>
            
          </div></span>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProductCard;
