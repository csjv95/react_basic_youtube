import React from 'react';
import VideoItem from '../video__item/video__item';

const VideoList = (props) => (
    <ul>
      {props.videos.map(video => <VideoItem key={video.id} video={video} />)} 
    </ul>
  );

export default VideoList;