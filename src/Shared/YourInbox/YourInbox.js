import React from "react";

export default function YourInbox() {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div>
        <div className=" lg:flex lg:justify-between justify-center">
          <div className="max-w-[434px] my-5">
            <h2 className="text-3xl font-bold text-center">
              Get Expert Tips In Your Inbox
            </h2>
            <p className="text-gray-500 my-3 text-center lg:text-start">
              Subscribe to our newsletter and stay updated.
            </p>
          </div>
          <div className="my-5">
            <div className="flex gap-1 lg:items-center justify-center">
              <input
                type="text"
                className="
                px-14 py-3
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="exampleFormControlInput1"
                placeholder="Write Your Email here"
              />
              <button className="bg-black text-white px-8 py-3 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
