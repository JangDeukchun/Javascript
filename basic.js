// 변수 : 어떤 정보에 이름을 붙여 저장하고 싶을 때 사용 이미 자바에서 사용하는 변수는 사용할 수 없다.
// const name = "Mike";
// let age = 30;
// let은 선언 후 바꿀 수 있지만 const는 선언 후 바꿀 수 없다.
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// //자료형 
// const name1 = "mike";
// const name2 = 'mike';
// const name3 = `mike`;
// const message = "I'm a boy";
// const message2 = 'I\' m a boy';
// const message3 = `my name is ${message2}`;
// console.log(message2)
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 숫자형
// const age = 30;
// const PI = 3.14;
// const a = name1/2
// console.log(a)
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Boolean
// const a = true;
// const b = false;
// name = 'mike';
// console.log(name == 'mike');

// null 과 undefined : null은 존재하지 않는 값, undefined는 값이 할당되지 않았다.
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// typeof 연산자
// const name = 'mike';
// console.log(typeof 3); 
// console.log(typeof name);
// console.log(typeof true); 
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 대화상자 alert 알려줌 prompt 입력받음 confrim 확인받음
//const name = prompt("이름을 입력하세요.");
//alert("환영합니다," + name+ "님");
///////////////////////////////////////////////////////////////////////////////////////////////////////////

//형변환 
// const mathscore = prompt("수학 몇점?") //prompt 로 받은 문자는 str 이다.
// const engScore = prompt("영어 몇점?")
// const result = (mathscore + engScore) /2; // 숫자형이 아니라도 나누기 같은 식은 숫자형으로 자동 형변환 된다.
// console.log(result)
// String() // 괄호안에 값을 문자형으로 바꿔준다.
// Number() // 괄호안에 값을 숫자형으로 바꿔준다.
// Boolean() // false만 기억하자 false = 숫자 0, 빈 문자열, null, undefined naN
// Number(null) = 0
// Number(undefined) = NaN
///////////////////////////////////////////////////////////////////////////////////////////////////////////

//연산자
// * / + - 순이다
// 증가연산자, 감소연산자 (++, --)
// let num = 10;
// let result = ++num; // num++은 증가시키기 전의 값을 변수에 담는다.
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 비교 연산자, 조건문
// a = 3, a==3, a != 3
// console.log(10>5);
// console.log(10 ==5);
// console.log(10 !=5);
// const a = 1;
// const b = "1";
// console.log(a == b); = true
// console.log(a === b); = false (형식까지 비교해준다)

// age === 10;

// if(age > 19){
//     console.log("안녕하세요");
// }
// else if(age ===19){ console.log('수능 잘치세요')
// }
// else { console.log('안녕히 가세요');
// }
// console.log('---------------------')
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 논리 연산자: || (or) &&(and) !(not)

// const name = "mike";
// const age = 30;

// if(name === '톰' || age > 19){
//     console.log('통과')
// }
// else{
//     console.log('돌아가')
// }

// if(name === 'mike' && age > 19){
//     console.log('통과')
// }

// if(name === '톰'  age > 19){
//     console.log('통과')
// }

// 남자이고, 이름이 mike면 통과
// const gender = 'F';
// const name1 = 'jone';
// const isadult = true;

// if(gender === "M" && name1 === 'mike' || isadult){
//     console.log(통과)
// }
// else {
//     console.log('돌아가')
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 반복문 loop
// for(let i =0; i < 10; i ++){
//     console.log('서현식')
// }

// while(i<10 ){
//     console.log('서현식');
//     i++;
// }

// // do .. while (일단 코드 한번은 실행한다)
// while(true){
//     let anser = confirm(' 계속 할까요?');
//     if(!anser){
//         break;
//     }
// }

// for(let i = 0; i<10; i ++){
//     if(i%2){
//         continue;
//     }
//     console.log(i)
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// switch 문 : 모든 switch 문은 if else로 대체할 수 있다.
// let fruit = prompt('무슨 과일을 사고 싶나요?')

// switch(fruit){
//     case '사과':
//         console.log('100원 입니다')
//         break;
//     case '바나나':
//         console.log('200원 입니다')
//         break;
//     case '딸기':
//         console.log('300원 입니다')
//         break;
//     default :
//         console.log('그런 과일은 없습니다')
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 함수의 기초
// function showError(){
//     altert('에러가 발생했습니다. 다시 시도해 주세요');
// }
// function sayHellow(name){
//     const msg = `Hello, ${name}`;
//     console.log(msg)
// }
// function sayHellow(name){
//     let msg = `Hello, ${name}`;
//     if(name){
//         msg =`hellow ${name}`;
//     }
//     console.log(msg)
// }
// sayHellow("mike");

// // 전역변수와 지역변수
// let msg = 'welcome';
// function sayHellow(name){
//     let msg = 'hello'
//     console.log(msg + ''+ name);
// }
// sayHellow('mike')

// function add(num1, num2){
//     return num1 + num2;
//     }
// const result = add(2,3)
// console.log(result)
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 함수 표현식, 화살표 함수
// // 함수 선언문 : 어디서든 동작 가능
// showError();
// function showError(){
//     console.log('error');
// }

// // 함수 표현식 : 코드에 도달하면 생성
// showError();

// let showError = function(){
//     console.log('error');
// }

// // 화살표 함수
// const add = (numm1,num2) => num1 + num2
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 객체  중괄호로 작성하고 키와 값이 있다.
// const superman = {nmae : 'clark', age : 33}
// console.log(superman.nmae)
// console.log(superman['age'])
// console.log(superman)
// // superman.haircolor = 'black'추가하는 구문
// // superman['hobby'] = 'soccor' 을 추가하는 구문

// function makeObject(name, age){
//     return{
//         name : name,
//         age : age,
//         hobby: 'football'
//     }
// }
// const mike = makeObject('mike',30)

// method : 객체 프로퍼티로 할당 된 함수,  fly가 method이다

// const superman1 = {
//     name : 'clark',
//     age : 30,
//     fly : function(){
//         console.log(`날아갑니다 `)
//     }
// }

// let boy ={
//     name : 'mike',
//     showName: function() {
//         console.log(this.name)
//     }
// };

// let man = boy;
// man.showName() = 'mike'가 나온다
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 배열 : 순서가 있는 리스트
// let student = ['철수','영희']
// console.log(student[0]) // 철수

// let days = ['mon','tue','wed']

// days[1] = '화요일'
// console.log(days.length)
// days.push('thu') 배열 제일뒤 추가
// days.unshift('sun') 배열 제일 앞 추가

// for(let index=0;index<days.length; index++){
//     console.log(days[index]);
// }

// for(let day of days){
//     console.log(day);
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
