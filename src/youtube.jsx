import { useEffect, useState } from "react";
import Search from "./components/search/search";
import VideoList from "./components/video__list/video__list";
import "./youtube.css";

function App() {
  const [videos, setVideos] = useState([]);

  const onSearch = (qury) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${qury}&type=video&key=AIzaSyBFtWhYKei7L8SA-Hfy_-_oqZMfuT4S1G4`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id : item.id.videoId})))  // key값이 객체인 search api가 중복되기 때문에 키값을 videoId로 덮어써준다 
      .then(items => setVideos(items))  // setVideos에 업데이트하여 videos들을 렌더링 해준다
      .catch(error => console.log('error', error));
  }
  
  // When did mount
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=AIzaSyBFtWhYKei7L8SA-Hfy_-_oqZMfuT4S1G4",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items)) // videos값을 업데이트 해준다 setVideos를 통해
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Search onSearch={onSearch}/>    
      <VideoList videos={videos} />
    </>
  );
}
export default App;
