import React from 'react';
import styles from './best__video.module.css';

const BestVideo = (props) => {
      return (
        <div className={styles.container}>
        <h2>Best Video</h2>
        <iframe 
        className={styles.iframe}
        title={props.bestVideo.map(video=> video.snippet.title)}
        id="ytplayer"
        type="text/html"
        width="300px"
        height="300px"
        src={`https://www.youtube.com/embed/${props.bestVideo.map(video=> video.id)}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
        <h3>{props.bestVideo.map(video=> video.snippet.title)}</h3>
      </div>
      );
      };

export default BestVideo;