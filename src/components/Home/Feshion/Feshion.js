import React from "react";

export default function Feshion() {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl my-5 ">
     
      <div className="flex ">
        <div>
          <div className="relative ">
            <img
              className="h-full w-full hover:scale-105 transition duration-500 "
              src="https://i.ibb.co/0GgMWGc/women.png"
              alt="women"
            />
            <button className="absolute right-4  lg:bottom-10 lg:px-6 py-5 bg-slate-100 hover:bg-black hover:text-white rounded-md text-3xl  z-10">
              #Women Exclusive
            </button>
          </div>
        </div>
        <div className=" relative">
          <img
            className="h-full w-full  hover:scale-105 transition duration-500 "
            src="https://i.ibb.co/zxKD4Yy/men.png"
            alt="men"
          />
          <button className="absolute left-4  lg:bottom-10 lg:px-6 py-5 bg-slate-100 hover:bg-black hover:text-white rounded-md text-3xl  z-10">
            #Men Exclusive
          </button>
        </div>
      </div>
    </div>
  );
}
