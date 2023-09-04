import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store?.movies?.topRated);
  const upcomingMovies = useSelector((store) => store?.movies?.upcoming);
  if (!nowPlayingMovies) return;
  return (
    <div className=" bg-black pl-12">
      <div className="-mt-32 relative z-20 bg-opacity-0">
        <Movielist title="Now Playing" movies={nowPlayingMovies} />
      </div>
      <Movielist title="Popular Movies" movies={popularMovies} />
      <Movielist title="Top Rated" movies={topRatedMovies} />
      <Movielist title="Upcoming" movies={upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
