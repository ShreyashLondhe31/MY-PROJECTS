import React, { useEffect, useState } from "react";

const Login = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bgImages = [
    {
      img: "/images/movies/bg-little-mermaid.jpg",
    },
    {
      img: "/images/movies/bg-65.jpeg",
    },
    {
      img: "/images/movies/bg-the-black-demon.jpeg",
    },
    {
      img: "/images/movies/bg-the-covenant.jpeg",
    },
    {
      img: "/images/movies/bg-the-tank.jpeg",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % bgImages.length // Loop back to the beginning
      );
    }, 2500); // Change image every 1 second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);
  return (
    <>
      <div className=" absolute -z-[1] img-div w-full h-screen text-white bg-[#141414] flex justify-center items-center    ">
        <div
          style={{
            backgroundImage: `url(${bgImages[currentImageIndex].img})`,
            backgroundSize: "cover",
            height: "100vh",
            width: "100%",
          }}
          className="fixed  w-full h-screen z-[1] transition-discrete duration-500 ease-linear"
        ></div>
        <div className="w-full h-screen absolute z-[2] bg-zinc-900 opacity-60"></div>
        <div className="relative z-[3] flex flex-col justify-center items-center w-[600px] h-[500px] border-2 rounded-4xl border-zinc-600 backdrop-blur-xs">
          <form
            action=""
            className=" w-96 flex flex-col gap-5 justify-center items-center"
          >
            <header className=" text-3xl font-bold tracking-tight ">
              Welcome!
            </header>
            <div className="w-full  flex flex-col items-start justify-center gap-2">
              <header>Email or phone number</header>
              <input
                className=" w-full  bg-transparent border-2 border-zinc-600 px-5 py-2 rounded-md"
                type="text"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <header>Password</header>
              <input
                className="w-full bg-transparent border-2 border-zinc-600 px-5 py-2
                 rounded-md"
                type="text"
              />
            </div>
            <button className="bg-[#4efeef] w-full font-semibold mt-3 text-black rounded-lg px-5 py-[6px] hover:scale-[1.1] duration-500">
              Login
            </button>
          </form>
          <div className="flex flex-col justify-center items-center m-7 font-light w-[300px] p-3 text-[13px]  ">
            <li className="list-none flex flex-col items-center justify-center gap-2 text-[#C4C4C4]  ">
              <a className="hover:scale-[1.2] duration-500" href="">
                New to AuraStream?
              </a>

              <a className="hover:scale-[1.2] duration-500" href="">
                Need help?
              </a>
              <a className="hover:scale-[1.2] duration-500" href="">
                Forgot your password?
              </a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
