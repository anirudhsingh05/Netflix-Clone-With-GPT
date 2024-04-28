import { IMG_URL } from "../Utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMG_URL + posterPath} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
