import React from "react";

const VideoTitle = ({ title, overView }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-tr from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overView}</p>
      <div className="">
        <button className="bg-white text-black  p-4 px-12 text-lg cursor-pointer rounded-md hover:bg-opacity-80 ">
          Play
        </button>
        <button className="bg-gray-500 mx-2  p-4 px-12 text-lg bg-opacity-50 cursor-pointer rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
