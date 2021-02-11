const Youtube = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const search = (qury) => {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${qury}&type=video&key=AIzaSyBFtWhYKei7L8SA-Hfy_-_oqZMfuT4S1G4`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      ) // key값이 객체인 search api가 중복되기 때문에 키값을 videoId로 덮어써준다
      // .then((items) => props.setVideos(items)) // setVideos에 업데이트하여 videos들을 렌더링 해준다
      .catch((error) => console.log("error", error));
  };

  const mostPopualr = () => {
    return fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=AIzaSyBFtWhYKei7L8SA-Hfy_-_oqZMfuT4S1G4",
      requestOptions
    )
      .then((response) => response.json())
      // .then((result) => props.setVideos(result.items)) // videos값을 업데이트 해준다 setVideos를 통해
      .catch((error) => console.log("error", error));
  };
};

export default Youtube;
