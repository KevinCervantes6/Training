// Functions

//Normal Function
function print(): void {
    console.log('Printing...');
}

print();

//Function expression
let myAdd = function(x: number, y: number): number{
    return x + y;
}

console.log(myAdd(7, 3));

//Arrow function
let myMult = ( x: number, y: number ): number => {
    return x * y;
}

console.log(myMult(7, 3));

//---------------------
//Spread operators
//---------------------

//Arrays
const numbers: number[] = [1, 2, 3, 4];
const numberCopy: number[] = [...numbers];

//Objects
type myType = {name: string, age: number};
const myObj: myType = {name: 'Kevin', age:25};
const myObjCopy: myType = {...myObj};

function setMyObj( obj: myType, newName: string ) {
    obj.name = newName;
}

//This line prints 'Undefined', I can't tell why
console.log(setMyObj( {...myObj}, 'Tom'));

//---------------------
//Destructuring operators
//--------------------

//Arrays
const myHobbies: string[] = ['videogames', 'reading'];
const [hobby1, hobby2] = myHobbies;

//Objects
const userData: myType = {name: 'Pablo', age: 22};
const usrName = userData.name;
const usrAge = userData.age;
//const (name: usrName, age: usrAge) = userData;
// the line right above didn't work! says usrName and usrAge were not found
console.log('Hi ' + usrName + ', your age is ' + usrAge);