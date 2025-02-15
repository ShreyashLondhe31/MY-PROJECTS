import React, { useContext, useEffect, useState, useTransition } from "react";
import MovieDetails from "./MovieDetails";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import { MyContext } from "../Helper/Context";

const Banner = () => {
  const { currentDetailsIndex, handleDetailsChange, MovieDetailsData } =
    useContext(MyContext);
  const styles = {
    imageStyle: {
      opacity: 1,
      transition: "opacity 0.5s linear",
    },
  };
  return (
    <>
      <div
        className=" fixed -z-[1] w-full h-screen flex 
              items-center justify-center transition-opacity duration-1000 ease-linear delay-150"
      >
        <img
          className="w-full h-screen object-fill"
          src={MovieDetailsData[currentDetailsIndex].img}
          style={styles.imageStyle}
          alt="Movie Image"
        />
      </div>
      <div className=" w-full h-screen absolute z-[2] bg-gray-900 opacity-40  "></div>
      <MovieDetails data={MovieDetailsData[currentDetailsIndex]} />
      <div className="bg-transparent rounded-xl backdrop-blur-md absolute z-[2] w-[700px] h-[500px] right-28 bottom-36 flex justify-center items-center  ">
        {/* <Carousel
          data={MovieDetailsData}
          // plugins={[
          //   Autoplay({
          //     delay: 4000,
          //   }),
          // ]}
          className="w-full max-w-xs "
        >
          <div className="flex items-center justify-between  bottom-12">
            
          </div>
          </Carousel> */}
        <button onClick={() => handleDetailsChange("prev")}>prev</button>
        <button onClick={() => handleDetailsChange("next")}>next</button>
      </div>
    </>
  );
};
export default Banner;
