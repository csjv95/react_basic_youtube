import { useEffect, useState } from "react";
import Search from "./components/search/search";
import VideoList from "./components/video__list/video__list";
import "./app.css";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const onSearch = (qury) => {
    youtube
    .search(qury)
    .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
    .mostPopular()
    .then((videos) => setVideos(videos));
  }, []);

  return (
    <>
      <Search onSearch={onSearch} />
      <VideoList videos={videos} />
    </>
  );
}
export default App;
