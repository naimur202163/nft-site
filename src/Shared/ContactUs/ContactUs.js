import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";

export default function ContactUs() {
  return (
    <div>
      <div className="bg-cover w-full bg-no-repeat flex justify-center items-center bg-center relative  h-[404px] bg-[url('https://i.ibb.co/XDY7Wb3/page-header.jpg')]">
        <div className=" flex justify-center items-center absolute top-0 bg-black z-40  w-full h-full opacity-50 ">
          <div>
            <h2 className="text-white font-opens text-3xl z-50 text-center">
              explore
            </h2>
            <h2 className="text-white text-center text-3xl">Contact Us</h2>
          </div>
        </div>
      </div>
      {/* get in touch  */}
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-span-3">
            <div className="border border-r-2 border-gray-400">
                <h2 className="font-bold font-opens">Find us here</h2>
                <div>
                  <div>
                    <MdOutlineLocationOn/>
                  </div>
                  <div>
                    <h2>Address</h2>
                    <p>PO Box 14122 Collins Street West.Victoria</p>
                  </div>
                </div>
            </div>
          </div>
          <div class="row-span-2 col-span-2">lore</div>
        </div>
      </div>
    </div>
  );
}
// 01713598285
