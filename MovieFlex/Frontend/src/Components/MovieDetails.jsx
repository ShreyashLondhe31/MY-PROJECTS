import { IoIosPlayCircle } from "react-icons/io";
import { FaListAlt } from "react-icons/fa";
import React from "react";

const MovieDetails = ({ data }) => {
  return (
    <div className="fixed z-[2] w-[500px] h-[300px] flex justify-center flex-col top-60 left-10 text-white  ">
      <h4 className="flex items-center justify-center ">
        <span className="text-xl font-semibold px-2">{data.year}</span>
        <span>
          <i className="px-2 text-lg text-gray-200 font-mono">
            {data.ageLimit}
          </i>
        </span>
        <span className="px-2 text-lg">{data.duration}</span>
        <span className="px-2 font-medium">{data.category}</span>
      </h4>
      <p className="p-5 font-medium ">{data.desc}</p>
      <div className="button flex items-center justify-between px-20  ">
        <a
          href="#"
          className="bg-green-500 px-4 py-2 rounded-full flex justify-center items-center gap-2"
        >
          <IoIosPlayCircle />
          Watch
        </a>

        <a
          href="#"
          className="bg-orange-500 px-5 py-2 rounded-full flex justify-center items-center gap-2 "
        >
          <FaListAlt />
          My list
        </a>
      </div>
    </div>
  );
};
export default MovieDetails;
