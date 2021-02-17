import { useEffect, useState } from "react";
import Search from "./components/search/search";
import VideoList from "./components/video__list/video__list";
import styles from "./app.module.css";
import VideoDetail from "./components/video__detail/video__detail";
import BestVideo from "./components/bset__video/best__video";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [bestVideo, setBestVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectvideo = (video) => {
    setSelectedVideo(video);
  };

  const onSearch = (qury) => {
    setSelectedVideo(null);
    youtube.search(qury).then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube.mostPopular(1).then(bestVideo => setBestVideo(bestVideo))
    youtube.mostPopular(24).then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <>
      <Search onSearch={onSearch} />
      <section className={styles.content}>
        <div className={styles.bestVideo}>
          <BestVideo bestVideo={bestVideo}/> 
        </div>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            selectedVideo={selectvideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </>
  );
}
export default App;
