import { BACKGROUND } from "../Utils/constants";
import { GptMovieSuggestion } from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="absolute brightness-50 -z-10">
        <img src={BACKGROUND} alt="background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GPTSearchPage;
