import Image from "next/image";
import React from "react";
import Tweet from "../assets/tweet.png";
import {
  RiHome7Fill,
  RiSearchLine,
  RiNotification2Line,
  RiMailLine,
  RiBookmarkLine,
  RiUserLine,
  RiFileListLine,
} from "react-icons/ri";
import { BsThreeDots, BsTwitter } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

import { SidebarLink } from ".";
import { signOut, useSession } from "next-auth/react";

export const LeftSide = () => {
  const { data } = useSession();

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full border-r border-gray-400 pr-0 xl:pr-8 ">
      <div className="flex items-center justify-center w-14 h-14 hoverEffect p-0 xl:ml-24">
        <BsTwitter className="text-white text-[34px] " />
      </div>

      <div className="space-y-2 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={RiHome7Fill} />
        <SidebarLink text="Explorar" Icon={RiSearchLine} />
        <SidebarLink text="Notificaciones" Icon={RiNotification2Line} />
        <SidebarLink text="Mensajes" Icon={RiMailLine} />
        <SidebarLink text="Bookmarks" Icon={RiBookmarkLine} />
        <SidebarLink text="List" Icon={RiFileListLine} />
        <SidebarLink text="Profile" Icon={RiUserLine} />
        <SidebarLink text="More" Icon={CgMoreO} />
      </div>

      <button className="hidden xl:inline ml-auto bg-[#1d96df] text-white rounded-full w-52 h-[52px] text-lg font-bold hover:bg-[#1a8cd8]">
        Tweet
      </button>

      <div
        className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverEffect xl:ml-auto xl:-mr-5 px-4 py-2"
        onClick={signOut}
      >
        <img
          src={data?.user.image}
          alt="avatar"
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">{data?.user?.name}</h4>
          <h4 className="text-[#6e767d]">@{data?.user?.tag}</h4>
        </div>

        <BsThreeDots className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
};

<div className="w-12 h-12 bg-blue-400 rounded-full p-3">
  <Image src={Tweet} className="h-7 w-7 color-white" alt="twitter" />
</div>;
