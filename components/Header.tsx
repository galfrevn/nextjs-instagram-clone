import { ChatAltIcon, HeartIcon, PlusCircleIcon, SearchIcon, UserGroupIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import ProfileIcon from './ProfileIcon'

import Image from "next/image";
import Link from "next/link";

function Header() {

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50 px-4">
      <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <Link href="/" >
          <div className="relative w-24 hidden lg:inline-grid cursor-pointer">
            <Image
              src="https://links.papareact.com/ocw"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>

        <Link href="/" >
          <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
            <Image
              src="https://links.papareact.com/jjm"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>

        {/* Middle - Search input field */}
        <div className="max-w-xs">
          <div className="mt-1 relative p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-0 focus:border-gray-300"
              type="text"
              placeholder="Search for"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
        <Link href="/" >
          <HomeIcon className="navBtn" />
        </Link>
          <div className="relative navBtn">
            <ChatAltIcon className="navBtn" />
            <div className="absolute -top-2 -right-2.5 text-white text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
              3
            </div>
          </div>

          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <ProfileIcon />
          
        </div>
      </div>

      

    </div>
  );
}

export default Header;
