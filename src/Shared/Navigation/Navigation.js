import React from "react";
import logo from "../../images/logo.svg";
export default function Navigation() {
  return (
    <>
      <header
        id="siteHeader"
        className="w-full  h-16 sm:h-20 lg:h-24 relative z-20"
      >
        <div className="innerSticky text-gray-700 body-font  fixed bg-white w-full h-16 sm:h-20 lg:h-24 px-4 md:px-8 lg:px-6 transition duration-200  ease-out">
          <div className="flex items-center justify-center mx-auto max-w-[1920px] h-full  w-full">
            <a className="inline-flex focus:outline-none" href="#">
              <span style="box-sizing:border-box,display:inline-block ,overflow:hidden">
                <img src={logo} alt="logo" />
              </span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
