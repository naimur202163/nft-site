import React from "react";
import { Link } from "react-router-dom";
import Loader from "./../../../Shared/Loader/Loader";
const saleProduct = [
  {
    id: 1,
    img: "https://i.ibb.co/dLpnPgz/p-26-md.png",
    title: "Adidas Shoes Black",
    description: "Men Black top sleeveless gown",
    price: "45.00",
  },

  {
    id: 2,
    img: "https://i.ibb.co/gzX2xTf/p-25-md.png",
    title: "Wayfarer Sunglasses",
    description:
      "Our optical engineers developed these sunglasses for hiking. Ideal for occasional use in the mountains.",

    price: "30.00",
  },
  {
    id: 3,
    img: "https://i.ibb.co/xCf01Sq/p-14-md.webp",
    title: "Hermes Carlton London",
    description:
      "Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem",

    price: "15.00",
  },
  {
    id: 4,
    img: "https://i.ibb.co/429TH2t/p-27-md.png",
    title: "Polarised Wayfarer ",
    description:
      "This item is only exchangeable for the same or a different size, if available, and cannot be returned",

    price: "20.00",
  },
  {
    id: 5,
    img: "https://i.ibb.co/HX4q9Jx/p-8-md.png",
    title: "Gucci Carlton UK",
    description:
      "Knitted midi A-line dress, has a scoop neck, sleeveless, straight hem",

    price: "14.99",
  },
  {
    id: 6,
    img: "https://i.ibb.co/60hWPj8/p-24-md.webp",
    title: "NIKE Shoes",
    description:
      "NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.",

    price: "50.00",
  },
  {
    id: 7,
    img: "https://i.ibb.co/vYrLRpx/p-12-md.png",
    title: "Wayfarer Sunglasses",
    description:
      "Our optical engineers developed these sunglasses for hiking. Ideal for occasional use in the mountains.",

    price: "20.00",
  },

  {
    id: 8,
    img: "https://i.ibb.co/60hWPj8/p-24-md.webp",
    title: "NIKE Shoes",
    description:
      "NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.",

    price: "50.00",
  },

  {
    id: 9,
    img: "https://i.ibb.co/gzX2xTf/p-25-md.png",
    title: "Wayfarer Sunglasses",
    description:
      "Our optical engineers developed these sunglasses for hiking. Ideal for occasional use in the mountains.",

    price: "30.00",
  },
  {
    id: 10,
    img: "https://i.ibb.co/60hWPj8/p-24-md.webp",
    title: "NIKE Shoes",
    description:
      "NIKE 2020 Black White is a clean and monochromatic colourway of the label’s latest high-technology silhouette. The model first launched late last year and is currently Jordan Brand’s flagship performance pair.",

    price: "50.00",
  },
];

export default function FlashSale() {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl my-10">
      <div className="border-gray-200 rounded border-2 border-r-2">
        <div className="flex justify-between">
          <h2 className="text">Flash Sale</h2>
          <h2>Hello </h2>
        </div>
        {/* products */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 sm:gap-1 md:grid-cols-3 lg:gap-4 p-5">
          {saleProduct.map((product, i) => (
            <Link to={`/sale/${product.id}`}>
              <div key={product.id}>
                <img
                  className="h-100% w-100% rounded  sm:hover:scale-105 lg:hover:scale-110  ease-in duration-500"
                  src={product.img}
                  alt={product.title}
                />
                <div className="py-2">
                  <h2 className="text-lg font-opens  font-semibold">
                    {product.title}
                  </h2>
                  <p className="font-opens  pt-2  text-sm">
                    {product.description.slice(0, 32)}
                  </p>
                  <p className="font-semibold text-xl  font-opens pt-3">
                    ${product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
