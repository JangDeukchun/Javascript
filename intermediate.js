// 변수 : let const var
// var 와 let 은 크게 다르지 않다.
// var 는 한번 선언 된 변수를 다시 선언할 수 있다.
// var 로 선언한 모든 변수는 최상위 코드인것처럼 동작한다. (호이스팅)
// let 과 const는 TDZ의 영향을 받아 할당하기 전에 사용할 수 없다.

// 변수의 생성과정. 1. 선언단계 2.초기화 단계 3. 할당 단계 

// let name;
// name = 'mike'; 가능

// var age;
// age = 30; 가능


// const gender;
// gender = 'male'; 불가능

// var 로 선언한 변수는 if 밖에서도 사용 가능 but let과 const는 사용 불가능
// var 도 함수에서 선언하면 밖에서 사용 불가능
//////////////////////////////////////////////////////////////////////////////////

// 생성자 함수 : 첫글자를 대문자로 사용 new 연산자를 사용하여 호출 붕어빵 틀이라고 생각하면 됨 ( 파이썬의 클래스??)

// function Item(title, price){
//     this.title = title;
//     this.price = price;
//     this.showPrice = function(){
//         console.log(`가격은 ${price}원 입니다`);
//     }    

// }

// const Item1 = new Item('인형', 3000);
// const Item2 = new Item('가방', 3000);
// const Item3 = new Item('인형', 3000);

// console.log(Item1,Item2,Item3);

// Item3.showPrice()
//////////////////////////////////////////////////////////////////////////////////

// 객체 메소드
// let n = 'name';
// let a = 'age'

// const user = {
//     [n] : 'mike',
//     [a] : 30,
//     [1+4] : 5,
// };

// console.log(user);

// function makeObj(key, val){
//     return{
//         [key] : val
//     }
// }

// const obj = makeObj('성별', 33);
// console.log(obj);
// let arr = [ ['mon', '월']
//             ['tue', '화']
// ]

// const user2 = Object.assign({},user)  // user를 복제한다
// const result = Object.entries(user); // 배열로 담는다
// const result = Object.fromEntries(arr); // 배열을 객체로 만든다
// console.log(user2)
// user2.name = 'tom'
//////////////////////////////////////////////////////////////////////////////////

// 심볼 : 특정 개체에 원본 데이터는 손상시키지 않고 추가할 수 있다.
// const a = Symbol(); // 유일한 식별자이다
// const b = Symbol();
// console.log(a===b); // false

// Symbol.for() : 전역심볼 하나의 심볼만 보장받을 수 있다. 없으면 만들고, 있으면 가져온다 하나의 키를 생성한 뒤에 키를 통해 같은 Symbol 을 공유

// //다른 개발자가 만들어 놓은 객체
// const user = {
//     name: 'mike',
//     age: 30
// }

// // 내가 작업
// //user.showname = function() {};
// const showname = Symbol('show name');
// user[showname] = function() {
//     console.log(this.name)
// };

// user[showname]() ;

// // 사용자가 접속하면 보는 메세지
// for (let key in user){
//     console.log(`His ${key} is ${user[key]}`)
// }
//////////////////////////////////////////////////////////////////////////////////

// 숫자 수학
// 10진수 -> 2진수 /16진수
// let num = 10;
// num.toString();
// num.toString(2);

// 자바스크립트에서 제공하는 Math 모듈이 있다.
//////////////////////////////////////////////////////////////////////////////////

// 문자열 메소드
// '',"" : 큰 차이가 없다
// `` : ${} 이용해 값을 넣을 수 있다.
// length 로 문자열 길이를 구할 수 있다.
// 문자열은 배열과 다르게 한글자만 바꿀 순 없다.

// let list = [
//     "01. 들어가며",
//     "02. js의 역사",
//     "03. 자료형",
//     "04. 함수",
//     "05, 배열"
// ];

// let newList = [];

// for (let i = 0; i < list.length; i ++){
//     newList.push(lsit[i].slice(4));
// }

// console.log(newList)

// // 금칙어 : 콜라

// function hasCola(str){
//     if(str.indexOf('콜라')){
//         console.log('금칙어가 있습니다');
//     }
//     else{
//         console.log('통과');
//     }
// }

// hasCola('와 사이다가 짱이야'); // -1
// hasCola('무슨소리, 콜라가최고'); //   
// hasCola('콜라'); // 0
//////////////////////////////////////////////////////////////////////////////////

// 배열 메소드
// a = ['총','칼']
// a.push() : 뒤에 삽입
// a.pop() : 뒤에 삭제
// a.unshift() : 앞에 삽입
// a.shift() : 앞에 삭제
// a.splice(n,m) : 삭제된 요소 반환
// a.silce(n,m): n부터 m까지 반환
// a.concat(arr2,arr3) : 배열을 합쳐서 새 배열 반환
// a.forEach(fn): 배열반복
// a.filter(fn): 만족하는 모든 요소를 배열로 반환
// a.reverse() : 역순으로 재정렬


