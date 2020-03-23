import React, { useState, useEffect } from 'react';
import './FlowerMap.css';
import NavBar from '../../component/Navbar/navigation';

const Main = () => {
  const [flag, SetFlag] = useState(0);

  let map;

  let positions = [
    {
      title: '서울광역시', 
      latlng: new window.kakao.maps.LatLng(37.56667, 126.97806)
    },
    {
      title: '인천광역시', 
      latlng: new window.kakao.maps.LatLng(37.45639, 126.70528)
    },
    {
      title: '대전광역시', 
      latlng: new window.kakao.maps.LatLng(36.35111, 127.38500)
    },
    {
      title: '대구광역시',
      latlng: new window.kakao.maps.LatLng(35.87222, 128.60250)
    },
    {
      title: '부산광역시', 
      latlng: new window.kakao.maps.LatLng(35.17944, 129.07556)
    },
    {
      title: '광주광역시', 
      latlng: new window.kakao.maps.LatLng(35.15972, 126.85306)
    }
  ];

  async function FetchMap() {
    const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
    const options = { // 지도를 생성할 때 필요한 기본 옵션
	    center: new window.kakao.maps.LatLng(35.95,128.25), // 지도의 중심좌표. 
      level: 12 , // 지도의 레벨(확대, 축소 정도)
      tileAnimation : false
    };
    map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      
    let imageSrc = [
      "https://upload.wikimedia.org/wikipedia/ko/e/e2/%EC%84%9C%EC%9A%B8%EC%8B%9C%EC%A7%80%EC%8B%9D%EA%B3%B5%EC%9C%A0115.JPG",
      "https://www.greenpostkorea.co.kr/news/photo/201910/110250_108804_1352.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Yulan_1.JPG/250px-Yulan_1.JPG",
      "https://ojsfile.ohmynews.com/STD_IMG_FILE/2018/0410/IE002314375_STD.jpg",
      "https://ojsfile.ohmynews.com/STD_IMG_FILE/2018/0304/IE002295018_STD.JPG",
      "https://www.news4000.com/news/photo/201905/31743_42714_2133.jpg",
    ]; 

    let iwContent = [
      '<div style="padding:5px;">개나리 </br> 꽃말: 희망, 깊은 정, 조춘의 감격, 달성</div>',
      '<div style="padding:5px;">장미 </br> 사랑, 욕망, 절정, 기쁨, 아름다움</div>',
      '<div style="padding:5px;">백목련 </br> 이루지 못할 사랑</div>',
      '<div style="padding:5px;">목련 </br> 고귀함, 자연애</div>',
      '<div style="padding:5px;">동백꽃 </br> 절조, 애타는 사랑, 신중함, 청렴결백함, 겸손</div>',
      '<div style="padding:5px;">철쭉 </br> 자제, 사랑의 즐거움</div>',
    ]

    for (let i = 0; i < positions.length; i ++) {

      // 마커 이미지의 이미지 크기 입니다
      let imageSize = new window.kakao.maps.Size(30, 40); 
    
      // 마커 이미지를 생성합니다    
      let markerImage = new window.kakao.maps.MarkerImage(imageSrc[i], imageSize); 
    
      // 마커를 생성합니다
      let marker = new window.kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
      });

      let iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
      console.log(iwContent[i]);
      // 인포윈도우를 생성합니다
      let infowindow = new window.kakao.maps.InfoWindow({
          content : iwContent[i],
          removable : iwRemoveable
      });

      // 마커에 클릭이벤트를 등록합니다
      // eslint-disable-next-line no-loop-func
      window.kakao.maps.event.addListener(marker, 'click', function() {
            // 마커 위에 인포윈도우를 표시합니다
            infowindow.open(map, marker);  
      });
    }
    SetFlag(1);
  };

  useEffect(() => {
    if(flag===0){
      FetchMap();
    }
  });

  return (
    <>
      <div className="Map_div">
        <NavBar />
        <div id="map"/>
      </div>
    </>
  );
}

export default Main;
