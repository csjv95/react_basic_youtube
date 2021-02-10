import { useEffect, useState } from "react";
import Search from "./components/search/search";
import VideoList from "./components/video__list/video__list";
import "./youtube.css";

function App(props) {
  const [videos, setVideos] = useState([]);

  const onSearch = (qury) => {
    // console.log(props); // 이렇게 하면 콘솔에서 props 값을 보여줌
    // console.log(props.youtube); //이렇게 하면 콘솔에서 props.youtube 값을 보여줌
    // console.log(props.youtube.search(qury)); //분명히 props.youtube까지는 접근이 잘되는데 왜 그안에 있는 search는 안되지.. // 오류 메시지 TypeError: props.youtube.search is not a function // ?? search fuction 맞는데..
     props.then(console.log); 
    // props.youtube.then(console.log); //이건 아에안됨 // 오류 메세지 Cannot read property 'then' of undefined //then 정의?? 
    // props.youtube.search(qury).then(console.log); // 오류 메시지 TypeError: props.youtube.search is not a function
  };

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
      <Search onSearch={onSearch} />
      <VideoList videos={videos} />
    </>
  );
}
export default App;
