import useNowPlayingMovie from "../Hooks/useNowPlayingMovies";
import Headers from "./Headers";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovie();
  return (
    <div>
      <Headers />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
