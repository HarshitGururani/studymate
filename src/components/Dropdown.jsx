import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const [dropMenu, setDropMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-[120px]" onClick={() => setDropMenu(!dropMenu)}>
      <div className="dropdown w-full relative text-slate-700 z-0 ">
        <div className="flex items-center cursor-pointer">
          Semsters
          {dropMenu ? (
            <MdKeyboardArrowUp size={29} />
          ) : (
            <MdKeyboardArrowDown size={29} />
          )}
        </div>

        <div
          className={`absolute ${
            dropMenu ? "block" : "hidden"
          } transition-opacity w-full top-8 opacity-85  `}
        >
          <ul
            className="bg-slate-900 text-white rounded-md overflow-hidden "
            onClick={() => setDropMenu(!dropMenu)}
          >
            <a
              href="#sem1"
              className="scroll-smooth"
              onClick={() => navigate("/#sem1")}
            >
              <li className="cursor-pointer p-3 hover:bg-slate-950">
                Semster 1
              </li>
            </a>

            <a
              href="#sem2"
              className="scroll-smooth"
              onClick={() => navigate("/#sem1")}
            >
              <li className="cursor-pointer p-3 hover:bg-slate-950">
                Semster 2
              </li>
            </a>
            <a
              href="#sem3"
              className="scroll-smooth"
              onClick={() => navigate("/#sem1")}
            >
              <li className="cursor-pointer p-3 hover:bg-slate-950">
                Semster 3
              </li>
            </a>
            <a
              href="#sem4"
              className="scroll-smooth"
              onClick={() => navigate("/#sem1")}
            >
              <li className="cursor-pointer p-3 hover:bg-slate-950">
                Semster 4
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
