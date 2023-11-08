import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";

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
      id:"pic1",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      id:"pic2",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      id:"pic3",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      id:"pic4",
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
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
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
};
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
          <nav aria-label="Breadcrumb">
            {/* <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium ">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>*/}
          </nav>
          <section className="grid grid-cols-1 lg:grid-cols-2 ">
            {/* Image gallery */}
            {/* <div className="flex flex-col items-center justify-center">
              <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[30rem]">
                <img
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="flex flex-wrap gap-x-8">
                {product.images.map(() => (
                  <div className="verflow-hidden rounded-lg max-w-[8rem] max-h-[8rem] mt-10 ">
                    <img
                      src={product.images[1].src}
                      alt={product.images[1].alt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div> */}
            <span className="">
              <div className="carousel max-w-[30rem] max-h-[35rem]">
                {product.images.map((item) => (
                  <div id={item.id} className="carousel-item w-full">
                    <img
                      src={item.src}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center w-full gap-10">
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
            
          </section>
        </div>
      </div>
    </span>
  );
}

<div>
  <div className="carousel w-full">
    {product.images.map((item) => (
      <div id="item1" className="carousel-item max-w-[30rem] max-h-[30rem]">
        <img src={item.src} className="" />
      </div>
    ))}
  </div>
  <div className="flex justify-center w-full py-2 gap-2">
    {product.images.map((item) => (
      <a href="#item1" className="btn btn-xs">
        1
      </a>
    ))}

    <a href="#item2" className="btn btn-xs">
      2
    </a>
    <a href="#item3" className="btn btn-xs">
      3
    </a>
    <a href="#item4" className="btn btn-xs">
      4
    </a>
  </div>
</div>;
