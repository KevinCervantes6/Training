"use strict";
// Functions
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
//Normal Function
function print() {
    console.log('Printing...');
}
print();
//Function expression
var myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(7, 3));
//Arrow function
var myMult = function (x, y) {
    return x * y;
};
console.log(myMult(7, 3));
//---------------------
//Spread operators
//---------------------
//Arrays
var numbers = [1, 2, 3, 4];
var numberCopy = __spreadArray([], numbers);
var myObj = { name: 'Kevin', age: 25 };
var myObjCopy = __assign({}, myObj);
function setMyObj(obj, newName) {
    obj.name = newName;
}
//This line prints 'Undefined', I can't tell why
console.log(setMyObj(__assign({}, myObj), 'Tom'));
//---------------------
//Destructuring operators
//--------------------
//Arrays
var myHobbies = ['videogames', 'reading'];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
//Objects
var userData = { name: 'Pablo', age: 22 };
var usrName = userData.name;
var usrAge = userData.age;
//const (name: usrName, age: usrAge) = userData;
// the line right above didn't work! says usrName and usrAge were not found
console.log('Hi ' + usrName + ', your age is ' + usrAge);
