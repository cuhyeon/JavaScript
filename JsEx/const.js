/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/
const A='AAA'; // 2. A 상수를 또 선언할 수 있습니다.
{
  const A='BBB';  // 1. 괄호안에 A를 선언해도 A의 범위는 블록 안이기에
  console.log(A); 
}
console.log(A);

//const A='CCC'; //상수를 선언
//hello='DDD';   // 재정의 불가