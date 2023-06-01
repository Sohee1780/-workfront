window.onload = ()=>{
    const bttn = document.querySelector('#bttn');
    const notiBox = document.querySelector('#noti-box');

    // 버튼이 클릭되면 실행시킬 함수를 정의
    bttn.addEventListener('click', function(){
        // notiBox에 새로운 알림을 추가
        let div = document.createElement('div');
        div.classList.add('noti');
        div.innerHTML='알림내용 표시';

        // 화면에 출력
        // 자식요소로 등록
        notiBox.appendChild(div);

        // 3초후 실행
        window.setTimeout(()=>{
            // 요소 삭제
            div.remove();
        },3000);
    });
    
}