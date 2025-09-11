import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbBellRinging } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Home</span>
            <span className="text-gray-400">›</span>
            <span className="font-medium text-indigo-900">Dashboard V2</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative bg-blue-50">
              <FiSearch className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              <input
                id="Search"
                type="text"
                placeholder="Search anything..."
                className="rounded-md border border-blue-400 py-2 pr-4 pl-10 text-sm focus:border-transparent focus:ring-2 focus:ring-blue-500 md:w-64 lg:w-lg"
              />
            </div>
            <button className="text-slate-500">
              <MdOutlineKeyboardArrowDown className="h-6 w-6" />
            </button>
            <button className="text-slate-400">
              <TbBellRinging className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-slate-400 p-1.5 text-white">
                <FaUser size={17} />
              </div>
              <p className="text-slate-500">Sakshi Jaiswal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
