//사용자로부터 출생년도를 입력받아서
//나이를 출력하는 프로그램

//전역변수
var date = new Date();// 내장객체
var year = date.getFullYear();

function getAge(){
    //블럭레벨
    if(true) {
        //지역변수
        let birth_year = prompt('출생년도를 입력해주세요');
        var age = year-birth_year;
        console.log(`당신의 나이는 ${age}세 입니다.`);
        console.log(birth_year);
    }
}

// var 키워드는 함수 레벨
// console.log(`당신의 나이는 ${age}세 입니다.`);
// let 키워드는 블록 레벨
// console.log(birth_year);

/*
    스코프 : 예약어에 따라 스코프가 달라짐
    함수레벨(var)
        함수 외부에서 참조 불가
    블록레벨(let, const)
        블록 외부에서 참조 불가
    
    * wndml
        예약어를 붙이지 않은 경우
        오류가 발생하지 않으며 전역 변수로 생성됨
*/
// 전역 변수(global variable) : 함수 외부에서 변수를 선언

g_str1 = '전역변수';
var g_str2 = '전역변수';
let g_str3 = '전역변수';

console.log('전역변수 출력=======================');
console.log(g_str1);
console.log(g_str2);
console.log(g_str3);
//window 객체
//브라우조에서 제공하는 브라우저창(window)에 대한 정보를 담고있는 객체
//전역변수 사용 시 'window().변수명' 혹은 'this.변수명'으로 접근 가능
console.log('window.변수명=======================');
console.log(window.g_str1);
console.log(window.g_str2);
console.log(window.g_str3);
console.log('this.변수명=======================');
console.log(this.g_str1);
console.log(this.g_str2);
console.log(this.g_str3);

// 이름을 불러서 호출 해주어야 실행
function test(){
    console.log('전역변수 출력=======================');
    console.log(g_str1);
    // 같은 이름의 지역변수를 선언시 호이스팅에 의해서 undefined로 출력
    console.log(g_str2);
    console.log(g_str3);

    console.log('window.변수명=======================');
    console.log(window.g_str1);
    console.log(window.g_str2);
    console.log(window.g_str3);

    console.log('this.변수명=======================');
    console.log(this.g_str1);
    console.log(this.g_str2);
    console.log(this.g_str3);

    //지역변수(local variable) : 함수 외부에서 접근 불가
    //키워드 없이 선언하면 전역변수 <- 함수가 한번 실행이 되야지만 전역변수로 사용이 가능함
    l_str1 = '지역변수';
    var l_str2 = 'var 지역변수';
    let l_str3 = 'let 지역변수';

    console.log('지역변수 출력(함수 내부)=======================');
    console.log(l_str1);
    console.log(l_str2);
    console.log(l_str3);

    // 전역변수와 동일한 이름의 지역 변수 선언시 지역변수가 우선
    // 상단 출력이 undefined로 나오며 전역변수는 영향을 받지 않음
    // g_str2 = '전역변수 == 지역변수'; // 함수가 실행된 이후 전역변수 값 변경됨

    /* 
        호이스팅(위로 끌어올린다는 의미)
        자바스크립트 파서가 프로그램 실행전에
        변수와 함수의 메모리 공간을 미리 할당하는것
        변수선언문과 함수선언문 유효범위 최상단에 선언(변수는 undefined로 초기화)
        ** 함수가 실행될때 메모리 공간을 확보하면서 변수의 이름을 먼저 할당해둠
           그래서 undefined로 초기화 되고 선언을 밑에서 해도 위에서 사용 가능함
        ** let, const도 호이스팅이 되지만 Temporal Dead ZOne(TDZ)에 위치해 선언 전에 변수 사용 불가
           TDZ : 선언 전에 변수를 사용하는것을 비 허용하는 개념상의 공간
    */ 
    console.log('g_str2 : '+g_str2); 
    // console.log(aaa); // ERR 선언되지 않은 변수는 찾을 수 없음
    var g_str2 = '전역변수 == 지역변수';
    console.log(g_str2);// 지역변수에서 전역변수와 같은 이름으로 재선언

    // 블럭레벨 스코프 테스트
    if(true){
        b_str1 = '블럭선언'; // 전역
        var b_str2 = '블럭선언 var'; // 함수
        let b_str3 = '블럭선언 let'; // 블럭
        // 상수 : 선언과 동시에 초기화, 변경불가
        const b_str4 = '블럭레벨 const'; // 블럭

        console.log(b_str1);
        console.log(b_str2);
        console.log(b_str3);
        console.log(b_str4);
    }

    console.log(b_str1);
    console.log(b_str2);
    // 블럭레벨 스코프(let, const)
    // 블럭 내부에서 선언된 경우, 블럭 외부에서 호출 불가
    // console.log(b_str3);
    // console.log(b_str4);
}
// 함수 내부에서 선언된 지역변수
// console.log('지역변수 출력(함수 외부)=======================');
// console.log(l_str1); <-함수 실행 후 접근 가능
// console.log(l_str2); 에러
// console.log(l_str3); 에러

// 페이지가 로드된 이후 바로 실행
window.onload = function(){
    // 페이지가 모두 로딩되면 실행
    console.log("onload 실행 - 페이지 로딩완료===============")

    // var예약어의 중복선언
    var num = 0;
    console.log(num);
    var num = 10;
    console.log(num);
    
    let num1 = 0;
    // let num1 = 10; let, const 중복선언 불가
    num1 = 10;

    const num2 = 0;
    // num2 = 10; const 변경 불가
}