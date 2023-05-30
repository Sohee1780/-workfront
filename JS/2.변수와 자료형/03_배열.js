window.onload = function(){
    let area1 = document.getElementById('area1');
    let btn1 = document.getElementById('btn1');

    // btn1 요소에 click이벤트가 발생하면 함수를 실행
    btn1.addEventListener('click', function(){

        // 1.배열을 생성하는 방법
        let array1 = new Array(); // 빈배열 []
        let array2 = new Array(3); // [empty x 3] 빈공간 3개
        let array3 = new Array('빨강', '파랑', '노랑', '초록');
        let array4 = ['java', 'oracle', 'html5', 'css3', 'javascript'];

        console.log('array1', array1);
        console.log('array2', array2);
        console.log('array3', array3);
        console.log('array4', array4);

        // 여러가지 타입을 입력
        let array5 = [
            '고경희',       // 문자
            20,             // 숫자
            true,           // 논리값
            [1, 2, 3, 4],   // 배열
            function() {    // 함수
                return 1;
            },
            {}              // 객체
        ];
        console.log('array5', array5);

        area1.innerHTML += `array1(빈배열)에 값 대입 전: [${array1}], array1.length : ${array1.length}<br>`;
        area1.innerHTML += `array2에 값 대입 전: [${array2}], array1.length : ${array2.length}<br>`;

        // 2.배열에 값을 추가하기
        array1[0] = '귤';
        array1[1] = '사과';
        array1[2] = '자몽';

        console.log('array1', array1);

        area1.innerHTML += `array1(빈배열)에 값 대입 후: [${array1}], array1.length : ${array1.length}<br>`;

        // 배열의 길이를 3으로 지정했지만 자동으로 늘어남
        array2[0] = '자동차';
        array2[1] = '비행기';
        array2[2] = '기차';
        array2[3] = '배';
        area1.innerHTML += `array2에 값 대입 후: [${array2}], array1.length : ${array2.length}<br>`;

    });

    let area2 = document.getElementById('area2');
    let btn2 = document.getElementById('btn2');

    // btn2 요소에 click이벤트가 발생하면 함수를 실행
    // indexOf
    btn2.addEventListener('click', function(){
        let array = ['귤','복숭아','사과','망고','자몽'];
        area2.innerHTML = `array: [${array}]<br>`;
        area2.innerHTML += `복숭아index: [${array.indexOf('복숭아')}]<br>`;// 자몽의 인덱스// 복숭아의 인덱스
        area2.innerHTML += `자몽index: [${array.indexOf('자몽')}]<br>`;// 자몽의 인덱스
    });

    let area3 = document.getElementById('area3');
    let btn3 = document.getElementById('btn3');

    // concat : 결합된 요소를 반환하여 원본에는 영향 X
    btn3.addEventListener('click', function(){
        let array1 = ['귤', '사과'];
        let array2 = ['바나나', '수박', '오렌지'];

        area3.innerHTML += `array1 : [${array1}], array2 : [${array2}]<br>`;
        // 원본에 영향을 미치지 않는다
        area3.innerHTML += `array1.concat(array2) : [${array1.concat(array2)}]`;
    });

    let area4 = document.getElementById('area4');
    let btn4 = document.getElementById('btn4');

    btn4.addEventListener('click', function(){
        area4.innerHTML = '실행';
        let array = ['서울', '강원', '경기'];

        area4.innerHTML += `array : [${array}]<br>`;
        // 배열의 요소를 출력하는데 원하는 구분자를 선택해서 출력할 수 있음
        area4.innerHTML += `array.toString() : [${array.toString()}]<br>`;
        area4.innerHTML += `array.join(' ') : [${array.join(' ')}]<br>`;

        // 배열 -> 문자열
        let str = array.join(' ');
        area4.innerHTML += `array.join(' ') 배열 -> 문자열 : [${array.join(' ')}]<br>`;

        // 문자열 -> 배열
        area4.innerHTML += `str.split(' ') 문자열 -> 배열 : [${str.split(' ')}]<br>`;
    });

    let area5 = document.getElementById('area5');
    let btn5 = document.getElementById('btn5');

    btn5.addEventListener('click', function(){
        // ES6에 추가된 배열 생성 메소드
        let array = Array.of(10, 5, 3, 6);

        area5.innerHTML += `array(reverse 전) : [${array}]<br>`;
        area5.innerHTML += `array.reverse: [${array.reverse()}]<br> 원본에 영향을 미친다.<br>`;

        area5.innerHTML += `array(reverse 후) : [${array}]<br>`;

    });

    let area6 = document.getElementById('area6');
    let btn6 = document.getElementById('btn6');

    // sort
    // 매개변수가 없는 경우 ASCII문자 오름차순으로 정렬
    // 원본 배열에 영향을 미치는 메서드
    btn6.addEventListener('click', function(){
        let array1 = [10, 35, 230, 100];
        let array2 = ['Cherry', 'apple', 'Apple', 'Banana'];

        // 정렬 기준이 없을시 문자 오름차순이라 숫자는 정렬이 제대로 안됨.
        area6.innerHTML += `array1원본 : [${array1}]<br>`;
        area6.innerHTML += `array1.sort() : [${array1.sort()}]<br>`;
        area6.innerHTML += `array2원본 : [${array2}]<br>`;
        area6.innerHTML += `array1.sort() : [${array2.sort()}]<br>`;

        // sort() 메소드에 함수를 매개값으로 전달해서 정렬 기준을 변경할 수 있다.
        array1.sort(function(left, right){
            return left-right; // 오름차순
            // return right-left // 내림차순
        });
        area6.innerHTML += `array1 정렬 기준 지정 : [${array1}]<br>`;
        // reverse 함수로 내림차순
        area6.innerHTML += `array1.reverse()로 내림차순 : [${array1.reverse()}]<br>`;
        area6.innerHTML += `array2.sort().reverse()로 내림차순 : [${array2.sort().reverse()}]<br>`;
    });

    let area7 = document.getElementById('area7');
    let btn7 = document.getElementById('btn7');

    // push(), pop()
    btn7.addEventListener('click', function(){
        let array = ['아이유','GD','방탄소년단','박효신'];

        area7.innerHTML += `array : [${array}]<br>`;
        console.log(array.push('coldplay')); // 배열에 요소를 추가후 배열의 길이를 반환함
        area7.innerHTML += `array : [${array}]<br>`;
        console.log(array.push('임창정')); 
        area7.innerHTML += `array : [${array}]<br>`;

        // 배열의 마지막 요소를 반환하고 제거
        area7.innerHTML += `array.pop() : ${array.pop()}<br>`;
        area7.innerHTML += `array : [${array}]<br>`;

    });

    let area8 = document.getElementById('area8');
    let btn8 = document.getElementById('btn8');

    // shift(), unshift()
    btn8.addEventListener('click', function(){
        let array = ['아이유','방탄소년단','크러쉬', '박효신'];

        area8.innerHTML += `array : [${array}]<br>`;
        console.log(array.unshift('에스파')); // 맨앞의 요소를 추가 후 요소의 개수를 반환함
        area8.innerHTML += `array에 unshift 후 : [${array}]<br>`;
        console.log(array.unshift('NCT127')); 
        area8.innerHTML += `array에 unshift 후 : [${array}]<br>`;

        // 맨 앞의 요소를 반환 후 제거
        area8.innerHTML += `array.shift() : [${array.shift()}]<br>`;
        area8.innerHTML += `array에 shift 후 : [${array}]<br>`;
        area8.innerHTML += `array.shift() : [${array.shift()}]<br>`;
        area8.innerHTML += `array에 shift 후 : [${array}]<br>`;
    });

    let area9 = document.getElementById('area9');
    let btn9 = document.getElementById('btn9');

    // slice(), splice()
    btn9.addEventListener('click', function(){
        let array = ['java','oracle','HTML5','CSS3','JS']

        area9.innerHTML += `[${array}]<br>`;
        // array.slice(시작인덱스, 끝인덱스)
        // 사작인덱스 ~ (끝인덱스-1) 요소를 추출
        // 끝인덱스는 포함하지 않는다.
        // 원본 배열에는 영향을 미치지 않는다.
        area9.innerHTML += `array.slice(0,3) : [${array.slice(0,3)}]<br>`;
        area9.innerHTML += `[${array}]<br>`;

        // array.splice(2,0,'spring','mybatis')
        // 시작인덱스, 삭제할 개수, 추가할요소
        // 원본 배열에 영향을 미친다.
        area9.innerHTML += `array.splice(2,0,'spring','mybatis') : [${array.splice(2,0,'spring','mybatis')}]<br>`;
        area9.innerHTML += `[${array}]<br>`; 
    });
}