import React from "react";

const BoxDesign = () => {
  return (
    <>
      <div className="relative overflow-hidden lg:flex w-1/2 bg-gradient-to-tr from-backGreen to-green i justify-around items-center hidden">
        <div>
          <div className="flex justify-center">
            <img
              src="https://mosbatesabz.com/wp-content/uploads/2022/01/logo-mosbate-sabz.png"
              className="w-32 py-5 "
              alt=""
            />
          </div>
          <h1 className="text-white font-bold text-4xl font-sans">
            Mosbatesabz
          </h1>
          <div className="flex justify-center">
            <p className="text-white mt-4">This page is for Register</p>
          </div>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-40 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-96 h-40 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
    </>
  );
};

export default BoxDesign;
