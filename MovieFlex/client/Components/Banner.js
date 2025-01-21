import { useState } from "react";
import MovieDetails from "./MovieDetails";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Banner = () => {
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

  return (
    <>
      <div
        className=" bg-container fixed top-0 w-full h-screen flex 
              items-center justify-center transition-opacity duration-500 ease-in-out "
      >
        <img
          className="absolute -z-[1]  w-full h-screen object-fill "
          src={MovieDetailsData[currentDetailsIndex].img}
          alt=""
        />
        <div className=" w-full h-screen absolute -z-[1] bg-gray-900 bg-opacity-60 "></div>
      </div>
      <MovieDetails data={movieDetails[currentDetailsIndex]} />
      <div className="bg-transparent rounded-xl backdrop-blur-md absolute z-[2] w-[700px] h-[500px] right-28 bottom-36 flex justify-center items-center  ">
        <Carousel
          data={movieDetails[currentDetailsIndex]}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full max-w-xs "
        >
          <CarouselContent>
            {movieDetails.map((elem, index) => (
              <CarouselItem key={index}>
                <div className="p-1 flex justify-center items-center">
                  <Card className="w-[250px] h-[300] ">
                    <CardContent className="flex aspect-square items-center justify-center p-1">
                      <div className="card w-full h-[300px] rounded-[15px] overflow-hidden ">
                        <div className="max-h-[100%] max-w-[100%] object-cover flex items-center justify-center    ">
                          <img src={elem.poster} alt="" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex items-center justify-between gap-20 absolute z-[3] bottom-12">
          <button
            onClick={() => handleDetailsChange("prev")}
            className="bg-orange-500 px-4 py-1 rounded-md"
          >
            prev
          </button>
          <button
            onClick={() => handleDetailsChange("next")}
            className="bg-orange-500 px-4 py-1 rounded-md"
          >
            next
          </button>
        </div>
      </div>
    </>
  );
};
export default Banner;
