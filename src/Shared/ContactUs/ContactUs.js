import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

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
      <div className="bg-white">
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-10">
          <div className="grid  lg:grid-cols-3 gap-4">
            <div className="border border-gray-300 rounded-md p-2">
              <h2 className="font-opens font-bold text-xl my-5">
                Find us here
              </h2>
              <div className="flex justify-around items-center">
                <div className="flex justify-center ">
                  <CiLocationOn className="text-3xl cursor-pointer" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold font-opens">Address</h2>
                  <p className="text-gray-400">
                    PO Box 14122 Collins Street West.Victoria
                  </p>
                </div>
              </div>
              <div className="flex justify-around items-center my-5">
                <div className="flex justify-center ">
                  <AiOutlineMail className="text-3xl cursor-pointer" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold font-opens ">Address</h2>
                  <p className="text-gray-400">
                    PO Box 14122 Collins Street West.Victoria
                  </p>
                </div>
              </div>
              <div className="flex justify-around items-center my-5">
                <div className="flex justify-center ">
                  <AiOutlinePhone className="text-3xl cursor-pointer" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold font-opens">Address</h2>
                  <p className="text-gray-400">
                    PO Box 14122 Collins Street West.Victoria
                  </p>
                </div>
              </div>
              <div className=" my-5">
                <div className="flex justify-center ">
                  <img
                    className="rounded-md"
                    src="https://i.ibb.co/rbBTRwJ/map-image.jpg"
                    alt="image"
                  />
                </div>
              </div>
            </div>
            <div className=" lg:col-span-2">
              <h2 className="text-3xl font-bold font-opens">Get in touch</h2>
              <form className="w-full">
                <div className="grid grid-cols-2 gap-4 my-5">
                  <input
                    type="text"
                    className="border rounded-sm border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="border  rounded-sm border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                    placeholder="Last Name"
                  />
                  <input
                    type="email"
                    class="border  rounded-sm border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                    placeholder="Email"
                  />

                  <textarea
                    cols="10"
                    rows="5"
                    className="border  rounded-sm border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                    placeholder="Write your message..."
                  ></textarea>
                  <div className="flex justify-center itme">
                    
                  </div>
                </div>
                <input
                      type="submit"
                      value="Send Message"
                      className="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full"
                    />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}
// 01713598285
