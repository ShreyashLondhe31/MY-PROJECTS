const Background = () => {
  return (
    <>
      <div className="w-full h-screen fixed  z-[2]">
        <div className=" absolute top-[5%]  w-full py-10 text-zinc-700 flex justify-center">
          Documents.
        </div>
        <h1 className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 text-[13vw] tracking-tight leading-none">
          Docs
        </h1>
      </div>
    </>
  );
};
export default Background;
