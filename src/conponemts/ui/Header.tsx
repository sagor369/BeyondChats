import { FaBars, FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex gap-4 items-center mb-4">
      <FaBars className="size-5" />
      <div className="join rounded-full bg-gray-300 border border-blue-500 flex items-center p-2 w-full gap-4 ">
        <FaSearch className="join item size-5" />
        <input className="join-item bg-inherit" placeholder="search" />
      </div>
    </div>
  );
};

export default Header;
