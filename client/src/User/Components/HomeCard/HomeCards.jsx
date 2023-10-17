import React from "react";
import { ProductData } from "../../../Data/DummyData";

const HomeCards = () => {
  return (
    <div className="ps-10">
      
      <h3 className=" text-lg text-start ms-10 flex items-center ">
          New Collection
        </h3>
      <div className="flex gap-5 mt-5  overflow-x-scroll no-scrollbar py-5">
        {/* cards */}
        
        {ProductData.Dresses.map((item) => (
          <span>
            <div className="card card-compact w-56  bg-base-100  hover:shadow-xl shadow-sm p-5 h-full  cursor-pointer dark:shadow-white ms-2 ">
              <figure className="h-60">
                <img
                  src={item.image_url}
                  alt="Shoes"
                  className="object-cover h-60"
                />
              </figure>
              <div className="card-body flex-row justify-between ms-5">
                <h2 className="text-start ">{item.title}</h2>
                <div className="card-actions justify-end">
                  <button className="btn glass text-success btn-sm">{item.discounted_price}$</button>
                </div>
              </div>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
