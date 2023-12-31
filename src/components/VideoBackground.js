import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerId = useSelector((store) => store?.movies?.trailer?.key);

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&enablejsapi=1&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
