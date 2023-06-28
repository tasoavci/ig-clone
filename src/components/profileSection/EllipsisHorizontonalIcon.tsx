import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import post7 from "@/assets/igclone-3rdpost-1st-photo.jpeg";

const EllipsisHorizontonalIcon = () => {
  const [isToggledEllipsisHorizontalIcon, setIsToggledEllipsisHorizontalIcon] =
    useState(false);
  return (
    <div className="flex items-center justify-between border-b-[1px] border-white border-opacity-20 pb-3">
      <div className="flex items-center justify-center">
        <img className=" h-10 w-10 rounded-full" src={post7} alt="post7" />
        <span className="ml-4">tasoavci35</span>
      </div>
      <button onClick={() => setIsToggledEllipsisHorizontalIcon(true)}>
        <EllipsisHorizontalIcon className="h-10 w-10 text-white" />
      </button>
      {isToggledEllipsisHorizontalIcon && (
        <>
          <div
            onClick={() => setIsToggledEllipsisHorizontalIcon(false)}
            className="fixed inset-0 bg-black/50"
          ></div>
          <div className="fixed left-[50%] top-[50%] z-40 h-[35%] w-full translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-[#2c2b2b]">
            <div className="flex h-1/4 w-full cursor-pointer items-center justify-center border-b-[1px] border-white border-opacity-20 p-2 text-[#ED4956]">
              Delete
            </div>
            <div className="flex h-1/4 w-full cursor-pointer items-center justify-center border-b-[1px] border-white border-opacity-20 p-2">
              Go to post
            </div>
            <div className="flex h-1/4 w-full cursor-pointer items-center justify-center border-b-[1px] border-white border-opacity-20 p-2">
              About this account
            </div>
            <div
              onClick={() => setIsToggledEllipsisHorizontalIcon(false)}
              className="flex h-1/4 w-full cursor-pointer items-center justify-center p-2"
            >
              Cancel
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EllipsisHorizontonalIcon;
