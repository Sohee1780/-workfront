// 버튼에 onclick='함수명*()'를 입력 후 
// 함수를 실행시키기 위해서 버튼을 클릭합니다.
function typeTest(){
    // document.write('typeTest');
    // alert('typeTest');
    console.log('typeTest');

    // 변수 선언 시 사용되는 키워드
    // var, let, const(상수)
    // 숫자형 : 정수와 실수를 포함
    let age = 20;
    let height = 184.5;

    // 문자열 : 작은따옴표, 큰따옴표로 묶은 데이터
    let name = '문인수';
    // let name = "문인수"; let 중복 선언 불가 
    let name1 = "문인수";
    let name2 = ""; // 빈문자열

    // 논리값 : treu, false
    let check = false;

    // 1. 박스선택
    let area = document.querySelector('#area1');
    // 2. 박스에 값을 입력
    area.innerHTML = '<h4>안녕하세요</h4>';
    // Template literals 템플릿 리터럴
    // "", '' 대신 ``(백팃)을 사용하여 변수를 함께 출력
    area.innerHTML += `name : ${name}, type : ${typeof(name)} <br>`;
    area.innerHTML += `name1 : ${name1}, type : ${typeof(name1)} <br>`;
    area.innerHTML += `name2 : ${name2}, type : ${typeof(name2)} <br>`;
    // area.innerHTML += 'name :' + name + 'type : ' + typeof(name) + '<br>';
    area.innerHTML += `age : ${age}, type : ${typeof(age)} <br>`
    area.innerHTML += `height : ${height}, type : ${typeof(height)} <br>`
    area.innerHTML += `check : ${check}, type : ${typeof(check)} <br>`
}
function typeTest2(){
    console.log('typeTest2');

    // 배열 선언
    let hobbies = ['축구', '농구', '야구'];
    let area2 = document.getElementById('area2');
    area2.innerHTML='객체 테스트<br>';
    area2.innerHTML += `hobbies : ${hobbies}, type : ${typeof(hobbies)}<br>`

    // 변수에 함수를 저장할 수도 있고
    // 매개변수로 함수를 넘겨줄수도 있습니다.
    // 함수 선언 : 익명의 함수를 변수에 저장
    // let testFunc = function(num1, num2)
    // 초기값 지정
    // 매개변수의 개수가 일치하지 않은경우, undefined로 초기화되어 오류가 발생 -> 초기값 지정
    let testFunc = function(num1=0, num2=0){
        console.log(num1);
        console.log(num2);
        return num1+num2;
    }
    // 함수를 실행
    console.log(testFunc(10,20));
    // 매개변수 개수가 일치하지 않아도 실행가능
    console.log(testFunc());
    area2.innerHTML += `testFunc : ${testFunc(10,20)}, type : ${typeof(testFunc)}<br>`

    // 객체타입
    let user = {
        /* 
            속성 : 값,
            속성 : 값,
            ...
        */
       name : '문인수',
       age : 20,
       height : 184.5,
       id : 'test',
       hobbies : ['축구', '농구', '야구']
    };

    console.log(user);
    console.log(user.name);

    area2.innerHTML += `user : ${user}, type : ${typeof(user)}<br>`;
    area2.innerHTML += `null type : ${typeof(null)}<br>`;
    area2.innerHTML += `undefined type : ${typeof(undefined)}<br>`;
}
function plusTest(){
    let test1 = 7+7; // 14
    let test2 = '7'+7; // '77'
    let test3 = 7+7+'7'; // '147'

    let test4 = 7 * '7'; // 49
    let test5 = '7'-3; // 4
    let test6 = '4'/2; // 2
    let test7 = 4%'2'; // 0 
    let test8 = '3' * '7'; // 21
    let test9 = '3' * 'a'; //NaN

    let area = document.getElementById('area3');
    area.innerHTML = `test1 : ${test1}`;
}
function castingTest(){
    let area4 = document.getElementById('area4');

    area4.innerHTML = `${2+'3'}<br>`; // 23
    area4.innerHTML += `${2+Number('3')}<br>`; // 5
    area4.innerHTML += `${String(2)+Number('3')}<br>`; // 23
    area4.innerHTML += `${2+parseInt('3')}<br>`; // 5
    area4.innerHTML += `${2+parseFloat('3')}<br>`; //5

    // 16진수를 10진수로 변환
    // ff : 255
    area4.innerHTML += `${parseInt('ff', 16)}<br>`;
    // 2진수를 10진수로
    area4.innerHTML += `${parseInt('0011', 2)}<br>`;
    // #ff0000 rgb 변환
    let color = '#ff0000';
    let rgb = `rgb(${parseInt(color.substring(1,3),16)},${parseInt(color.substring(3,5),16)},${parseInt(color.substring(5),16)})`;
    area4.innerHTML += `reg : ${rgb}<br>`;
}
function opTest(){
    let area5 = document.getElementById('area5');
    area5.innerHTML = '"==" 연산자 테스트<br><br>';
    area5.innerHTML += `7 == 7 : ${7==7}<br>` ;
    area5.innerHTML += `7 == '7' : ${7=='7'}<br>`;
    area5.innerHTML += `7 != '7' : ${7!='7'}<br>`;  
    area5.innerHTML += `'7' != '7' : ${'7'!='7'}<br><br>`;  

    area5.innerHTML += '"===" 연산자 테스트<br><br>';
    area5.innerHTML += `7 === 7 : ${7==7}<br>` ;
    area5.innerHTML += `7 === '7' : ${7==='7'}<br>` ;
    area5.innerHTML += `7 !== '7' : ${7!=='7'}<br>` ;
    area5.innerHTML += `'7' !== '7' : ${'7'!=='7'}<br>` ;
}

function forTest(){
    // 1~10까지 수를 담고있는 배열 array
    // let num = [1,2,3,4,5,7,8,9,10];
    let num = [10,9,8,7,6,5];

    //for문 출력
    console.log('for======================')
    for(let i=0; i<num.length; i++) {
        console.log(num[i]);
    }
    
    //for(변수 in 객체)
    //반복문 - 객체 키와 값 가져오기
    //반복 변수에 array의 index를 순서대로 담아서 반복시킨다.
    //객체명.속성명, 객체명[속성명]
    console.log('for in===================')
    let student = {
        name : '고경희',
        age :20,
        class : '1'
    };
    //객체의 속성, 속성값을 출력
    for(key in student){
        console.log(key, student[key]);
        // 객체명.속성명 -> 속성명을 알고 있을때 사용
        // console.log(key, student.key); 오류
    }

    //배열.foreEach(function(변수){})
    //배열의 요소를 함수의 매개변수로 전달
    console.log('forEach==================')
    num.forEach(function(i){
        console.log(i);
    });

    console.log('while====================')
    let i = 0;
    while(true){
        i++;
        //짝수이면 출력
        if(i%2==0){
            continue;
        }
        console.log(i);
        if(i>5){
            break;
        }
    }

    //ES6부터 추가된 for문
    console.log('for(let 변수 of 배열)====================')
    for(let element of num) {
        console.log(element);
    }

}