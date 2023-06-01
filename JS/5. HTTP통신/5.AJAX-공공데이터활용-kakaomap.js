var map;

window.onload = function(){
    mapPrint();
    // var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    // mapOption = { 
    //     center: new kakao.maps.LatLng(37.5493, 126.9408), // 지도의 중심좌표
    //     level: 10 // 지도의 확대 레벨
    // };

    // map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // // 현재 나의 위치를 확인하고 mapX, mapY 요소에 세팅하기 
    // // 객체 존재 여부 확인
    // if ("geolocation" in navigator) {
    //     /* 위치정보 사용 가능 */
    //     // 현재위치 요청
    //     // getCurrentPosition(성공콜백, 오류콜백)
    //     // 실행하고 기다려주지않고 계속 실행하고 나중에 들어가기때문에 함수를 밖으로 빼던지 안에 밑에 함수를 넣어줘야함
    //     navigator.geolocation.getCurrentPosition(function(position){
    //         doSomething(position.coords.latitude, position.coords.longitude);
    //     });
    // } else {
    //     /* 위치정보 사용 불가능 */
    //     alret('geolocation 지원 불가 - 현재위치를 알 수 없습니다.');
    // }

    let btn = document.querySelector('#btnCampInfo');
    // let 키워드로 선언하면 자동완성됨
    btn.addEventListener('click', function(e){
        // 기본이벤트 제거
        e.preventDefault();

        let campForm = document.querySelector('#campForm');
        let formData = new FormData(campForm);
        
        let url = 'https://apis.data.go.kr/B551011/GoCamping/locationBasedList?';
        let parms = '';
        // key/value pairs 반환
        for(let pair of formData.entries()){
            // console.log('pair[0]', pair[0]);
            // console.log('pair[1]', pair[1]);
            parms += `${pair[0]}=${pair[1]}&`;
        }
        url += parms;
        console.log('url', url);

        // ES6에서
        // url요청 결과를 받아옵니다.
        fetch(url)
        // 요청결과가 성공이라면 문자열을 then으로 넘겨줌
        // 화살표함수에서 한줄인 경우 return문과 {}가 생략 가능
        // 넘겨줘서 문자열을 오브젝트로 바꾸고 한줄인경우 자동으로 오브젝트를 반환
        .then(res => res.json())
        // 반환받은 오브젝트를 가지고 샐행
        .then((json)=>{
            if(json.response.body.items == ''){
                alert('주변에 캠핑장이 없습니다. 반경을 확대해주세요')
                return;
            }

            console.log('json',json);
            printCampInfo(json);
        })
        .catch((err)=>console.log(err));
    });
}

function mapPrint(){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.5493, 126.9408), // 지도의 중심좌표
        level: 10 // 지도의 확대 레벨
    };

    map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 현재 나의 위치를 확인하고 mapX, mapY 요소에 세팅하기 
    // 객체 존재 여부 확인
    if ("geolocation" in navigator) {
        /* 위치정보 사용 가능 */
        // 현재위치 요청
        // getCurrentPosition(성공콜백, 오류콜백)
        // 실행하고 기다려주지않고 계속 실행하고 나중에 들어가기때문에 함수를 밖으로 빼던지 안에 밑에 함수를 넣어줘야함
        navigator.geolocation.getCurrentPosition(function(position){
            doSomething(position.coords.latitude, position.coords.longitude);
        });
    } else {
        /* 위치정보 사용 불가능 */
        alret('geolocation 지원 불가 - 현재위치를 알 수 없습니다.');
    }
}

function doSomething(latitude, longitude){
    // console.log(latitude); // 경도(longitude),X축 37.5493
    // console.log(longitude); // 위도(latitude),Y축 126.9408
    document.getElementsByName('mapX')[0].value = `${longitude}`;
    document.querySelector('input[name=mapY]').value = `${latitude}`;

    // 지도의 중심위치를 변경
    var locPosition = new kakao.maps.LatLng(latitude, longitude);
    // 지도 중심좌표를 접속위치로 변경합니다.
    map.setCenter(locPosition);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
        title: '내위치'
    });
}

// 캠핑장 정보 출력
// 배열을 매개변수로 받아서 배열에 입력된 캠핑장 정보를 화면에 출력합니다.
function printCampInfo(jsObj){
    let resDiv = document.querySelector('#result');
    // div 초기화
    resDiv.innerHTML='';
    resDiv.innerHTML += '<ul>';

    for(let camp of jsObj.response.body.items.item) {
        resDiv.innerHTML += `<li><h1>${camp.facltNm}</h1><p><img src='${camp.firstImageUrl}'></p><p>${camp.intro}</p></li>`;
    }
    resDiv.innerHTML += '</ul>'

    markerInfo(jsObj.response.body.items.item);
}

function markerInfo(camp){
    // 마커를 여러개 생성하기 위해서 위치와 title 객체 배열입니다 
    var positions=[];
    mapPrint();

    for(let mark of camp) {
        positions.push({
            title: mark.facltNm, 
            latlng: new kakao.maps.LatLng(mark.mapY, mark.mapX)
            
        });
    }

    // 마커 이미지의 이미지 주소입니다
    // var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
        
    // for (var i = 0; i < positions.length; i ++) {
        
    //     // 마커 이미지의 이미지 크기 입니다
    //     var imageSize = new kakao.maps.Size(24, 35); 
        
    //     // 마커 이미지를 생성합니다    
    //     var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
        
    //     // 마커를 생성합니다
    //     var marker = new kakao.maps.Marker({
    //         map: map, // 마커를 표시할 지도
    //         position: positions[i].latlng, // 마커를 표시할 위치
    //         title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    //         image : markerImage // 마커 이미지 
    //     });
    // }

    // 데이터에서 좌표 값을 가지고 마커를 표시합니다
    let markers = []

    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    for(let position of positions){
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35); 
        
        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: position.latlng,
            title: position.title,
            image : markerImage // 마커 이미지
        });
        markers.push(marker);
    };
    console.log(markers);
    // 마커 클러스터러를 생성합니다 
    var clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
        minLevel: 10 // 클러스터 할 최소 지도 레벨 
    });
    // 클러스터러에 마커들을 추가합니다
    clusterer.addMarkers(markers);
}