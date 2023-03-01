import Image from "next/image";
import Logo from "../assets/Logo.png";
import EnglandFlag from "../assets/EnglandFlag.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-[#0A2D40] via-[#0C3D44] to-[#0D4947] p-4">
      <div className="flex items-center">
        <div>
          <Image
            src={Logo}
            alt="All Options Logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </div>
        <div className="ml-5">
          <input
            type="text"
            placeholder="Search market..."
            className="rounded-lg p-2 border-2 border-[#3D987F] outline-none bg-transparent"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center cursor-pointer">
          <div className="flex flex-col">
            <p className="text-white text-xl font-semibold">
              <sup className="text-sm text-white px-1.5 py-0.5 bg-[#3D987F] rounded-lg mr-2">
                LIVE
              </sup>
              74257.99 EUR
            </p>
            <p className="text-red-700 text-right">
              <span className="text-white">P/L</span> -159.09 EUR
            </p>
          </div>
          <ChevronDownIcon className="text-white w-8 h-8 ml-2" />
        </div>
        <button className="text-white font-semibold bg-gradient-to-r from-[#11a894] to-[#67E4B6] px-3 py-2 rounded-lg ml-8">
          DEPOSIT
        </button>
        <div className="flex items-center bg-[#0A2D40] rounded-full p-2 ml-8 cursor-pointer">
          <Image src={EnglandFlag} alt="England Flag" width={20} height={20} />
          <ChevronDownIcon className="text-white w-5 h-5 ml-4" />
        </div>
        <UserCircleIcon className="text-[#3D987F] w-8 h-8 cursor-pointer ml-8" />
      </div>
    </header>
  );
};

export default Header;
