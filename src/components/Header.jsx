/* eslint-disable react/jsx-no-undef */
import { useState } from "react";
import logo from "/assets/brainwave-symbol.svg";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Dropdown from "./Dropdown";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const navigate = useNavigate();

  return (
    <nav className="flex">
      <ContentWrapper
        className={"flex items-center justify-between py-1 pl-2 pr-4"}
      >
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
          onChange={scrollToTop}
        >
          <img src={logo} alt="" width={50} height={20} className="w-13" />
          <h3 className="text-[20px] font-bold capitalize lg:text-xl ">
            Study-<span className="text-purple-500">Mate</span>
          </h3>
        </div>

        <div className="hidden md:flex items-center gap-24 font-code font-bold text-slate-700  transition-colors  ">
          <a
            href="#home"
            className="text-slate-700  hover:text-purple-300"
            onClick={() => navigate("/")}
          >
            Home
          </a>
          <a href="#contact" className="text-slate-700  hover:text-purple-300">
            Contact
          </a>

          <Dropdown />
        </div>

        <a
          href="https://github.com/HarshitGururani/studymate"
          target="_blank"
          className="hidden md:flex button items-center p-2 rounded-xl border  border-purple-300 shadow-md hover:shadow-xl"
        >
          Star this repo
        </a>

        <div
          onClick={toggleNavigation}
          className="relative md:hidden cursor-pointer"
        >
          {openNavigation ? <IoMdClose size={28} /> : <RiMenu2Fill size={24} />}
        </div>
      </ContentWrapper>

      <div className="absolute w-full top-20 z-10">
        {openNavigation && (
          <div className="flex flex-col items-center py-4 border border-slate-300 rounded-lg  bg-black text-white gap-6">
            <a href="#home" onClick={() => setOpenNavigation(false)}>
              Home
            </a>
            <a href="#contact" onClick={() => setOpenNavigation(false)}>
              Contact
            </a>
            <a href="#sem1" onClick={() => setOpenNavigation(false)}>
              Semester
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Header;
