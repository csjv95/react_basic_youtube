import React, { memo } from "react";
import VideoItem from "../video__item/video__item";
import styles from "./video__list.module.css";

const VideoList = memo((props) => (
  <ul className={styles.video__list}>
    {props.videos.map((video) => (
      <VideoItem
        key={video.id}
        video={video}
        selectedVideo={props.selectedVideo}
        display={props.display}
      />
    ))}
  </ul>
));

export default VideoList;
