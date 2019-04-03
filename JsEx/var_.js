/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/
var hello='1';
if(true)  {
  var hello = '2';
}
console.log(hello); // 이렇게 같은 변수를 여러번 써도 동작함 
                    // 스코프는 함수범위(function)을 가진다

var a='first hello';
console.log(a);

var a='second hello';
console.log(a); //재선언 가능 
