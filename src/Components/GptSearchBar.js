import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/languageConstannts";
import { useRef } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { addGptMovieResult } from "../Utils/GPTSlice";
import gemini from "../Utils/gemini";
// import openai from "../Utils/openai";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const responsData = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&page=1",
      API_OPTIONS
    );

    const json = await responsData.json();

    return json.results;
  };

  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);

    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   searchText.current.value +
    //   "only give names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Kungfu Panda";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // console.log(gptResults);

    //----------------------------------------------------------------------------------------------------------

    // For text-only input, use the gemini-pro model
    const model = gemini.getGenerativeModel({ model: "gemini-pro" });

    const prompt =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      "only give names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Kungfu Panda";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    // ---------------------------------------------------------------------------------------------------------

    const moviesList = text.split(",");

    const promiseArray = moviesList.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieName: moviesList, movieResult: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] -mt-10 flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].getSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
