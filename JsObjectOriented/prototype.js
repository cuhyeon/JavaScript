function Person(name, first, second, third) {
    this.name =  name;
    this.first = first;
    this.second = second;
    }
Person.prototype.sum = function() {
    return 'prototype : ' +(this.first + fhis.second);
}
var kim = new Person('kim', 10, 20);
kim.sum = function() {
    return 'this : ' +(this.first + fhis.second);
}
var lee = new Person('lee', 10, 10);
lee.sum = function() {
    return 'this : ' +(this.first + fhis.second);
}

console.log("kim.sum()",kim.sum());
console.log("lee.sum()",lee.sum());

