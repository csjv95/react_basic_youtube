import React from "react";
import styles from "./video__detail.module.css";

const VideoDetail = (props) => {
  return (
    <section className={styles.detail}>
      <iframe className={styles.iframe}
        title={props.selectedVideo.id}
        id="ytplayer"
        type="text/html"
        width="720"
        height="500"
        src={`https://www.youtube.com/embed/${props.selectedVideo.id}?fs=1`}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <h2 className={styles.title}>{props.selectedVideo.snippet.title}</h2>
      <div className={styles.line}></div>
      <h3 className={styles.chanelTitle}>{props.selectedVideo.snippet.channelTitle}</h3>
      <p className={styles.description}>{props.selectedVideo.snippet.description}</p>
    </section>
  );
};

export default VideoDetail;
