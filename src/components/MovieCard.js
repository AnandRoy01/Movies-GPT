import React from "react";
import { CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="movie card" src={CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
