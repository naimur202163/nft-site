import React from "react";

const data = [
  {
    id: 1,
    img1: "https://i.ibb.co/XtGt26N/fusion-bg.jpg",
    img2: "https://i.ibb.co/q9Wv8qd/fusion.png",
  },
  {
    id: 2,
    img1: "https://i.ibb.co/7gF2ydQ/sholy-bg.webp",
    img2: "https://i.ibb.co/w41VYSG/sholy.png",
  },
  {
    id: 3,
    img1: "https://i.ibb.co/ZW4SWP3/tyrant-bg.webp",
    img2: "https://i.ibb.co/4tZyrc0/tyrant.png",
  },
  {
    id: 4,
    img1: "https://i.ibb.co/qYnSN7c/fashadil-bg.webp",
    img2: "https://i.ibb.co/dJbBFgD/sholy.png",
  },
  {
    id: 5,
    img1: "https://i.ibb.co/MBX1LpB/clothingegy-bg.webp",
    img2: "https://i.ibb.co/YLCn6kG/clothingegy.png",
  },
  {
    id: 6,
    img1: "https://i.ibb.co/vQ2mH3k/tyrant-bg.webp",
    img2: "https://i.ibb.co/fpDwBKM/shosio.png",
  },
  {
    id: 7,
    img1: "https://i.ibb.co/vvSdyhf/club-shoes-bg.webp",
    img2: "https://i.ibb.co/rmhTVTp/club-shoes.png",
  },
  {
    id: 8,
    img1: "https://i.ibb.co/vvSdyhf/club-shoes-bg.webp",
    img2: "https://i.ibb.co/k2X7Bdm/pop-clothing.png",
  },
  {
    id: 9,
    img1: "https://i.ibb.co/v477yJs/hoppister-bg.webp",
    img2: "https://i.ibb.co/7pMb56k/hoppister.png",
  },
  {
    id: 10,
    img1: "https://i.ibb.co/ckLSPM0/shovia-bg.webp",
    img2: "https://i.ibb.co/PWDdq72/shovia.png",
  },
  {
    id: 11,
    img1: "https://i.ibb.co/ngCm60q/shoozly-bg.jpg",
    img2: "https://i.ibb.co/N2WL4n0/shoozly.png",
  },
  {
    id: 12,
    img1: "https://i.ibb.co/HrGppWf/blaze-fashion-bg.webp",
    img2: "https://i.ibb.co/0jCY9q8/blaze-fashion.png",
  },
  {
    id: 13,
    img1: "https://i.ibb.co/4YchCVB/elegance-bg.webp",
    img2: "https://i.ibb.co/Wt8xLnY/elegance.png",
  },
  {
    id: 14,
    img1: "https://i.ibb.co/HYVqHbN/clothingtastic-bg.webp",
    img2: "https://i.ibb.co/NVh4hz2/clothingtastic.png",
  },
  {
    id: 15,
    img1: "https://i.ibb.co/p0XpqmZ/fashnetic-bg.webp",
    img2: "https://i.ibb.co/tMPDFFm/fashnetic.png",
  },
  {
    id: 16,
    img1: "https://i.ibb.co/KjGxBcR/hunter-shoes-bg.jpg",
    img2: "https://i.ibb.co/ssJ6jtD/hunter-shoes.png",
  },
];

export default function TopBrands() {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl my-14">
      <h2 className="font-opens text-3xl font-bold my-10">TopBrands</h2>

      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((items) => (
          <div className=" flex justify-center relative overflow-hidden rounded-md">
            <div
              className="flex justify-center items-center bg-blend-darken bg-center duration-500 hover:scale-105 cursor-pointer "
              style={{
                width: 330,
                height: 330,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${items.img1})`,
              }}
            >
              <img className="" src={items.img2} />
            </div>
          </div>
        ))}
      </div>
      {/* part-2 */}

      <div className="my-20">
        <img
          className="h-auto w-full"
          src="https://i.ibb.co/HKrNzYv/banner-4.jpg"
          alt="hello"
        />
      </div>
    </div>
  );
}
