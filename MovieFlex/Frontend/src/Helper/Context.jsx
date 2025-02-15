import React, { createContext, useContext, useState } from "react";
export const MyContext = createContext();

const Context = ({ children }) => {
  const [currentDetailsIndex, setCurrentDetailsIndex] = useState(0);
  const MovieDetailsData = [
    {
      title: "the-little-mermaid",
      desc: "The Little Mermaid is a classic Disney animated musical film released in 1989. It tells the story of Ariel, a young mermaid princess who is fascinated by the human world.",
      poster: "/images/movies/the-little-mermaid.jpeg",
      category: "Romance",
      duration: "2hr 14min",
      ageLimit: "12+",
      img: "/images/movies/bg-little-mermaid.jpg",
      year: 2023,
    },
    {
      title: "the-65",
      desc: "65 is a 2023 science fiction film that tells the story of an astronaut who crash-lands on an unknown planet.",
      poster: "/images/movies/65.jpg",
      category: "Action",
      duration: "1hr 44min",
      ageLimit: "15+",
      img: "/images/movies/bg-65.jpeg",
      year: 2012,
    },

    {
      title: "the-covenant",
      desc: "The Covenant is a 2023 action-thriller film that tells the story of a bond forged in the heat of battle.",
      poster: "/images/movies/the-covenant.jpg",
      category: "Action",
      duration: "2hr 25min",
      ageLimit: "18+",
      img: "/images/movies/bg-the-covenant.jpeg",
      year: 2023,
    },
    {
      title: "the-tank",
      desc: "The Tank is a 2023 horror film that follows a family who inherits a secluded coastal property.",
      poster: "/images/movies/the-tank.jpeg",
      category: "Triller",
      duration: "1hr 25min",
      ageLimit: "16+",
      img: "/images/movies/bg-the-tank.jpeg",
      year: 2012,
    },
    {
      title: "the-black-demon",
      desc: "The Black Demon is a 2023 action-horror film that tells the story of a family facing a terrifying threat.",
      poster: "/images/movies/the-black-demon.jpg",
      category: "Triller",
      duration: "1hr 25min",
      ageLimit: "16+",
      img: "/images/movies/bg-the-black-demon.jpeg",
      year: 2005,
    },
  ];
  const [movieDetails, setMovieDetails] = useState(MovieDetailsData);

  const handleDetailsChange = (direction) => {
    const newIndex =
      (currentDetailsIndex +
        (direction === "next" ? 1 : -1) +
        MovieDetailsData.length) %
      MovieDetailsData.length;
    setCurrentDetailsIndex(newIndex);
  };

  const contextValue = {
    currentDetailsIndex,
    handleDetailsChange,
    MovieDetailsData, // Provide the entire array to the context
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
export default Context;
