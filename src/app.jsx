import { useEffect, useState } from "react";
import Search from "./components/search/search";
import VideoList from "./components/video__list/video__list";
import styles from "./app.module.css";
import VideoDetail from "./components/video__detail/video__detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectvideo = (video) => {
    setSelectedVideo(video);
  };

  const onSearch = (qury) => {
    setSelectedVideo(null);
    youtube.search(qury).then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <>
      <Search onSearch={onSearch} />
      <section className={styles.content}>
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
