import React from "react";

export const TrendingList = ({ author, title }) => {
  return (
    <>
      <div className="mt-4 flex items-center">
        <div>
          <p className="text-gray-500 text-[14px] mb-1">
            {author || "No author specified"}
          </p>
          <h1 className="font-medium pr-2">{title}</h1>
        </div>
      </div>
    </>
  );
};
