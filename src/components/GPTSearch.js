import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { BACKGROUND_IMAGE } from "../utils/constant";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute w-[100vw] h-[100vh] -z-10">
        <img src={BACKGROUND_IMAGE} alt="background" className="w-[100%]" />
      </div>
      <GptSearchBar />
      <GptSuggestions />
    </div>
  );
};

export default GPTSearch;
