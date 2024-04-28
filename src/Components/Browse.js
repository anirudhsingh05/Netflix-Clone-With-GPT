import useNowPlayingMovie from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import Headers from "./Headers";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Headers />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
