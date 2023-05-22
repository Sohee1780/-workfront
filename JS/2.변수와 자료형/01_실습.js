// 웹브라우저 내의 모든 요소가 준비가 된 이후 실행
window.onload = function(){
    let r = parseInt(Math.random()*256);
    let g = parseInt(Math.random()*256);
    let b = parseInt(Math.random()*256);
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
}
function setColor(){
    let r = parseInt(Math.random()*256);
    let g = parseInt(Math.random()*256);
    let b = parseInt(Math.random()*256);
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
}
// setColor();