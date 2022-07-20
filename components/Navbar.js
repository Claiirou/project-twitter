import React, { useState } from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  // DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Sidebar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="w-10 h-10">
          <img src="/lune.png" alt="logo" />
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="flex items-center space-x-2 px-4 py-3">
                {" "}
                <HomeIcon className="w-6 h-6" />
                <p>Home</p>
              </li>
            </Link>
            <Link href="/">
              <li className="flex items-center space-x-2 px-4 py-3">
                <HashtagIcon className="w-6 h-6" />
                <p>Explore</p>
              </li>
            </Link>
            <Link href="/">
              <li className="flex items-center space-x-2 px-4 py-3">
                <BellIcon className="w-6 h-6" />
                <p>Notifications</p>
              </li>
            </Link>
            <Link href="/">
              <li className="flex items-center space-x-2 px-4 py-3">
                <MailIcon className="w-6 h-6" />
                <p>Messages</p>
              </li>
            </Link>

            <Link href="/">
              <li className="flex items-center space-x-2 px-4 py-3">
                <BookmarkIcon className="w-6 h-6" />
                <p>Bookmarks</p>
              </li>
            </Link>

            <Link href="/">
              <li className="flex items-center space-x-2 px-4 py-3">
                <UserIcon className="w-6 h-6" />
                <p>Profil</p>
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#001021] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <div className="w-10 h-10">
              <img src="/lune.png" alt="logo" />
            </div>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="py-28 flex flex-col items-center">
            <ul className="uppercase">
              <Link href="/">
                <li className="flex items-center space-x-2 px-4 py-6">
                  {" "}
                  <HomeIcon className="w-6 h-6" />
                  <p>Home</p>
                </li>
              </Link>
              <Link href="/">
                <li className="flex items-center space-x-2 px-4 py-6">
                  <HashtagIcon className="w-6 h-6" />
                  <p>Explore</p>
                </li>
              </Link>
              <Link href="/">
                <li className="flex items-center space-x-2 px-4 py-6">
                  <BellIcon className="w-6 h-6" />
                  <p>Notifications</p>
                </li>
              </Link>
              <Link href="/">
                <li className="flex items-center space-x-2 px-4 py-6">
                  <MailIcon className="w-6 h-6" />
                  <p>Messages</p>
                </li>
              </Link>

              <Link href="/">
                <li className="flex items-center space-x-2 px-4 py-6">
                  <BookmarkIcon className="w-6 h-6" />
                  <p>Bookmarks</p>
                </li>
              </Link>

              <Link href="/">
                <li className="flex items-center space-x-2 px-4 py-6">
                  <CollectionIcon className="w-6 h-6" />
                  <p>Lists</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
