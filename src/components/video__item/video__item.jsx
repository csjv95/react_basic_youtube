import React from "react";
import styles from "./video__item.module.css";

const VideoItem = (props) => {
  const displayType = props.display === "list" ? styles.list : styles.grid;

  const onClick = () => {
    props.selectedVideo(props.video);
  };

  return (
    <li className={`${styles.container} ${displayType}`} onClick={onClick}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={props.video.snippet.thumbnails.medium.url}
          alt={props.video.snippet.title}
        />
        <div className={styles.description}>
          <p className={styles.title}>
            {props.video.snippet.title.length > 15
              ? `${props.video.snippet.title.substring(0, 15)} ...`
              : props.video.snippet.title}
          </p>
          <p className={styles.channel}>
            {props.video.snippet.channelTitle.length > 15
              ? `${props.video.snippet.channelTitle.substring(0, 15)} ...`
              : props.video.snippet.channelTitle}
          </p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
