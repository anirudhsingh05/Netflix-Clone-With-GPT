const VideoTitle = ({ title, overview }) => {
  return (
    // bg-gradient-to-r from-black
    <div className="w-[100%] aspect-video pt-[20%] px-5 md:px-20 absolute text-white z-10">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3"> {overview} </p>
      <div>
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-8 mr-2 mt-3 md:mt-0 text-xl rounded-lg hover:bg-opacity-80">
          ► Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 hover:bg-opacity-80 text-white p-4 px-8  text-xl  rounded-lg">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
