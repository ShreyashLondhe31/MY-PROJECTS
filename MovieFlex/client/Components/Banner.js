import Image from "next/image";

import littleMermaid from "../public/images/movies/bg-little-mermaid.jpg";
import Header from "./Header";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <>
      <div className="img-container">
        <Image
          src={littleMermaid}
          alt="little-mermaid"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <Header />
      <Carousel />
    </>
  );
};
export default Banner;
