import React, { useEffect, useState, useRef } from "react";

import { Grid, Input } from "../../elements";

// head 작성된 kakao map api 불러오기
const { kakao } = window;

const KakaoMapEx = (props) => {
  const container = useRef("");
  // 마커를 담는 배열
  let markers = [];

  // 첫 로드 위치 좌표
  let latitude = 37.5233511349545;
  let longitude = 127.037425209409;

  // 지도 검색 input
  const [value, setValue] = useState("");

  // 지도 검색에 사용될 객체
  const [searchKeyword, setSearchKeyword] = useState("");

  // 검색한 후 장소 정보를 담을 객체
  const [result, setResult] = useState([]);

  const locationOnChange = (e) => {
    setValue(e.target.value);
  };

  const submitKeyword = (e) => {
    setSearchKeyword(value);
  };

  const valueChecker = () => {
    if (value === "") {
      alert("검색어를 입력해주세요.");
    }
  };

  // 검색어가 바뀔 때마다 재 랜더링
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOptions = {
      center: new window.kakao.maps.LatLng(latitude, longitude),
      level: 3,
    };
    // 지도 생성
    const map = new kakao.maps.Map(mapContainer, mapOptions);

    // 장소 검색 객체 생성
    var ps = new kakao.maps.services.Places();

    // 검색 결과 목록이나 마커를 클릭 했을 때 장소명 표출할 infowindow 생성
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    // 키워드로 장소를 검색합니다
    searchPlaces();

    // 키워드 검색을 요청하는 함수
    function searchPlaces() {
      let keyword = searchKeyword;

      if (!keyword.replace(/^\s+|\s+$/g, "")) {
        return false;
      }

      // 장소검색 객체를 통해 키워드로 장소검색을 요청
      ps.keywordSearch(keyword, placesSearchCB);
    }

    // 장소검색이 완료됐을 때 호출되는 콜백함수
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출
        // displayPlaces(data);

        var bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < 5; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);

        // 페이지 번호를 표출
        // displayPagination(pagination);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert("검색 결과가 존재하지 않습니다.");
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert("검색 결과 중 오류가 발생했습니다.");
        return;
      }
    }

    function displayMarker(place, mapOptions) {
      // 마커를 생성하고 지도에 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function (mouseEvent) {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="width:auto;padding:5px;font-size:12px;" _onClick={locationOnChange}>' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
      });

      kakao.maps.event.addListener(marker, "click", function () {
        // 클릭한 위도, 경도 정보를 가져옵니다
        var latlng = place;
        setResult(latlng);
        props.propFunction(latlng);
      });
    }

    function setCenter() {
      // 이동할 위도 경도 위치를 생성합니다
      var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);

      // 지도 중심을 이동 시킵니다
      map.setCenter(moveLatLon);
    }

    // function panTo(latlng) {
    //   // 이동할 위도 경도 위치를 생성합니다
    //   var moveLatLon = new kakao.maps.LatLng(latlng.getLat(), latlng.getLng());

    //   // 지도 중심을 부드럽게 이동시킵니다
    //   // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    //   map.panTo(moveLatLon);
    // }

    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다

    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      var latlng = mouseEvent.latLng;

      var moveLatLon = new kakao.maps.LatLng(latlng.getLat(), latlng.getLng());

      map.panTo(moveLatLon);
    });

    // 검색 결과 목록과 마커를 표출하는 함수
    // function displayPlaces(places) {
    //   const listEl = document.getElementById('places-list'),
    //     resultEl = document.getElementById('search-result'),
    //     fragment = document.createDocumentFragment(),
    //     bounds = new kakao.maps.LatLngBounds();

    //   // 검색 결과 목록에 추가된 항목들을 제거
    //   listEl && removeAllChildNods(listEl);

    //   // 지도에 표시되고 있는 마커를 제거
    //   removeMarker();

    //   for (var i = 0; i < places.length; i++) {
    //     // 마커를 생성하고 지도에 표시
    //     let placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
    //       marker = addMarker(placePosition, i, undefined),
    //       itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성

    //     // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
    //     // LatLngBounds 객체에 좌표를 추가
    //     bounds.extend(placePosition);

    //     // 마커와 검색결과 항목에 mouseover 했을때
    //     // 해당 장소에 인포윈도우에 장소명을 표시
    //     // mouseout 했을 때는 인포윈도우를 닫기
    //     (function (marker, title) {
    //       kakao.maps.event.addListener(marker, 'mouseover', function () {
    //         displayInfowindow(marker, title);
    //       });

    //       kakao.maps.event.addListener(marker, 'mouseout', function () {
    //         infowindow.close();
    //       });

    //       itemEl.onmouseover = function () {
    //         displayInfowindow(marker, title);
    //       };

    //       itemEl.onmouseout = function () {
    //         infowindow.close();
    //       };
    //     })(marker, places[i].place_name);

    //     fragment.appendChild(itemEl);
    //   }

    //   // 검색결과 항목들을 검색결과 목록 Element에 추가
    //   listEl && listEl.appendChild(fragment);
    //   if (resultEl) {
    //     resultEl.scrollTop = 0;
    //   }

    //   // 검색된 장소 위치를 기준으로 지도 범위를 재설정
    //   map.setBounds(bounds);
    // }

    // 검색결과 항목을 Element로 반환하는 함수
    // function getListItem(index, places) {
    //   const el = document.createElement('li');
    //   let itemStr = `
    //       <div class="info">
    //         <span class="marker marker_${index + 1}">
    //           ${index + 1}
    //         </span>
    //         <a href="${places.place_url}">
    //           <h5 class="info-item place-name">${places.place_name}</h5>
    //           ${
    //             places.road_address_name
    //               ? `<span class="info-item road-address-name">
    //                 ${places.road_address_name}
    //                </span>
    //                <span class="info-item address-name">
    //              	 ${places.address_name}
    //            	   </span>`
    //               : `<span class="info-item address-name">
    //          	     ${places.address_name}
    //               </span>`
    //           }
    //           <span class="info-item tel">
    //             ${places.phone}
    //           </span>
    //         </a>
    //       </div>
    //       `;

    //   el.innerHTML = itemStr;
    //   el.className = 'item';

    //   return el;
    // }

    // 마커를 생성하고 지도 위에 마커를 표시하는 함수
    function addMarker(position, idx, title) {
      var imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png", // 마커 이미지 url, 스프라이트 이미지
        imageSize = new kakao.maps.Size(36, 37), // 마커 이미지의 크기
        imgOptions = {
          spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
          spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
          offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imgOptions
        ),
        marker = new kakao.maps.Marker({
          position: position, // 마커의 위치
          image: markerImage,
        });

      marker.setMap(map); // 지도 위에 마커를 표출
      markers.push(marker); // 배열에 생성된 마커를 추가

      return marker;
    }

    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    function removeMarker() {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }

    // 검색결과 목록 하단에 페이지번호를 표시는 함수
    // function displayPagination(pagination) {
    //   const paginationEl = document.getElementById('pagination');
    //   console.log(paginationEl);
    //   let fragment = document.createDocumentFragment();
    //   let i;

    //   // 기존에 추가된 페이지번호를 삭제
    //   while (paginationEl.hasChildNodes()) {
    //     paginationEl.lastChild &&
    //       paginationEl.removeChild(paginationEl.lastChild);
    //   }

    //   for (i = 1; i <= pagination.last; i++) {
    //     const el = document.createElement('a');
    //     el.href = '#';
    //     el.innerHTML = i.toString();

    //     if (i === pagination.current) {
    //       el.className = 'on';
    //     } else {
    //       el.onclick = (function (i) {
    //         return function () {
    //           pagination.gotoPage(i);
    //         };
    //       })(i);
    //     }

    //     fragment.appendChild(el);
    //   }
    //   paginationEl.appendChild(fragment);
    // }

    // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수
    // 인포윈도우에 장소명을 표시
    function displayInfowindow(marker, title) {
      const content =
        '<div style="padding:5px;z-index:1;" class="marker-title">' +
        title +
        "</div>";

      infowindow.setContent(content);
      infowindow.open(map, marker);
    }

    // 검색결과 목록의 자식 Element를 제거하는 함수
    function removeAllChildNods(el) {
      while (el.hasChildNodes()) {
        el.lastChild && el.removeChild(el.lastChild);
      }
    }
  }, [searchKeyword]);

  const markPosition = new window.kakao.maps.LatLng(latitude, longitude);

  // 마커
  // const location = [
  //   [37.56637787425258, 126.97827585270615],
  //   [37.56606939560325, 126.9826002893739],
  //   [37.56581495896049, 126.9752617019476],
  // ];
  // location.map((e) => {
  //   const markerPosition = new kakao.maps.LatLng(e[0], e[1]);
  //   new kakao.maps.Marker({ map, position: markerPosition });
  // });

  // // 지도 초기 화면
  // const options = {
  //   center: new kakao.maps.LatLng(37.56637787425258, 126.97827585270615),
  //   level: 5,
  // };

  // // 키워드 검색 완료 시 호출되는 콜백함수 입니다
  // function placesSearchCB(data, status, pagination) {
  //   if (status === kakao.maps.services.Status.OK) {
  //     // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
  //     // LatLngBounds 객체에 좌표를 추가합니다
  //     var bounds = new kakao.maps.LatLngBounds();

  // for (var i = 0; i < data.length; i++) {
  //   displayMarker(data[i]);
  //   bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
  // }

  //     // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
  //     map.setBounds(bounds);
  //   }
  // }

  // // 키워드로 장소를 검색합니다
  // ps.keywordSearch('이태원 맛집', placesSearchCB);

  // ps.keywordSearch(locationOnChange, placesSearchCB);

  function makeOverListener(map, marker, infowindow) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  return (
    <Grid>
      <div
        id={"map"}
        ref={container}
        style={{
          width: "320px",
          height: "170px",
        }}
      ></div>
      <Input
        search
        width='314px'
        height='45px'
        placeholder='장소를 입력해주세요'
        _onChange={locationOnChange}
        _onClick={() => {
          valueChecker;
          submitKeyword();
        }}
        defaultValue={value}
      />
    </Grid>
  );
};

export default KakaoMapEx;
