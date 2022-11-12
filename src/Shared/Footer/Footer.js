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
          <div className="grid  grid-cols-4  gap-4">
            <div>
              <h2 className="text-lg font-semibold my-3">Social</h2>
              <div className="flex items-center ">
                {" "}
                <AiOutlineInstagram />{" "}
                <p className="ml-3  hover:text-black  cursor-pointer"> Instagram</p>
              </div>
              <div className="flex items-center  my-2 ">
                {" "}
                <AiOutlineTwitter />{" "}
                <p className="ml-3  hover:text-black  cursor-pointer "> twitter</p>
              </div>
              <div className="flex items-center my-2">
                {" "}
                <AiOutlineFacebook />{" "}
                <p className="ml-3  hover:text-black  cursor-pointer "> Facebook</p>
              </div>
              <div className="flex items-center">
                {" "}
                <AiOutlineYoutube />{" "}
                <p className="ml-3   hover:text-black  cursor-pointer"> Youtube</p>
              </div>
            </div>
            <div>
              <h2>Contact</h2>
            </div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </div>
    </>
  );
}