// let userList = [
//     {name : 'mike', age: 30},
//     {name : 'jane', age: 27},
//     {name : 'tom', age: 10},
// ];

// let newuserList = userList.map((user, index) => {
//     return Object.assign({}, user, {
//         isAdult : user.age > 19,
//     });
// });

// console.log(Array.isArray(a)) // 배열인지 아닌지 확인해준다
//////////////////////////////////////////////////////////////////////////////////

// const a = ['서현식','한동근']
// a.sort() // 배열 재정렬 배열 자체가 변경되니 주의
//배열의 모든 수 합치기
// let arr = [1,2,3,4,5,]
// let result = 0;
// arr.forEach((num)=>{
//     result += num;
// });    == > 15라는 값이 나온다
//////////////////////////////////////////////////////////////////////////////////

// 구조 분해 할당 :배열이나 객체의 값을 분해해서 변수에 담는다
// let users= ['mike','tom','jane'];
// let [user1, user2, user3] = users

// 일부 반환값 무시

// let [user4, ,user5] = ['mike','tom','jane','tony'];

// 객체 구조분해
// let user = {name: 'mike', age:30};
// let{name, age} = user
//////////////////////////////////////////////////////////////////////////////////

// 나머지 매개변수, 전개구문
// argument 
// 함수로 넘어 온 모든 인수에 접근
// 함수내에서 사용 가능한 지역 변수
// length /index
// array 형태의 객체
// 배열 내장 메서드 없음(foreach,map)

// function showname(name){
//     console.log(arguments.length);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
// }
// showname('mike','tom')

// 나머지 매개변수 : 정해지지 않은 개수의 인수를 배열로 나타내게 한다
// function showname(...names){
//     console.log(names);
// }

// showname() // []
// showname('mike') // ['mike']
// showname('mike','tom') // ['mkie','tom']

// 전개구문 : 배열
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// let result = [...arr1,...arr2]
//////////////////////////////////////////////////////////////////////////////////

// 클로저(closure) : 자바스크립트는 어휘적 환경을 가진다 함수가 생성될 시 외부 변수를 기억하고 생성 이후에도 계속 접근 가능하게 한다.

// function makeadder(x){
//     return function(Y){
//         return x + Y;
//     }
// }

// const add3 = makeadder(3);
// console.log(add3(2)); // 5

// const add10 = makeadder(10);
// console.log(add10(5)); //15
// console.log(add3(1)); //4
//////////////////////////////////////////////////////////////////////////////////

// setimout : 일정 시간이 지난 후 함 수 실행 , setInterval : 일정 간격으로 함수 반복
//////////////////////////////////////////////////////////////////////////////////

// call: 모든 함수에서 사용할 수 있으며 this를 특정값으로 지정할 수 있다.

// function showtime() {
//     console.log(this.name)
// }
// showtime.call('mike')

// apply: call과 유사하지만 매개변수를 배열로 받는다.
// bind : 함수이 this값을 영구히 바꿀 수 있다.
//////////////////////////////////////////////////////////////////////////////////

// 상속, 프로토타입

// const car = {
//     wheels: 4,
//     drive (){
//         console.log('drive');
//     }
// }

// const bmw = {
//     color: 'red',
//     navigation: 1,
// };

// const benz = {
//     color : 'black'
// };

// const audi = {
//     color: 'blue'
// };

// bmw.__proto__ = car;
// benz.__proto__ = car;
// audi.__proto__ = car;
//////////////////////////////////////////////////////////////////////////////////

// 클래스 
// class user2{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

// showname(){
//     console.log(this.name)
// }
// }

// const tom = new user2('tom',19)

// 상속
// class car {
//     constructor(color){
//         this.color = color;
//         this.wheels = 4;
//     }
//     drive(){
//         console.log('drive');
//     }
//     stop(){
//         console.log('stop')
//     }
// }

// class bmw extends car{
//     park() {
//         console.timeLog("park")
//     }
// }

// const z4 = new bmw('BLUE')
//////////////////////////////////////////////////////////////////////////////////

// 프로미스 
// const pr  = new Promise ((resolve,reject) => {
//     setTimeout(()=>{
//         resolve('ok')
//     } , 3000)
// });
//////////////////////////////////////////////////////////////////////////////////

// async, awiait : 프로미스 함수를 반환한다
// async function getname() {
//     return Promise.resolve('tom');
//     throw new error('err');
// }

// getname().catch((err)=>{
//     console.log(err);
// });

// awit 함수는 async 함수 내부에서만 사용 할 수 있다.
// async function showname(){
//     const result = await getname('mike');
//     console.log(result);
// }

// console.log('시작')
// showname()
//////////////////////////////////////////////////////////////////////////////////

// generator : 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능

// function* fn(){
//     console.log(1);
//     yield 1;
//     console.log(2);
//     yield 2;
//     return'finish';
// }

// const a = fn();
// 처음에 실행히면 객체만 반환후 재 실행하면 가장 가까운 yield문을 반환한다
