// images/morning.jpg
// 만약 현재 시간이 12시 이전이면 모닝
// 아니면 애프터눈
window.onload = ()=>{
    let imgNode = document.createElement('img');
    
    let date = new Date();

    let h1 = document.querySelector('h1');
    let p = document.createElement('p');
    let timeNode;
    

    window.setInterval(()=>{
        let date1 = new Date();
        timeNode = document.createTextNode(`${date1.getHours()} : ${date1.getMinutes()} : ${date1.getSeconds()}`);
        console.log(timeNode);
    },1000);

    if(date.getHours()>12){
        imgNode.src = 'images/afternoon.jpg';
    } else {
        imgNode.src = 'images/morning.jpg';
    }
    imgNode.setAttribute('width','300px');
    imgNode.setAttribute('height','200px');
    container.appendChild(imgNode);
}