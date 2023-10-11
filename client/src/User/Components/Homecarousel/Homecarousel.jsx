import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <div className="flex justify-center">
    <img
      src="https://img.freepik.com/premium-vector/red-banner-with-hot-sale-text-suitable-advertising-posters-online-product-sales_626143-21.jpg?w=1380"
      alt="carousel"
      srcset=""
      className=""
      role="presentation"
    />
  </div>,
  <div className="flex justify-center">
    <img
      src="https://img.freepik.com/premium-vector/red-banner-with-hot-sale-text-suitable-advertising-posters-online-product-sales_626143-21.jpg?w=1380"
      alt="carousel"
      srcset=""
      className=""
      role="presentation"
    />
  </div>,
  <div className="flex justify-center">
    <img
      src="https://img.freepik.com/premium-vector/red-banner-with-hot-sale-text-suitable-advertising-posters-online-product-sales_626143-21.jpg?w=1380"
      alt="carousel"
      srcset=""
      className=""
      role="presentation"
    />
  </div>,
  <div className="flex justify-center">
    <img
      src="https://img.freepik.com/premium-vector/red-banner-with-hot-sale-text-suitable-advertising-posters-online-product-sales_626143-21.jpg?w=1380"
      alt="carousel"
      srcset=""
      className=""
      role="presentation"
    />
  </div>,
];

const Homecarousel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    autoPlay
    autoPlayInterval={2000}
    infinite
    disableButtonsControls
    controlsStrategy="alternate"
  />
);
export default Homecarousel;
