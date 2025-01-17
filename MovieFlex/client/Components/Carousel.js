const Carousel = () => {
  return (
    <>
      <div class="carousel-box">
        <div class="carousel">
          <div
            class="carousel-item"
            onClick="changeBg('bg-little-mermaid.jpg', 'the-little-mermaid');"
          >
            <img src="images/movies/the-little-mermaid.jpeg" alt="" />
          </div>
          <div class="carousel-item" onClick="changeBg('bg-65.jpeg', 'bg-65');">
            <img src="images/movies/65.jpg" alt="" />
          </div>
          <div
            class="carousel-item"
            onClick="changeBg('bg-the-covenant.jpeg', 'the-covenant');"
          >
            <img src="images/movies/the-covenant.jpg" alt="" />
          </div>
          <div
            class="carousel-item"
            onClick="changeBg('bg-the-black-demon.jpeg', 'the-black-demon');"
          >
            <img src="images/movies/the-black-demon.jpg" alt="" />
          </div>
          <div
            class="carousel-item"
            onClick="changeBg('bg-the-tank.jpeg', 'the-tank');"
          >
            <img src="images/movies/the-tank.jpeg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Carousel;
