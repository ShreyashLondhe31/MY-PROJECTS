import { IoMdSearch } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full h-18  z-[2] absolute  text-white  bg-black">
        <div className="w-full h-full flex items-center justify-between px-10">
          <div className="flex items-center gap-4 ">
            <h1 className="text-5xl font-bold">AuraStream</h1>
            <li className="list-none flex items-center justify-between gap-10 ml-7">
              <a className="font-light" href="">
                Home
              </a>
              <a className="font-light" href="">
                Tv Shows
              </a>
              <a className="font-light" href="">
                Movies
              </a>
              <a className="font-light" href="">
                News & Popular
              </a>
              <a className="font-light" href="">
                My list
              </a>
              {/* <a className="font-light" href="">
              Browse by languages
            </a> */}
            </li>
          </div>
          <div className="flex items-center justify-between gap-5">
            <input
              className="px-5 py-1 border-2 border-zinc-600 rounded-3xl"
              type="text"
              placeholder="search"
            />
            <IoMdSearch className="text-3xl" />
            <CiBellOn className="text-3xl" />
            <div className="w-7 h-7 border-2 border-zinc-600 rounded-lg">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
