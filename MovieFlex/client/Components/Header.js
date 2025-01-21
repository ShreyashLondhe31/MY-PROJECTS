import Link from "next/link";

const Header = () => {
  console.log();
  return (
    <>
      <div className="relative z-[1]  header-section w-full  text-white flex  items-center justify-between px-16  pt-5  ">
        <h1 className="text-4xl font-bold ">MovieFlex</h1>
        <div className=" gap-10 list-none font-semibold flex ">
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Kids">Kids</Link>
          </li>
          <li>
            <Link href="/Trends">Trends</Link>
          </li>
          <li>
            <Link href="/MyList">My List</Link>
          </li>
        </div>
        <div className="search ">
          <input
            className="px-5 py-2 rounded-md bg-transparent  backdrop-blur-2xl "
            type="text"
            placeholder="Search"
          />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
};
export default Header;
