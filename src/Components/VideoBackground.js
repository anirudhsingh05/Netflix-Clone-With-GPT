import useMovieTrailer from "../Hooks/useMovieTrailer";
import { YOUTUBE_SRC } from "../Utils/constants";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const video = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-[100%]">
      <iframe
        className="w-[100%] aspect-video"
        src={YOUTUBE_SRC + video?.key + "?autoplay=1&cc_load_policy=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
