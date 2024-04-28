const VideoTitle = ({ title, overview }) => {
  return (
    // bg-gradient-to-r from-black
    <div className="w-[100%] aspect-video pt-[20%] px-20 absolute text-white z-10">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3"> {overview} </p>
      <div>
        <button className="bg-white text-black p-4 px-8 mr-2 text-xl rounded-lg hover:bg-opacity-80">
          ► Play
        </button>
        <button className="bg-gray-500 hover:bg-opacity-80 text-white p-4 px-8  text-xl  rounded-lg">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
