// Primitive types

let firstName: string = 'Kevin';
let age: number = 25;
let isIntern: boolean = true;
let unknownType: any = {};

console.log( firstName, age, isIntern, unknownType);

// Reference types

//Array
let list: number[] = [1, 2, 3];

//Tuples
var tup = ['str', 10];

//Enum
enum Color {
    Red,
    Green,
    Blue,
  }
  let c: Color = Color.Green;

  //Function
  let myAdd = function (x: number, y: number): number {
    return x + y;
  };
let result: number = myAdd(15, 27);
  console.log(result);

  //Object
  let user = {
      uName: 'Kevin',
      uAge: '25',
      uHobbies: ['videogames', 'read']
  }