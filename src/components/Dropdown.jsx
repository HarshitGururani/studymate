import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

const Dropdown = () => {
  const [dropMenu, setDropMenu] = useState(false);
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
            className="bg-slate-900 text-white rounded-md overflow-hidden"
            onClick={() => setDropMenu(!dropMenu)}
          >
            <li className="cursor-pointer p-3 hover:bg-slate-950">
              <a href="#sem1">Semster 1</a>
            </li>
            <li className="cursor-pointer p-3 hover:bg-slate-950">
              <a href="#sem2">Semster 2</a>
            </li>
            <li className="cursor-pointer p-3 hover:bg-slate-950">
              <a href="#sem3">Semster 3</a>
            </li>
            <li className="cursor-pointer p-3 hover:bg-slate-950">
              <a href="#sem4">Semster 4</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
