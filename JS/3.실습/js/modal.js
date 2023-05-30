window.onload = function() {
    document.querySelector('#open').addEventListener('click', function(){
        // 모달창 열기
        document.querySelector('#modal-box').classList.add('active');
    });
    document.querySelector('#close').addEventListener('click', function(){
        // 모달창 닫기
        document.querySelector('#modal-box').classList.remove('active');
    });

    function test(){
      // 내부함수 외부에서 호출 불가
    }
}
//   function popup(){
//     // 파일경로
//     let url = 'modal.html';
//     let name = 'popup test';
//     let option = 'width=500, height=500, top=100, left=200';
//     // 페이지경로, 팝업창이름, 옵션
//     window.open(url, name, option);
//   }
// 옛날 방법
