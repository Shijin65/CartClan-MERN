import React, { useState } from "react";
import { ProductData } from "../../../Data/DummyData";
import ProductModal from "../Products/ProductModal";

const HomeCards = () => {
  const [data, setdata] = useState("");
  console.log(data);
  return (
    <div className="ps-10">
      <h3 className=" text-lg text-start ms-10 flex items-center ">
        New Collection
      </h3>
      <div className="flex gap-5 mt-5  overflow-x-scroll no-scrollbar py-5">
        {/* cards */}

        {ProductData.Dresses.map((item) => (
          <span>
            <div
              className="card card-compact w-56  bg-base-100  hover:shadow-xl shadow-sm p-5 h-full  cursor-pointer dark:shadow-white ms-2 hover:-translate-y-2 "
              onClick={() => {
                setdata(item);
                document.getElementById("my_modal_4").showModal();
              }}
            >
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
                  <button className="btn glass text-success btn-sm">
                    {item.discounted_price}$
                  </button>
                </div>
              </div>
            </div>
          </span>
        ))}
      </div>
      <ProductModal Product={data} />
    </div>
  );
};

export default HomeCards;
