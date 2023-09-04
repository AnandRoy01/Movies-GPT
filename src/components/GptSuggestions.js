import React from "react";
import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const GptSuggestions = () => {
  const movieName = useSelector((store) => store?.gptSlice?.searchResults);
  const movieData = useSelector((store) => store?.gptSlice?.gptMovieResult);

  if (!movieName) return;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {movieName.map((movie, index) => (
        <Movielist key={movie} title={movie} movies={movieData[index]} />
      ))}
    </div>
  );
};

export default GptSuggestions;
