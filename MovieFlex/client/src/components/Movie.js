import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <img
        src={`./images/movies/${movie.image}`}
        alt={movie.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
        <p className="text-gray-400">{movie.description}</p>
      </div>
    </div>
  );
};

export default Movie;
