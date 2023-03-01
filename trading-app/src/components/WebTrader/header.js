import { VscTriangleDown } from "react-icons/vsc";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import EnglandFlag from "../../assets/EnglandFlag.png";
import { MdAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <header className="absolute left-[390px]">
      <div className="grid grid-cols-2 justify-between mt-2">
        <div className="flex items-center flex-1 border-2 border-blue-500 px-3 py-1.5 rounded-lg">
          <VscTriangleDown className="h-8 w-8 text-red-600 mr-2" />
          <div>
            <p className="text-white font-semibold">EUR/USD</p>
            <p className="text-gray-300">Currencies</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="ml-6">
            <p className="text-white font-semibold">Currency</p>
            <p className="text-blue-500 font-semibold">Eur</p>
          </div>

          <div className="flex items-center ml-6">
            <Image
              src={EnglandFlag}
              alt="England Flag"
              width={32}
              height={32}
            />
            <p className="text-white font-semibold mx-2">EN</p>
            <IoIosArrowDown className="h-6 w-6 text-white" />
          </div>

          <div className="ml-6">
            <button className="bg-blue-500 text-white px-3 py-1.5 font-semibold rounded-lg">
              Deposit
            </button>
          </div>

          <div className="flex items-center ml-6">
            <MdAccountCircle className="text-blue-500 h-10 w-10" />
            <p className="font-semibold text-gray-300 mx-2">250720</p>
            <IoIosArrowDown className="text-white h-6 w-6" />
          </div>
        </div>
      </div>

      <div>
        <hr className="bg-gray-600 mt-4 mb-4" />
      </div>

      <div className="grid grid-cols-2 place-content-center">
        <div className="grid grid-cols-7 place-items-center">
        <div>
          <p className="text-gray-300 font-semibold">Balance</p>
          <p className="text-blue-500 font-semibold">741179.03</p>
        </div>
        <p className="text-gray-300 font-semibold">+</p>
        <div>
          <p className="text-gray-300 font-semibold">Credit</p>
          <p className="text-blue-500 font-semibold">0</p>
        </div>
        <p className="text-gray-300 font-semibold">+</p>
        <div>
          <p className="text-gray-300 font-semibold">P/L</p>
          <p className="text-blue-500 font-semibold">47.01</p>
        </div>
        <p className="text-gray-300 font-semibold">=</p>
        <div>
          <p className="text-gray-300 font-semibold">Equity</p>
          <p className="text-blue-500 font-semibold">74226.04</p>
        </div>
        </div>


        <div className="grid grid-cols-3 place-items-center">
          <div>
            <p className="text-gray-300 font-semibold">Margin</p>
            <p className="text-blue-500 font-semibold">1121.57</p>
          </div>
          <div>
            <p className="text-gray-300 font-semibold">Margin Level</p>
            <p className="text-blue-500 font-semibold">6618.05%</p>
          </div>
          <div>
            <p className="text-gray-300 font-semibold">Free Margin</p>
            <p className="text-blue-500 font-semibold">73104.47</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
