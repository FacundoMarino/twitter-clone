import { useSession } from "next-auth/react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineGif } from "react-icons/ai";
import { BsEmojiSmile, BsImage } from "react-icons/bs";
import { RiBarChart2Line } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { useInput } from "@/hooks/useInput";

export const Input = () => {
  const [loading, setLoading] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const { data: session } = useSession();
  const { startPost } = useInput();

  const addImagetoPost = (event) => {
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const sendPost = () => {
    if (loading) return;

    setLoading(true);

    startPost(input, selectedFile);

    resetHandler();
  };

  const resetHandler = () => {
    setLoading(false);
    setInput("");
    setSelectedFile(null);
    setShowEmojis(false);
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  return (
    <div className={`mt-4 px-4 ${loading && "opacity-60"}`}>
      <div className="grid grid-cols-[48px, 1fr] gap-4 ">
        <div>
          <img
            src={session?.user?.image}
            alt="avatar"
            className="h-12 w-12 rounded-full object-contain"
          />
        </div>

        <div className="w-[90%]">
          <textarea
            className="w-[100%] bg-transparent outline-none text-[20px]"
            rows="2"
            placeholder="What happening?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          {selectedFile && (
            <div className="relative mb-4">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover: [#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
              >
                <AiOutlineClose className="text-white h-5" />
              </div>

              <img
                src={selectedFile}
                alt="imagen-subida"
                className="rounded-2x1 max-5-80 object-contain"
              />
            </div>
          )}

          {!loading && (
            <div className="flex justify-between items-center">
              <div className="flex gap-4 text-[20px] text-[#1d9bf0] ">
                <div className="border-[#1d96f0] border rounded h-[18px] text-[16px] grid place-items-center ">
                  <AiOutlineGif />
                </div>
                <RiBarChart2Line className="rotate-90" />
                <BsEmojiSmile
                  className="cursor-pointer"
                  onClick={() => setShowEmojis(!showEmojis)}
                />
                <IoMdCalendar />
                <HiOutlineLocationMarker />
              </div>
              <button
                className="bg-[#1d96f0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d96f0] disabled:opacity-50 disabled:cursor-default"
                disabled={!input.trim() && !selectedFile}
                onClick={sendPost}
              >
                Tweet
              </button>
            </div>
          )}

          {showEmojis && (
            <div className="absolute mt-[10px] -ml-[40px] max-w-[320px] rounded-[20px] ">
              <Picker onEmojiSelect={addEmoji} data={data} theme="dark" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
