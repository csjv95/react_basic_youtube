import React from "react";
import VideoItem from "../video__item/video__item";
import styles from "./video__list.module.css";

const VideoList = (props) => (
  <ul className={styles.video__list}>
    {props.videos.map((video) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;
