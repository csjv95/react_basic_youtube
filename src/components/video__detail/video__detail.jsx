import React from "react";
import styles from "./video__detail.module.css";

const VideoDetail = (props) => {
  return (
    <section>
      <iframe
        title={props.selectedVideo.id}
        id="ytplayer"
        type="text/html"
        width="720"
        height="405"
        src={`https://www.youtube.com/embed/${props.selectedVideo.id}`}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <h2>{props.selectedVideo.snippet.title}</h2>
      <h3>{props.selectedVideo.snippet.channelTitle}</h3>
      <p>{props.selectedVideo.snippet.description}</p>
    </section>
  );
};

export default VideoDetail;
