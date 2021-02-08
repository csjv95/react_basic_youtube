import React from "react";
import styles from "./video__item.module.css";

const VideoItem = (props) => (
  <li className={styles.container}>
    <div className={styles.video}>
      <img
        className={styles.thumbnail}
        src={props.video.snippet.thumbnails.medium.url}
        alt={props.video.snippet.title}
      />
      <div className={styles.description}>
        <p className={styles.title}>{props.video.snippet.title}</p>
        <p className={styles.channel}>{props.video.snippet.channelTitle}</p>
      </div>
    </div>
  </li>
);

export default VideoItem;
