import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineYoutube,
} from "react-icons/ai";
export default function Footer() {
  return (
    <>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div>
          <div className=" lg:grid  md:gird md:grid-cols-2  xs:gird xs:grid-cols-2  lg:grid-cols-7  gap-4 ">
            <div className="p-1">
              <h2 className="text-lg font-semibold my-3">Social</h2>
              <div className="flex items-center ">
                {" "}
                <AiOutlineInstagram />{" "}
                <p className="ml-3  text-gray-700 hover:text-black  cursor-pointer">
                  {" "}
                  Instagram
                </p>
              </div>
              <div className="flex items-center  my-2 ">
                {" "}
                <AiOutlineTwitter />{" "}
                <p className="ml-3  hover:text-black  cursor-pointer ">
                  {" "}
                  twitter
                </p>
              </div>
              <div className="flex items-center my-2">
                {" "}
                <AiOutlineFacebook />{" "}
                <p className="ml-3  hover:text-black  cursor-pointer ">
                  {" "}
                  Facebook
                </p>
              </div>
              <div className="flex items-center">
                {" "}
                <AiOutlineYoutube />{" "}
                <p className="ml-3   hover:text-black  cursor-pointer">
                  {" "}
                  Youtube
                </p>
              </div>
            </div>
            <div className="p-1">
              <h2 className="text-lg font-semibold my-3">About</h2>
              <p className=" text-gray-700 hover:text-black  my-2 cursor-pointer">
                {" "}
                Support Center
              </p>

              <p className=" text-gray-700 hover:text-black my-2  cursor-pointer">
                {" "}
                Customer Support
              </p>
              <p className=" text-gray-700 hover:text-black  my-2 cursor-pointer">
                {" "}
                About Us
              </p>
              <p className=" text-gray-700 hover:text-black my-2  cursor-pointer">
                {" "}
                Copyright
              </p>
            </div>
            <div className="p-1">
              <h2 className="text-lg font-semibold my-3">Contact</h2>
              <p className=" text-gray-700 hover:text-black  my-2 cursor-pointer">
                {" "}
                Contact Us
              </p>

              <p className=" text-gray-700 hover:text-black my-2  cursor-pointer">
                {" "}
                naimur202163@gmail
              </p>
              <p className=" text-gray-700 hover:text-black  my-2 cursor-pointer">
                {" "}
                example@email.com
              </p>
              <p className=" text-gray-700 hover:text-black my-2  cursor-pointer">
                {" "}
                Call us: +880
              </p>
            </div>
            <div className="p-1">
              <h2 className="text-lg font-semibold my-3">About</h2>
              <p className=" text-gray-700 hover:text-black  my-2 cursor-pointer">
                {" "}
                Support Center
              </p>

              <p className=" text-gray-700 hover:text-black my-2  cursor-pointer">
                {" "}
                Customer Support
              </p>
              <p className=" text-gray-700 hover:text-black  my-2 cursor-pointer">
                {" "}
                About Us
              </p>
              <p className=" text-gray-700 hover:text-black my-2  cursor-pointer">
                {" "}
                Copyright
              </p>
            </div>
            <div className="p-1">
              <h2 className="text-lg font-semibold my-3">Customer Care</h2>
              <p className=" text-gray-700 hover:text-black  my-2 cursor-pointer">
                {" "}
                FAQ & Helps
              </p>

              <p className=" text-gray-700 hover:text-black my-2  cursor-pointer">
                {" "}
                Shipping & Delivery
              </p>
              <p className=" text-gray-700 hover:text-black  my-2 cursor-pointer">
                {" "}
                Return & Exchanges
              </p>
            </div>
            {/*  */}
            <div className="p-1">
              <h2 className="text-lg font-semibold my-3">Our Information</h2>
              <p className=" text-gray-700 hover:text-black  my-2 cursor-pointer">
                {" "}
                Privacy policy update
              </p>

              <p className=" text-gray-700 hover:text-black my-2  cursor-pointer">
                {" "}
                Terms & conditions
              </p>
              <p className=" text-gray-700 hover:text-black  my-2 cursor-pointer">
                {" "}
                Return Policy
              </p>
              <p className=" text-gray-700 hover:text-black  my-2 cursor-pointer">
                {" "}
                Site Map
              </p>
            </div>
            {/*  */}
            <div className="p-1">
              <h2 className="text-lg font-semibold my-3">Top Categories</h2>
              <p className=" text-gray-700 hover:text-black  my-2 cursor-pointer">
                {" "}
                Men's Wear
              </p>

              <p className=" text-gray-700 hover:text-black my-2  cursor-pointer">
                {" "}
                Men's Wear
              </p>
              <p className=" text-gray-700 hover:text-black  my-2 cursor-pointer">
                {" "}
                Kid's Wear
              </p>
              <p className=" text-gray-700 hover:text-black  my-2 cursor-pointer">
                {" "}
                Sports Wear
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
