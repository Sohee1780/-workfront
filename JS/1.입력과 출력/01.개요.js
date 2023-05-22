function external(){
    console.log('외부스크립트 실행');
    var result = add(10, 20);
    console.log('result', result);
}
function add(x, y) {
    return x+y;
}