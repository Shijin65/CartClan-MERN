import React from "react";

function SimilarCard({product}) {
  return (
    <div>
      {" "}
      <span>
        <div className="card card-compact w-56  bg-base-100  hover:shadow-xl shadow-sm p-5 h-full  cursor-pointer dark:shadow-white ms-2 hover:-translate-y-2 ">
          <figure className="h-60">
            <img
              src={product.image_url}
              alt="Shoes"
              className="object-cover h-60"
            />
          </figure>
          <div className="card-body flex-row justify-between ms-5">
            <h2 className="text-start ">{product.title}</h2>
            <div className="card-actions justify-end">
              <button className="btn glass text-success btn-sm">
                {product.discounted_price}$
              </button>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
}

export default SimilarCard;
