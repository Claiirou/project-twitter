import React from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  // DotsCircleHorizontalIcon,
  MailIcon,
  // UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

function Sidebar() {
  return (
    <div className="flex justify-between fixed  w-full h-20 shadow-xl z-[100]">
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
              <CollectionIcon className="w-6 h-6" />
              <p>Lists</p>
            </li>
          </Link>
        </ul>
        {/* <div onClick={handleNav} className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
