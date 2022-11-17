import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../images/404 (1).svg";

export default function NotFound() {



  
  return (
    <div className="">
      <div className="flex justify-center">
        <img className="object-center" src={notfound} alt="notfound" />
      </div>
      <div>
        <h2 className="font-semibold font-opens text-center">
          Looks like you are lost
        </h2>
        <p className="font-opns text-gray-500 py-4 text-center">
          We can't find the page you're looking for
        </p>
        <div className="flex justify-center">
          <Link className=" text-white bg-black px-4 py-3  rounded-lg" to="/">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
