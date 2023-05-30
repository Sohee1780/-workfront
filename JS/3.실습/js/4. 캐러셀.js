var index = 0;
const pics = ['pic-1.jpg','pic-2.jpg','pic-3.jpg','pic-4.jpg','pic-5.jpg', 'pic-6.jpg']; // 이미지 배열 만들기

window.onload = function(){
    // 컨테이너 박스의 배경 화면
    // 배열의 0번째 인덱스값을 넣음
    // 1.컨테이너박스 선택 후 배경이미지 변경
    document.getElementById('container').style.backgroundImage='url(images/'+pics[0]+')';

    // 왼쪽 버튼 클릭
    left.addEventListener('click', function(){
        leftBtn();
    });

    // 오른쪽 버튼 클릭
    right.addEventListener('click', function(){
        rightBtn();
    });
}

// 일정 간격으로 반복적으로 콜백 함수를 실행
// setInterval(콜백함수, 대기시간(일리초), (콜백함수의 인자 나열));
var interval = setInterval(function(){
    rightBtn();
},4000);

function stop(){
    console.log('setInterval 중지');
    clearInterval(interval); // 인터벌 중지 함수
}

function rightBtn(){
    index += 1;
        if(index == pics.length) index = 0;
        document.getElementById('container').style.backgroundImage=`url(images/${pics[index]})`;
}

function leftBtn(){
    index -= 1;
    if(index == -1) index = pics.length-1;
    document.getElementById('container').style.backgroundImage=`url(images/${pics[index]})`;
}