import Link from "next/link";
import Image from "next/image";
import WebTraderLogo from "../../assets/WebTraderLogo.png";
import { ArrowsUpDownIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/solid";
import { CircleStackIcon } from "@heroicons/react/24/solid";
import { TagIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
      <div className="flex flex-col items-center space-x-2 w-16">
      <div className="mt-5">
        <Link href="/">
          <Image
            src={WebTraderLogo}
            alt="Web Trader Logo"
            width={56}
            height={56}
          />
        </Link>
      </div>

      <div className="mt-5 text-white active:text-blue-700 font-bold">
        <Link href="/">
          <ArrowsUpDownIcon className="w-8 h-8 font-semibold" />
          Trade
        </Link>
      </div>
      <div className="mt-5 text-white active:text-blue-700 font-bold">
        <Link href="/open">
          <ClockIcon className="w-8 h-8" />
          Open
        </Link>
      </div>

      <div className="mt-5 text-white active:text-blue-700 font-bold">
        <Link href="/history">
          <CircleStackIcon className="ml-2 w-8 h-8" />
          History
        </Link>
      </div>

      <div className="mt-5 text-white active:text-blue-700 font-semibold">
        <Link href="/pending">
          <TagIcon className="ml-2 w-8 h-8" />
          Pending
        </Link>
      </div>
      <div className="absolute left-16 h-screen bg-slate-600 -ml-0.5 w-0.5">
      </div>
    </div>
  );
};

export default Sidebar;
