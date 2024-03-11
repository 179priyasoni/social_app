"use client";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import {
  Bars3Icon,
  ChatBubbleLeftEllipsisIcon,
  GlobeEuropeAfricaIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";

import { useRouter } from "next/navigation";

const SidebarData = [
  {
    icon: <HomeIcon className="h-6 w-6" />,
    title: "Home",
    path: "/",
  },
  {
    icon: <MagnifyingGlassIcon className="h-6 w-6" />,
    title: "Search",
    path: "",
  },
  {
    icon: <GlobeEuropeAfricaIcon className="h-6 w-6" />,
    title: "Explore",
    path: "/Explore",
  },
  {
    icon: <VideoCameraIcon className="h-6 w-6" />,
    title: "Reels",
    path: "/Reels",
  },
  {
    icon: <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />,
    title: "Messages",
    path: "/Messages",
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: "Notifications",
    path: "/Notifications",
  },
  {
    icon: <PlusCircleIcon className="h-6 w-6" />,
    title: "Create",
    path: "/Create",
  },
  {
    icon: <UserCircleIcon className="h-6 w-6" />,
    title: "Profile",
    path: "/Profile",
  },
];

function Sidebar() {
  const router = useRouter();
  const [itemClick, setItemClick] = useState("/");
  const handleClick = (path: string) => {
    console.log(path, "path");
    router.push(path);
    setItemClick(path);
  };

  useEffect(() => {}, []);

  return (
    <div className="border-t-2 md:border-t-0 md:border-r-2 border-primary-400  md:fixed  h-full overflow-hidden w-full  md:w-20 lg:w-64">
      <div className="py-2 md:py-4 px-2 w-full">
        <div>
          <div className="lg:block hidden text-primary-600 font-bold italic text-xl">
            Instagram
          </div>

          <div className="flex md:flex-col md:gap-5 md:mt-4 justify-evenly md:justify-normal">
            {SidebarData.map((item, index) => (
              <div key={index}>
                <div className="flex md:flex-col gap-2">
                  <div
                    className="flex gap-3 justify-center items-center lg:justify-start cursor-pointer"
                    onClick={() => handleClick(item.path)}
                  >
                    <div
                      className={`rounded-full p-1 flex justify-center items-center ${
                        itemClick === item.path
                          ? "h-8 w-8 font-semibold text-primary-500"
                          : "text-white"
                      }`}
                    >
                      {item.icon}
                    </div>

                    <div
                      // to={item.path}
                      className={`lg:flex hidden  justify-center items-center ${
                        itemClick === item.path
                          ? "font-semibold text-primary-500 shadow-primary-500"
                          : "text-white"
                      }`}
                    >
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
