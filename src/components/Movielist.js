import React from "react";
import MovieCard from "./MovieCard";

const Movielist = ({ title, movies }) => {
  return (
    <div className="px-6 text-white mb-10">
      <h1 className="text-3xl py-4"> {title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
