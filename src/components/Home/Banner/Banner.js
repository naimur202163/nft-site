import React from "react";
import img1 from "../../../images/banner-1.webp";
import img2 from "../../../images/banner-2.webp";
import img3 from "../../../images/banner-3.webp";
import img4 from "../../../images/banner-4.webp";
import img5 from "../../../images/banner-5.webp";
import img6 from "../../../images/banner-6.webp";
export default function Banner() {
  console.log("Naimur Rahman D");
  return (
    <div>
      <div class="grid grid-cols-4 gap-1 lg:gap-4">
        <div className="col-span-2">
          {" "}
          <img className="max-w-full h-auto lg:h-[370px]" src={img1} alt="" />
        </div>
        <div>
          {" "}
          <img className="max-w-full h-auto lg:h-[370px]" src={img2} alt="" />
        </div>
        <div>
          {" "}
          <img className="max-w-full h-auto lg:h-[370px]" src={img3} alt="" />
        </div>
        <div>
          {" "}
          <img className="max-w-full h-auto lg:h-[370px]" src={img4} alt="" />
        </div>
        <div>
          {" "}
          <img className="max-w-full h-auto lg:h-[370px]" src={img5} alt="" />
        </div>
        <div className="col-span-2">
          <img className="max-w-full h-auto lg:h-[370px]" src={img6} alt="" />
        </div>
      </div>
    </div>
  );
}
