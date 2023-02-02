import React from "react";

import { signIn } from "next-auth/react";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  const signInHandler = (event) => {
    event.preventDefault();
    signIn("google");
  };

  return (
    <div className="grid grid-cols-2">
      <div className="bg-[#1d96f0] h-screen grid place-items-center ">
        <BsTwitter className="text-white text-[200px]" />
      </div>

      <div className="grid place-items-center">
        <div
          className="flex gap-4 bg-white p-4 px-4 items-center rounded-[6px] cursor-pointer"
          onClick={signInHandler}
        >
          <FcGoogle className="text-[30px] " />
          SignIn with Google
        </div>
      </div>
    </div>
  );
};
