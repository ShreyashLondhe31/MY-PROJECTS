import React, { useState } from "react";
import Movie from "./Movie.js";

const Carousel = ({ movies, onMovieChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + movies.length) % movies.length
    );
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handlePrev}
        className="text-white hover:text-gray-200 mr-4"
      >
        &lt;
      </button>
      <div className="flex flex-nowrap overflow-x-auto scroll-smooth snap-x snap-mandatory">
        {movies.map((movie, index) => (
          <div key={index} className="snap-center w-64 flex-shrink-0">
            <Movie movie={movie} onClick={() => onMovieChange(movie.title)} />
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="text-white hover:text-gray-200 ml-4"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
