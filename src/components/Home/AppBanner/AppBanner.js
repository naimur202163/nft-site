import React from "react";

export default function AppBanner() {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl my-10 bg-light-gray ">
      <div className="lg:flex justify-between p-10  w-full">
        <div className="max-w-[576px]">
          <h2 className="text-3xl font-opens font-bold my-8 w-full">
            The ChawkBazar App
          </h2>
          <h1 className="text-5xl font-opens w-full my-5">
            Share Your <span className="font-bold w-full"> Ideas</span> & Shop
            Endless <span className="font-bold w-full">Inspiration</span>
          </h1>
          <div className="flex justify-between my-10">
            <div className="flex justify-between gap-4">
              <img
                className="rounded-md"
                src="https://chawkbazar.vercel.app/assets/images/app-store.svg"
                alt="lgop"
              />
              <img
                className="rounded-md"
                src="https://chawkbazar.vercel.app/assets/images/play-store.svg"
                alt="lgop"
              />
            </div>
            <div></div>
          </div>
        </div>
        <div className="max-w-[375px] my-10 flex justify-center">
          <img
            className="h-full w-full"
            src="https://i.ibb.co/9YRp2c4/app.png"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
}
