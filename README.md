# Youtube single page application
React를 활용해서 youtube clone!

<details>
<summary>개요</summary>
<div markdown="1">
[1.About the project](#About-the-project)   
[2.Screen Shots](#Screen-Shots)   
[3.Skills](#Skills)  
[4.Create App](#Create-App)   
  * [4.1Youtube Search](#Youtube-Search)
  * [4.2Youtube List](#Youtube-List)
  * [4.3Video Detail](#Video-Detail)
  * [4.4Return To List](#Return-To-List)   

[5.fetch & axios](#fetch-&-axios)   
[6.Acknowledgements](#Acknowledgements)   
</div>
</details></br> 

# About the project
React basic youtube clone
* 검색을 하면 해당 검색어로 비디오 목록을 보여줍니다
* 메인 화면은 youtube에서 인기있는 영상목록을 보여주고 클릭시 해당 영상의 video와 데이터를 보여줍니다 

# Skills
* HTML,CSS
* ReactJS
* fetch/axios

# Screen Shots
* Desktop
  * main ![screenMain](public\images\screenMain.PNG)
  * search ![screenSearch](public\images\screenSearch.PNG)
  * click ![screenClick](public\images\screenClick.PNG)

* Mobile
  * main <img src="public\images\mobileMain.PNG" width="100%" height="100%" alt="mobileMain" />
  * search  <img src="public\images\mobileSearch.PNG" width="100%" height="100%" alt="mobileSearch" />
  * click1 <img src="public\images\mobileClick1.PNG" width="100%" height="100%" alt="mobileClick1" />
  * click2 <img src="public\images\mobileClick2.PNG" width="100%" height="100%" alt="mobileClick2" />

## Create App
다음과 같이 앱을 제작

## Youtube Search

### step 1 
fetch를 통해 get 방식으로 youtube 데이터를 가져와서  (youtube 데이터 안에 qury 키에 값은 우리가 검색하는 값으로 바꿔준다) videos에 담아 VideoList 컴포넌트를 업데이트 해준다

  * Detail
    
    * Search 컴포넌트에서 inuput에 입력갑을 받아 button이 클릭되거나 'Enter'를 하면 작동하는 함수를 만든다
    * input의 값을 받아와서 그 값을 porps의 onSearch에 값을 전달해준다
    * onSearch는 qury란 매개변수를 가지고 있고 youtube API 데이터를 받아온다
    * qury는 youtube api에서 `string q 매개변수는 검색할 검색어를 지정합니다`
    * fetch에서 데이터를 받아올떄 q={검색어}로 받아 온다
    * 받아온 데이터를 videos에 setVideos로 업데이트한다
    * VideoList 컴포넌트가 다시 렌더링 된다

## Youtube List

### setp 1
fetch를 통해 get 방식으로 youtube 데이터를 가져와서 videos에 담아 VideoList 컴포넌트에서 map을 활용하여 전달받은 props.videos를 VideoItem 컴포넌트에 video로 넘겨주어 렌더링을 한다

* Detail

  * const [videos, setVideos] 선언하고 useState([]) 함수를 통해 videos는 []값을 전달 받고 setVideo는 리엑트 useState에서 제공하는 videos의 값을 업데이트할 수 있는 함수를 할당 받는다 
  * VideoList 컴포넌트에 videos([])를 전달
  * useEffet로 컴포넌트가 마운트되면 fetch가 실행되며 setVideos함수 호출하여 값을 할당한다
  * videos에 새로받은 값으로 업데이트한다
  * 업데이트된 videos값이 VideoList로 전달된다
  * VideoItem 값에 전달된다

### step 2
앞에서와 같이 화면에 title을 출력 해봤다면 다른 것도 어렵지 않습니다! fetch를 통해 받아온 데이터를 각각에 컴포넌트에 원하는 방식으로 보여주면 됩니다

* Detail
  * Youtube에서 받아온 props인 viedos의 데이터를 바탕으로 화면에 보여준다
  * videos에 있는 snippet.(title, thumbnails, channelTitle...)등등 원하는데이터를 보여준다
  * 계획한대로 css스타일링을 해준다


## 문제점 
  * 데이터를 받아올떄 비밀키가 그대로 노출되어 있다 (Environment Variables 활용)
  * 앱 컴포넌트안에서 데이터를 받아오고 있다 (데이터만 처리하는 파일을 만들어준다)
  
## 문제점 해결

### Environment Variables
.env 를 활용하여 key 값 숨기기
  * 최상위에 .env를 생성하여 REACT_APP_을 항상 앞에 붙쳐서 변수를 만든다
  * gitignore에서 .env 등록
  * 등록한 변수를 이용하여 불러올때는 process.env.REACT_APP_(변수명)을 사용한다 

### 데이터만 처리하는 파일 만들기
앱 컴포넌트 안에서 데이터를 받아오면 나중에 유닛테스트를 할떄나 앱을 실행시키면 항상 다시 데이터를 받아와야 하기 떄문에 그보다 더상위인 index에만들고 index가 만들어 실행되어지면 거기서 한번만 되도록 만든다
  * 유튜브 데이터만 처리할 파일을 만든다(service/youtube.js)
  * 로직을 작성하고 index파일에 객체를 생성해준다
  * app에 youtube데이터를 주입해준다
  * 앱에서는 이제 보여주기만 한다


## Video Detail
선택된 비디오의 데이터를 받아와서 VideoDetail 화면을 만들어준다

### step 1
 selectedVideo에 클릭된 item의 값을 담아준다 

  * Detail
    * 선택된 비디오가 어떤거인지 알수 있도록 selectedVideo변수에 setSelectedVideo를 이용해서 담아준다 
    * 선택된 비디오의 데이터는 VideoLIst에 VideoItem의 값이다 
    * VideoItem에 클릭 이벤트를 받아 끌어올려 setSelectedVideo에 넣어준다

### step 2
  selectedVideo에 있는 데이터를 VideoDetail에 스타일링해서 보여준다

  * Detail
    * props로 VideoDtail에 selectedVido를 전달해준다
    * 전달받은 props값으로 원하는 값을 사용하고 스타일링 해준다
    * 동영상은 iframe을 사용하고 src="https://www.youtube.com/embed{비디오 아이디}"를 넣어준다


## Return To List
비디오를 선택하고 나면 동영상과 데이터들이 왼쪽편에 보여지는데 검색을 해서 데이터를 받아오면 오른쪽 비디오 리스트들이 변화하는걸 볼수있다 이걸 다시 전체화면으로 바꾸어보자

### step 1 
  앞에서 클릭이 되면 비디오 데이터 화면과 리스트 화면으로 두개로 나누워서 보여지도록 코드를 만들어서 검색을 하면 다시 큰 부분으로 보여주게 만들기

  * Detail
    * selected비디오가 null이면 꽉찬 리스트 null이 아니면 작은 리스트로 보여주는 코드를 만들었다
    * 그러므로 search에 검색을 하기전 null로 초기화를 해도되고 하고난후 null로 값을 바꾸어 줘도 된다


## 렌더링 최적화
  memo와 useCallback을 사용하여 메모이제시션된 콜백을 반환하도록 합니다

## fetch & axios
|제목|fetch|axios|
|-------|------|------|
|import|o|x|
|구형 브라우저 지원|x|o|
|json자동 변환|x|o|
|return값이 Promise 객체|o|o|

위와 같이 둘의 차이점과 공통점이 존재합니다

* fetch
  * fetch는 자바스크립트 내장 라이브러리 이기 때문에 import하지 않고 사용가능합니다
  * fetch는 구형 브라우저를 지원 하지않습니다(internet explorer)
  * fetch는 proimse값을 JSON으로 자동 변환 하지 않습니다
  * fetch는 promise base입니다 
  * React Native같은경우 업데이트가 잦은데 fetch는 라이브러리가 업데이트를 해도 잘 따라간다

* axios
  * axios는 사용할려면 반드시 import 해주어야 합니다
  * axios는 XMLHttpRequest방식으로 구형 브라우저를 지원할 수 있게 해줍니다
  * axios는 promise 값을 자동으로 JSON으로 변환 해줍니다
  * axios는 promise base입니다 
   * React Native같은경우 업데이트가 잦은데 axios는 라이브러리가 업데이트를 못 따라 가능 경우가 생긴다
  * 요청을 중도 Cancel, 응답시간 초과 설정 등의 기능이 있다
  * Error 발생시에 reject 로 response를 전달해 catch로 잡아낼 수 있다.

# Acknowledgements
* Youtube Data Api
* Dream Coding
* google