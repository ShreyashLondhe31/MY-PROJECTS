const Header = () => {
  return (
    <>
      <div className="  text-white bg-gradient-to-t flex items-center justify-between px-16  pt-5 ">
        <h1 className="text-4xl font-bold ">MovieFlex</h1>
        <div className="text-base flex gap-10 list-none">
          <li>
            <a href="">Adults</a>
          </li>
          <li>
            <a href="">Kids</a>
          </li>
          <li>
            <a href="">Trends</a>
          </li>
          <li>
            <a href="">Mylist</a>
          </li>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
};
export default Header;
