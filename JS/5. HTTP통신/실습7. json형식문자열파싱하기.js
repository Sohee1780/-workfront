window.onload = ()=>{
    let regi = document.querySelector('#btn1'); // <- 지역변수

    // 버튼이 클릭되면
    // json형식 문자열을 파싱해서 화면에 출력
    regi.addEventListener('click', function(e){
        // 기본이벤트 제거
        e.preventDefault();

        // 반복문을 이용하여 배열에 들어있는 데이터를 출력
        
        // 화면에 출력
        for(let js of jsObj){
            // 테이블의 행을 생성
            let tr = document.createElement('tr');
            // 테이블의 한칸을 생성
            let newTdName = document.createElement('td');
            newTdName.innerHTML = js.name;
            let newTdMajor = document.createElement('td');
            newTdMajor.innerHTML = js.major;
            let newTdGrade = document.createElement('td');
            newTdGrade.innerHTML = js.grade;
    
            // 행에 자식요소로 칸을 추가
            tr.appendChild(newTdName);
            tr.appendChild(newTdMajor);
            tr.appendChild(newTdGrade);
    
            let tbody = document.querySelector('#attendant > tbody');
            // 테이블의 자식요소로 행을 추가
            tbody.appendChild(tr);
        }
    });
}

// json형식의 문자열 생성
// { "키" : 값, "키" : 값, ...}
// json문자열 안에 또다른 json문자열을 지정 할 수 있다.

// json형식의 문자열 + 배열
// []안에 json형식의 문자열을 ,를 이용하여 추가
// jsonStr <- 함수 밖에서 선언했으므로 전역변수로 사용될 수 있다
let jsonStr = `
[
    {
        "name" : "도레미",
        "major" : "컴퓨터 공학",
        "grade" : 2
    },
    {
        "name" : "솔라시",
        "major" : "컴퓨터 공학",
        "grade" : 1
    },
    {
        "name" : "레미파",
        "major" : "컴퓨터 공학",
        "grade" : 3
    },
    {
        "name" : "미파솔",
        "major" : "컴퓨터 공학",
        "grade" : 4
    }
]`; 

// jsObj로 변경
let jsObj = JSON.parse(jsonStr);
