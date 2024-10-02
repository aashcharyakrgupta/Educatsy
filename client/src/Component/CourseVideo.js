import React from "react";
import YouTube from "react-youtube";

function CourseVideo({ videoId }) {
  const opts = {
    height: "450",
    width: "1000",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <div>
        <div>
        </div>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </>
  );
}

export default CourseVideo;
