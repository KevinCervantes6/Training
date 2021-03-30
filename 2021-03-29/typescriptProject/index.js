"use strict";
// Primitive types
var firstName = 'Kevin';
var age = 25;
var isIntern = true;
var unknownType = {};
console.log(firstName, age, isIntern, unknownType);
// Reference types
//Array
var list = [1, 2, 3];
//Tuples
var tup = ['str', 10];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//Function
var myAdd = function (x, y) {
    return x + y;
};
var result = myAdd(15, 27);
console.log(result);
//Object
var user = {
    uName: 'Kevin',
    uAge: '25',
    uHobbies: ['videogames', 'read']
};
