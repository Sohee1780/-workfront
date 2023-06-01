window.onload = function(){
    // // 현재 나의 위치를 확인하고 mapX, mapY 요소에 세팅하기 
    // // 객체 존재 여부 확인
    // if ("geolocation" in navigator) {
    //     /* 위치정보 사용 가능 */
    //     // 현재위치 요청
    //     // getCurrentPosition(성공콜백, 오류콜백)
    //     // 실행하고 기다려주지않고 계속 실행하고 나중에 들어가기때문에 함수를 밖으로 빼던지 안에 밑에 함수를 넣어줘야함
    //     navigator.geolocation.getCurrentPosition(function(position){
    //         doSomething(position.coords.longitude, position.coords.latitude);
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

        // 현재 나의 위치를 확인하고 mapX, mapY 요소에 세팅하기 
        // 객체 존재 여부 확인
        if ("geolocation" in navigator) {
            /* 위치정보 사용 가능 */
            // 현재위치 요청
            // getCurrentPosition(성공콜백, 오류콜백)
            // 실행하고 기다려주지않고 계속 실행하고 나중에 들어가기때문에 
            navigator.geolocation.getCurrentPosition(function(position){
                doSomething(position.coords.longitude, position.coords.latitude);

                
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
                    console.log('json',json);
                    printCampInfo(json);
                })
                .catch((err)=>console.log(err));
            });
        } else {
            /* 위치정보 사용 불가능 */
            alret('geolocation 지원 불가 - 현재위치를 알 수 없습니다.');
        }
    //     let campForm = document.querySelector('#campForm');
    //     let formData = new FormData(campForm);
        
    //     let url = 'https://apis.data.go.kr/B551011/GoCamping/locationBasedList?';
    //     let parms = '';
    //     // key/value pairs 반환
    //     for(let pair of formData.entries()){
    //         // console.log('pair[0]', pair[0]);
    //         // console.log('pair[1]', pair[1]);
    //         parms += `${pair[0]}=${pair[1]}&`;
    //     }
    //     url += parms;
    //     console.log('url', url);

    //     // ES6에서
    //     // url요청 결과를 받아옵니다.
    //     fetch(url)
    //     // 요청결과가 성공이라면 문자열을 then으로 넘겨줌
    //     // 화살표함수에서 한줄인 경우 return문과 {}가 생략 가능
    //     // 넘겨줘서 문자열을 오브젝트로 바꾸고 한줄인경우 자동으로 오브젝트를 반환
    //     .then(res => res.json())
    //     // 반환받은 오브젝트를 가지고 샐행
    //     .then((json)=>{
    //         console.log('json',json);
    //         printCampInfo(json);
    //     })
    //     .catch((err)=>console.log(err));
    // });
    });
}

function doSomething(longitude, latitude){
    // console.log(latitude); // 경도(longitude),X축 37.5493
    // console.log(longitude); // 위도(latitude),Y축 126.9408
    document.getElementsByName('mapX')[0].value = `${longitude}`;
    document.querySelector('input[name=mapY').value = `${latitude}`;
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
        console.log(camp);
    }
    resDiv.innerHTML += '</ul>'
}