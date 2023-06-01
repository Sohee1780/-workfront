var longitude1=0;
var latitude1=0;
    // 현재 나의 위치를 확인하고 mapX, mapY 요소에 세팅하기 
    // 객체 존재 여부 확인
    if ("geolocation" in navigator) {
        /* 위치정보 사용 가능 */
        // 현재위치 요청
        // getCurrentPosition(성공콜백, 오류콜백)
        // 실행하고 기다려주지않고 계속 실행하고 나중에 들어가기때문에 함수를 밖으로 빼던지 안에 밑에 함수를 넣어줘야함
        navigator.geolocation.getCurrentPosition(function(position){
            doSomething(position.coords.longitude, position.coords.latitude);
        });
    } else {
        /* 위치정보 사용 불가능 */
        alret('geolocation 지원 불가 - 현재위치를 알 수 없습니다.');
    }

window.onload = ()=>{
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(37.5493, 126.9408), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
    
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    
    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(37.5493, 126.9408); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    
    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);    
}

function doSomething(longitude, latitude){
    longitude1=longitude;
    latitude1=latitude;
}