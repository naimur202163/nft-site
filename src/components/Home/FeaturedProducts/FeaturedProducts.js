import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    img: "https://i.ibb.co/fpLc2zL/1.webp",
    title: "Nike Bag",
    description:
      "Rolex’s powerhouse calibre 3235 Perpetual movement. An upgrade from the calibre 3135 movement",
    price: "16.38",
  },
  {
    id: 2,
    img: "https://i.ibb.co/rw52zGB/2.webp",
    title: "Adidas Woolen Cap",
    description:
      "Casual wear (casual attire or clothing) may be a Western code that’s relaxed, occasional, spontaneous and fitted to everyday use. Casual wear became popular within the Western world following the counterculture of the 1960s.",
    price: "16.20",
  },
  {
    id: 3,
    img: "https://i.ibb.co/t2SHyzD/3.webp",
    title: "Nike Leader VT",
    description:
      "Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.",
    price: "15.20",
  },
  {
    id: 4,
    img: "https://i.ibb.co/FHr8t4V/4.webp",
    title: "Ray ban Aviator",
    description:
      "Polarized sunglasses reduce glare reflected off of roads, bodies of water, snow and other horizontal surfaces.Restore true color.Vision lenses are 400UV rated, meaning it can block UVA and UVB radiation.",
    price: "720",
  },
  {
    id: 4,
    img: "https://i.ibb.co/FHr8t4V/4.webp",
    title: "Ray ban Aviator",
    description:
      "Polarized sunglasses reduce glare reflected off of roads, bodies of water, snow and other horizontal surfaces.Restore true color.Vision lenses are 400UV rated, meaning it can block UVA and UVB radiation.",
    price: "720",
  },
  {
    id: 5,
    img: "https://i.ibb.co/q1f47xW/5.webp",
    title: "Tissot Classic",
    description:
      "The new-model Submariner now features Rolex’s powerhouse calibre 3235 Perpetual movement. An upgrade from the calibre 3135 movement,",
    price: "600",
  },
];
export default function FeaturedProducts() {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl my-14">
      <h2 className="font-opens font-bold text-3xl">Featured Products</h2>
      <div className="grid sm:grid-cols-1  mds:grid-cols-1  lg:grid-cols-2 gap-4">
        <div className="bg-light-gray p-2">
          {data.slice(0, 1).map((items) => (
            <Link to={`/featured/${items.id}`}>
              <img
                className="scale-100 hover:scale-110 ease-in duration-500"
                src={items.img}
                alt={items.title}
              />
              <div className="flex justify-between mt-20">
                <h2 className="font-opens font-semibold text-xl">
                  {items.title}
                </h2>
                <h2 className="font-opens font-semibold text-md text-gray-600 text-sm md:text-base lg:text-sm xl:text-base 3xl:text-lg">
                  $20.00
                </h2>
              </div>
              <div className="flex justify-between my-2 align-middle gap-1">
                <p className="font-opens text-gray-600 text-sm mt-2">
                  {items.description.slice(0, 30)}...
                </p>
                <h2 className="font-opens font-semibold text-md   text-2xl">
                  ${items.price}
                </h2>
              </div>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className=" bg-light-gray">
            {data.slice(1, 2).map((items) => (
              <Link className="p-2" to={`/featured/${items.id}`}>
                <img
                  className="scale-100 hover:scale-110 ease-in duration-500"
                  src={items.img}
                  alt={items.title}
                />
                <div className="flex justify-between">
                  <h2 className="font-opens font-semibold text-xl">
                    {items.title}
                  </h2>
                  <h2 className="font-opens font-semibold text-md text-gray-600 text-sm md:text-base lg:text-sm xl:text-base 3xl:text-lg">
                    $20.00
                  </h2>
                </div>
                <div className="flex justify-between my-2 align-middle gap-1">
                  <p className="font-opens text-gray-600 text-sm mt-2">
                    {items.description.slice(0, 30)}...
                  </p>
                  <h2 className="font-opens font-semibold text-md   text-2xl">
                    ${items.price}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
          <div className=" bg-light-gray p-2">
            {data.slice(2, 3).map((items) => (
              <Link to={`/featured/${items.id}`}>
                <img
                  className="scale-100 hover:scale-110 ease-in duration-500"
                  src={items.img}
                  alt={items.title}
                />
                <div className="flex justify-between mt-8">
                  <h2 className="font-opens font-semibold text-xl">
                    {items.title}
                  </h2>
                  <h2 className="font-opens font-semibold text-md text-gray-600 text-sm md:text-base lg:text-sm xl:text-base 3xl:text-lg"></h2>
                </div>
                <div className="flex justify-between  align-middle gap-1">
                  <p className="font-opens text-gray-600 text-sm mt-2">
                    {items.description.slice(0, 28)}...
                  </p>
                  <h2 className="font-opens font-semibold text-md   text-2xl">
                    ${items.price}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
          <div className=" bg-light-gray p-2">
            {data.slice(3, 4).map((items) => (
              <Link to={`/featured/${items.id}`}>
                <img
                  className="scale-100 hover:scale-110 ease-in duration-500"
                  src={items.img}
                  alt={items.title}
                />
                <div className="flex justify-between">
                  <h2 className="font-opens font-semibold text-xl">
                    {items.title}
                  </h2>
                  <h2 className="font-opens font-semibold text-md text-gray-600 text-sm md:text-base lg:text-sm xl:text-base 3xl:text-lg">
                    $20.00
                  </h2>
                </div>
                <div className="flex justify-between my-2 align-middle gap-1">
                  <p className="font-opens text-gray-600 text-sm mt-2">
                    {items.description.slice(0, 30)}...
                  </p>
                  <h2 className="font-opens font-semibold text-md   text-2xl">
                    ${items.price}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
          <div className=" bg-light-gray p-2">
            {data.slice(5, 6).map((items) => (
              <Link to={`/featured/${items.id}`}>
                <img
                  className="scale-100 hover:scale-110 ease-in duration-500"
                  src={items.img}
                  alt={items.title}
                />
                <div className="flex justify-between">
                  <h2 className="font-opens font-semibold text-xl">
                    {items.title}
                  </h2>
                  <h2 className="font-opens font-semibold text-md text-gray-600 text-sm md:text-base lg:text-sm xl:text-base 3xl:text-lg"></h2>
                </div>
                <div className="flex justify-between my-2 align-middle gap-1">
                  <p className="font-opens text-gray-600 text-sm mt-2">
                    {items.description.slice(0, 30)}...
                  </p>
                  <h2 className="font-opens font-semibold text-md   text-2xl">
                    ${items.price}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
