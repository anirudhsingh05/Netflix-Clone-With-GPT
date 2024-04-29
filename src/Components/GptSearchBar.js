import { useSelector } from "react-redux";
import lang from "../Utils/languageConstannts";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] -mt-10 flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-md">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].getSearchPlaceHolder}
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
