import React, { useRef } from "react";
import { openai } from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGPTmovieResult, addGptSearchResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query" +
        movie +
        "include_adult=false&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const gptQuery =
    "Act as a movie recommendation system and suggest some query" +
    searchText +
    ". only give me name of 5 movies, comma separated";

  const handleGPTSearchClick = async () => {
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovieArray = gptResult.choices?.[0]?.message?.content?.split(",");
    dispatch(addGptSearchResults(gptMovieArray));
    const promiseArray = gptMovieArray.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGPTmovieResult(tmdbResults));
  };

  return (
    <div className="pt-[10%] flex justify-center flex-col items-center">
      <form className="w-1/2  bg-black grid grid-cols-12 ">
        <input
          ref={searchText}
          onSubmit={(e) => e.preventDefault()}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder="What would like to watch today?"
        />
        <button
          className="p-2 m-4 bg-red-600 text-white rounded-lg col-span-3"
          onClick={handleGPTSearchClick}
        >
          Search
        </button>
      </form>
      <div className="w-1/2  bg-black grid grid-cols-12 ">
        <p className="bg-black p-4 text-white w-1/2  col-span-12">
          example: indian crime thrill movies
        </p>
      </div>
    </div>
  );
};

export default GptSearchBar;
