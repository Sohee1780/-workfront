// 페이지가 로드(이벤트 발생) 이후 함수를 실행
window.onload = () => {

    btn1.addEventListener('click', function(){
        // 요소노드 생성
        let elementNode = document.createElement('h3');
        // 텍스트노드 생성
        let textNode = document.createTextNode('안녕하세요');
        // 연결(자식요소로 등록)
        elementNode.appendChild(textNode);
        area1.appendChild(elementNode);

        area1.innerHTML += '<h3>innerHTML로도 가능</h3>'; 
    });

    // 텍스트노드가 없는 요소 노드 방법
    // 요소의 속성을 설정하는 방법
    btn2.addEventListener('click', function(){
        // img 요소 노드 생성
        let imgNode = document.createElement('img');
        
        // 속성 설정하는 방법
        imgNode.src='images/morning.jpg';
        // imgNode.setAttribute('속성이름','값');
        imgNode.setAttribute('width','150px');
        imgNode.setAttribute('height','100px');

        area2.appendChild(imgNode);

        area2.innerHTML+='<img src="images/morning.jpg" width=150px height=100px>';
    });

    // 객체 삭제
    btn3.addEventListener('click', function(e){
        area3.remove();
        // 이벤트가 발생한 요소
        let target = e.target;
        console.log(target);
        // 상위요소를 반환
        console.log(target.parentNode);

        // 상위요소의 자식노드를 삭제
        let delNode = document.getElementById('area1');
        target.parentNode.removeChild(delNode);
    });

    btn4.addEventListener('click',function(){
        // p요소 생성
        let pNode = document.createElement('p');
        // text node 생성
        let textNode = document.createTextNode('신규 노드 추가');
        // 연결
        pNode.appendChild(textNode);
        // 부모요소 선택
        let body = document.querySelector('body');
        // 노드 선택(삽입하고 싶은 위치의 요소를 선택)
        let h1 = document.querySelector('h1');
        // insertBefore(추가할요소, 추가할위치의 요소)
        body.insertBefore(pNode, h1);
        body.appendChild(pNode);
    });
}