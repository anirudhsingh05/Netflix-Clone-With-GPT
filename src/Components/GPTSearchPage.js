import { BACKGROUND } from "../Utils/constants";
import { GptMovieSuggestion } from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GPTSearchPage = () => {
  return (
    <>
      <div className="fixed brightness-50 -z-10">
        <img
          className="h-screen md:h-[100%] object-cover"
          src={BACKGROUND}
          alt="background"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GPTSearchPage;
