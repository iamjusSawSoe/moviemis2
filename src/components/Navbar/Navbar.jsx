import React, { useRef, useEffect, useState } from "react";
import { logo, close, menu } from "../../assets";
import { navLinks } from "../../constants";
import Button from "../Button";
import { BsSearch } from "react-icons/bs";
import { MdNightsStay } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        navbarRef.current.classList.add("shrink");
      } else {
        navbarRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);

    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  });

  return (
    <nav
      ref={navbarRef}
      className="fixed z-10 top-0 bg-transparent w-full flex justify-between items-center py-4 border-dimWhite px-8 xl:px-[100px] "
    >
      <div className=" flex justify-between  items-center ">
        <img
          src={logo}
          alt="logo"
          className=" w-[80px] h-[80px] object-contain xl:mr-36 mr-16"
        />
        <ul className=" list-none md:flex hidden justify-end items-center flex-1 ">
          {navLinks.map((navLink, index) => (
            <li
              key={navLink.id}
              className={`text-white h-8 leading-8 font-bold text-lg navlink fromLeft hover:text-secondary cursor-pointer ${
                index === navLinks.length - 1 ? "mr-0" : "xl:mr-10 mr-8"
              }`}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `text-secondary border-b-[1px] border-solid border-secondary border-spacing-8 pb-[4.5px]`
                    : undefined
                }
                to={navLink.path}
              >
                {navLink.title}
              </NavLink>
              <Outlet />
            </li>
          ))}
        </ul>
      </div>

      {/* For Smaller Devices */}
      <div className="flex items-center">
        <div className="sm:flex hidden items-center">
          <BsSearch className="text-white leading-9 text-[22px] cursor-pointer absolute m-2 p-1" />
          <input
            type="text"
            name="search"
            value={props.searchValue}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder="Search..."
            className=" h-[35px] pl-9 rounded-full bg-slate-500 border-solid border-2 border-dimWhite outline-none"
            autoComplete="off"
          />
        </div>

        <MdNightsStay className=" text-white text-[23px] mx-8 leading-9 cursor-pointer" />

        <Button text="A" styles="rounded-[100%] px-2 py-0 md:mr-0 mr-8" />

        <div className="md:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prevToggle) => !prevToggle)}
          />

          <div
            className={` ${
              toggle ? "md:hidden flex flex-col" : "hidden"
            } bg-slate-700 absolute top-[6.3rem] right-0 p-6 rounded-3xl min-w-[160px] mx-4 `}
          >
            <ul className=" flex list-none flex-col justify-center items-center flex-1">
              {navLinks.map((navLink, index) => (
                <li
                  key={navLink.id}
                  className={`text-dimSecondary hover:text-secondary cursor-pointer font-bold text-lg mb-4`}
                >
                  {navLink.title}
                </li>
              ))}
            </ul>
            <div className="flex ss:hidden items-center">
              <BsSearch className="text-white leading-9 text-[22px] cursor-pointer absolute m-2 p-1" />
              <input
                placeholder="Search..."
                type="text"
                name="search"
                className=" h-[35px] pl-9 rounded-full bg-slate-500 border-solid border-2 placeholder:text-whiteColor border-dimWhite outline-none"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
