import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import ProductReview from "./ProductReview";
import { Grid } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import SimilarCard from "./SimilarCard";
import { ProductData } from "../../../Data/DummyData";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      id: "pic1",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      id: "pic2",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      id: "pic3",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      id: "pic4",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <span>
      <div className="">
        <div className="pt-6">
          <nav aria-label="Breadcrumb"></nav>
          <section className="grid grid-cols-1 lg:grid-cols-2 ">
            {/* Image gallery */}
            <span>
              <div className="p-10 carousel max-w-[30rem] max-h-[35rem]">
                {product.images.map((item) => (
                  <div id={item.id} className="p-10 carousel-item w-full">
                    <img src={item.src} className="w-full" />
                  </div>
                ))}
              </div>
              <div className="flex justify-center w-full gap-5 -mt-10">
                {product.images.map((item) => (
                  <a href={`#${item.id}`} className="">
                    <div className=" max-w-[5rem] h-[5rem] mt-10 ">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="h-full w-full object-cover object-center rounded-lg"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </span>

            {/* Product info */}
            <div className="text-start mt-10 max-w-2xl pb-16 px-8 lg:max-w-7xl lg:px-8 lg:pb-24 sm:mx-16">
              <div className=" col-span-2  lg:border-gray-200 pb-5 dark:text-gray-100">
                <h1 className="text-2xl font-bold sm:text-2xl">
                  FashionMasters
                </h1>
                <h1 className="text-lg text-gray-500 tracking-wider">
                  Men's Formal Suit black
                </h1>
              </div>

              {/* Options */}
              <div className="mt-5 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <div className="flex space-x-4 gap-5 text-2xl">
                  <p className=" text-white font-semibold ">{product.price}</p>
                  <p className=" opacity-50 line-through font-semibold ">
                    {product.price}
                  </p>
                  <p className=" text-green-600 tracking-tight ">20% off</p>
                </div>

                {/* Reviews */}
                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating ? "" : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                    <a
                      href={reviews.href}
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {reviews.totalCount} reviews
                    </a>
                  </div>
                </div>

                <form className="mt-5">
                  {/* Colors */}
                  <div>
                    <h3 className="text-sm font-medium ">Color</h3>

                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a color
                      </RadioGroup.Label>
                      <div className="flex items-center space-x-3">
                        {product.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedClass,
                                active && checked ? "ring ring-offset-1" : "",
                                !active && checked ? "ring-2" : "",
                                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.class,
                                "h-8 w-8 rounded-full border border-black border-opacity-10"
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Sizes */}
                  <div className="mt-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium ">Size</h3>
                      <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Size guide
                      </a>
                    </div>

                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a size
                      </RadioGroup.Label>
                      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                        {product.sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={({ active }) =>
                              classNames(
                                size.inStock
                                  ? "cursor-pointer bg-white  shadow-sm"
                                  : "cursor-not-allowed bg-gray-50 text-gray-200",
                                active
                                  ? "ring-4 ring-indigo-700 text-indigo-500"
                                  : "",
                                "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label as="span">
                                  {size.name}
                                </RadioGroup.Label>
                                {size.inStock ? (
                                  <span
                                    className={classNames(
                                      active ? "border" : "border-2",
                                      checked
                                        ? "border-indigo-500 "
                                        : "border-transparent",
                                      "pointer-events-none absolute -inset-px rounded-md"
                                    )}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                  >
                                    <svg
                                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor"
                                    >
                                      <line
                                        x1={0}
                                        y1={100}
                                        x2={100}
                                        y2={0}
                                        vectorEffect="non-scaling-stroke"
                                      />
                                    </svg>
                                  </span>
                                )}
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  <button
                    type="submit"
                    className="mt-5 flex w-full btn btn-primary"
                  >
                    Add to bag
                  </button>
                </form>
              </div>

              <div className="py- lg:col-span-2 lg:col-start-1  lg:border-gray-200 lg:pt-2">
                {/* Description and details */}
                <div className="">
                  <h3 className="text-sm font-medium ">Highlights</h3>

                  <div className="mt-2">
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      {product.highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-2">
                  <h2 className="text-sm font-medium ">Details</h2>

                  <div className="mt-2 space-y-6">
                    <p className="text-sm text-gray-600">{product.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* review section */}
          <section><div className="text-center font-bold text-4xl mb-10 ">Customer reviews</div>
            <Grid container>
            
              <Grid item md={5} sm={12}>
                <ProductReview />
              </Grid>
              <Grid item md={7} sm={12}>
                <div className="flex flex-col md:px-5 px-5 ">
                  {[1,1,1,1,1].map((review)=><ProductReviewCard/>)}
                 
                </div>
              </Grid>
            </Grid>
          </section>

          {/* similer product section  */}
          <section className="m-10 mb-5 ">
            <h1 className="text-center font-bold text-4xl mb-10">Similer Product</h1>
            <div className="flex flex-wrap gap-5 justify-center">
               {ProductData.Dresses.map((item)=><SimilarCard product={item}/>)  }
            </div>
          </section>
        </div>
      </div>
    </span>
  );
}

{
  /*  */
}
