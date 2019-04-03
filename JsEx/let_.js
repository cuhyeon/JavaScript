/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/
let a = 1;
console.log(a); // 1
a = 2; //재할당 가능
console.log(a); // 2
//let a = 3; //재선언이 불가능

//var와는 다르게 재할당은 가능하지만 재선언시 Uncaught SyntaxError: Identifier 'b' has already been declared 오류 발생