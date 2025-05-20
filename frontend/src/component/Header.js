import React from "react";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export const Header = () => {
  return (
    <header className="h-16 shadow-md bg-custom-dark-blue fixed w-full z-40">
      <div className=" h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
          <Link to={"/"}>
            <Logo w={90} h={50} />
          </Link>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 bg-custom-dark-orange flex items-center justify-center rounded-r-full text-black">
            <GrSearch />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="relative flex justify-center">
            <div className="text-3xl cursor-pointer  text-custom-dark-ora relative flex justify-center">
              <FaRegCircleUser />
            </div>
          </div>

          <Link to={"/cart"} className="text-2xl relative">
            <span className="text-custom-dark-ora">
              <FaShoppingCart />
            </span>
          </Link>

          <div>
            <Link
              to={"/login"}
              className="px-3 py-1 rounded-full text-black bg-custom-dark-orange hover:bg-orange-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
