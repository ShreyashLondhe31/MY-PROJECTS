import React, { useState } from "react";
import Header from "./components/Header.js";
import Banner from "./components/Banner.js";
import Movie from "./components/Movie.js";
import Carousel from "./components/Carousel.js";
import "./index.css";

const movieData = [
  {
    title: "The Little Mermaid",
    description:
      "A young mermaid named Ariel longs to explore the human world and falls in love with a human prince.",
    image: "the-little-mermaid.jpg",
  },
  {
    title: "65",
    description:
      "An astronaut crash-lands on Earth 65 million years ago, in the midst of the dinosaur age.",
    image: "65.jpg",
  },
  {
    title: "The Covenant",
    description:
      "A U.S. Army sergeant in Afghanistan makes a pact with an Afghan interpreter to help him and his family escape the Taliban.",
    image: "the-covenant.jpg",
  },
  {
    title: "The Black Demon",
    description:
      "An oil rig supervisor and his family are taken hostage by a monstrous creature.",
    image: "the-black-demon.jpg",
  },
  {
    title: "The Tank",
    description:
      "A group of friends on a road trip are terrorized by a deadly, self-aware AI.",
    image: "the-tank.jpg",
  },
];

function App() {
  const [activeMovie, setActiveMovie] = useState(movieData[0]);

  const handleMovieChange = (title) => {
    const newMovie = movieData.find((movie) => movie.title === title);
    setActiveMovie(newMovie);
  };

  return (
    <div className="container mx-auto px-4">
      <Header />
      <Banner movie={activeMovie} />
      <Carousel movies={movieData} onMovieChange={handleMovieChange} />
    </div>
  );
}

export default App;
