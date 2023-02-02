import Image from "next/image";
import React from "react";
import Twitter from "../assets/logo.png";
import Tweet from "../assets/tweet.png";
import {
  RiHome7Fill,
  RiSearchLine,
  RiNotification2Line,
  RiMailLine,
  RiBookmarkLine,
  RiUserLine,
} from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa";

export const LeftSide = () => {
  return (
    <div>
      <div className="pt-8 w-20 border-r h-screen">
        <ul className="w-full flex flex-col items-center justify-center space-y-4">
          <li>
            <div className="h-9 w-9">
              <Image src={Twitter} />
            </div>
          </li>
          <li>
            <div>
              <RiHome7Fill className="h-7 w-7" />
            </div>
          </li>
          <li>
            <div>
              <RiSearchLine className="h-7 w-7" />
            </div>
          </li>
          <li>
            <div>
              <RiNotification2Line className="h-7 w-7" />
            </div>
          </li>
          <li>
            <div>
              <RiMailLine className="h-7 w-7" />
            </div>
          </li>
          <li>
            <div>
              <RiBookmarkLine className="h-7 w-7" />
            </div>
          </li>
          <li>
            <div>
              <FaRegCommentDots className="h-7 w-7" />
            </div>
          </li>
          <li>
            <div>
              <RiUserLine className="h-7 w-7" />
            </div>
          </li>
          <li>
            <div className="w-12 h-12 bg-blue-400 rounded-full p-3">
              <Image src={Tweet} className="h-7 w-7 color-white " />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
