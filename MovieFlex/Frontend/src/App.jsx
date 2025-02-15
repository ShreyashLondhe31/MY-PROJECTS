import React, { useEffect, useState } from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Login />
      {/* <Signup /> */}
      <Header />
      {/* <div>
        <div className="w-full h-screen absolute -z-[1] ">
          <img
            className="object-cover h-full w-full"
            src="/images/movies/bg-the-covenant.jpeg"
            alt=""
          />
        </div>
        <div className=" absolute z-[1] opacity-60 w-full h-screen bg-zinc-900"></div>
        <div className="absolute text-white top-20 z-[2] gap-5 left-12 w-[600px] h-[500px] flex flex-col items-start justify-center">
          <div>
            <img src="/images/the-covenant-title.png" alt="" />
          </div>

          <div className="flex justify-between items-center gap-5 text-xl font-bold">
            <h3 className="w-9 h-9 flex flex-col items-center justify-center text-sm rounded-md bg-red-600 font-semibold">
              Top <span>10</span>
            </h3>
            <h3>#1 in movies today</h3>
          </div>
          <p className="text-xl font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam, sint. Ab provident quos veniam doloribus?
          </p>
        </div>
      </div> */}
    </>
  );
};
export default App;
