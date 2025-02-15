import React, { useEffect, useState } from "react";

const Signup = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bgImages = [
    {
      img: "/images/MovieCollection.jpg",
    },
    {
      img: "/images/MovieCollection2.jpg",
    },
    {
      img: "/images/MovieCollection3.png",
    },
    // Add more image paths here
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="absolute z-1 w-full h-screen bg-[#141414] text-white flex flex-col justify-center items-center">
      <h1 className=" relative z-[3] text-5xl text-white">AuraStream</h1>
      <div
        style={{
          backgroundImage: `url(${bgImages[currentImageIndex].img})`,
          backgroundSize: "fill",
          backgroundPosition: "center",
        }}
        className="fixed  w-full h-screen -z-[1] transition-discrete duration-1000 ease-linear"
      ></div>
      <div className="w-full h-screen absolute z-[2] bg-zinc-900 opacity-60"></div>

      <div className=" relative z-2 w-[900px] h-[600px] backdrop-blur-sm flex flex-col  rounded-xl   p-10 items-center justify-center ">
        <form
          className="w-full flex flex-col items-center justify-center gap-4"
          action=""
        >
          <div className="w-full flex flex-col gap-2 ">
            <header>First Name</header>
            <input
              className=" w-2/3 py-2 px-5 border-2 border-zinc-600 rounded-lg"
              type="text"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <header>Email Address</header>
            <input
              className=" w-2/3 py-2 px-5 border-2 border-zinc-600 rounded-lg "
              type="email"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <header>Password</header>
            <input
              className=" w-2/3 py-2 px-5 border-2 border-zinc-600 rounded-lg "
              type="password"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <header>Confirm Password</header>
            <input
              className=" w-2/3 py-2 px-5 border-2 border-zinc-600 rounded-lg "
              type="password"
            />
          </div>
          <div className="flex gap-2">
            <input
              className="w-4 h-4 bg-transparent border-2 rounded-sm  border-green-500 cursor-pointer appearance-none"
              type="checkbox"
              name=""
              id=""
            />
            <h4 className="text-[14px]">
              I agree to the Terms of Service and Privacy Policy
            </h4>
          </div>
          <button className="w-2/3 bg-[#38E078] rounded-lg py-1.5 hover:scale-[1.1] duration-500">
            Sign Up
          </button>
        </form>
        <footer>
          <h4 className="font-light text-[14px] mt-4">
            By continuing you agree to MovieFlex's Terms of Service and
            acknowledge MovieFlex's Privacy Policy
          </h4>
        </footer>
      </div>
    </div>
  );
};
export default Signup;
