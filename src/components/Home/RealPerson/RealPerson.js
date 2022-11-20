import React from "react";

export default function RealPerson() {
  return (
    <div>
      <h2 className="text-center font-opens text-3xl font-bold my-2">
        Talk To A Real Person
      </h2>
      <p className="text-center font-opens text-gray-500 my-3">
        Are you on the fence? Have a question? Need a recommendation?
      </p>
      <p className="text-center font-opens text-gray-500 ">
        Member Services is always here to help. Send us a message.
      </p>
      <div className="flex justify-center">
        <img
          className="h-full w-[870px]"
          src="https://i.ibb.co/R3SwTVf/support.png"
          alt="support image"
        />
      </div>
    </div>
  );
}
