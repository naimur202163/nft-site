import React from "react";
import { IoIosArrowForward } from "react-icons/io";
const HeaderFeature = ({ tab }) => {
  return (
    <div className="bg-gradient-to-tr from-dark-gray to-gray-500 w-full relative h-[28rem] bg-cover bg-center">
      <img
        className="w-full absolute mix-blend-overlay h-full bg-center object-cover"
        src="https://i.ibb.co/bQmqFXc/page-header.jpg"
        alt=""
      />

      <div className="justify-center  flex w-full h-[32rem] items-center font-bold text-white">
        <div className="text-center">
          <h2 className="text-7xl my-3">{tab}</h2>
          <ul className="flex justify-center items-center">
            <li className="text-2xl">Frequently Asked Questions</li>
            <li className="text-2xl"></li>
            {/* <li className="text-2xl mx-2">
              <IoIosArrowForward />
            </li> */}
            {/* <li className="text-2xl">{tab}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderFeature;
