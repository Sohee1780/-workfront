window.onload = ()=>{
    const bttn = document.querySelector('#bttn');
    const notiBox = document.querySelector('#noti-box');

    // 버튼이 클릭되면 실행시킬 함수를 정의
    bttn.addEventListener('click', function(){
        let div = document.createElement('div');
        div.classList.add('noti');
        div.innerHTML='알림내용 표시';

        notiBox.appendChild(div);

        window.setTimeout(()=>{
            div.remove();
        },3000);
    });
    
}