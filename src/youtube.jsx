import { useEffect, useState } from 'react';
import VideoList from './components/video__list/video__list';
import './youtube.css';

function App() {
  const [videos, setVideos] = useState([]);

  // When did mount
  useEffect( ()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key={youtubeKey}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))   // videos값을 업데이트 해준다 setVideos를 통해
      .catch(error => console.log('error', error));
  },[])

  return (
    <VideoList videos={videos} />
  );
}
export default App;
