//-------------------
//Static
//-------------------
//Static type means it does not need an object instance to work
//instead, the attribute or method with a static type belongs to the class itself

class Circumference {
    static PI: number = 3.1459;

    static calculateCir( diam: number) {
        return Circumference.PI * diam;
    }
}

console.log(Circumference.calculateCir(7));


//-------------------
//Abstract
//-------------------
//Abstract type it's used when we need to generalize an object or method

abstract class Employee {
    name: string;
    id_emp: string;

    constructor (name: string, id_emp: string) {
        this.name = name;
        this.id_emp = id_emp;
    }

    abstract getSalary(): number;
}

class Developer extends Employee {

    getSalary() {
        return 6000;
    }
}

//-------------------
//Interface
//-------------------
//Interfaces help us to generalize an object's behaviour
//then, we can individually implement that behaviour


interface ITEmployee {
    name: string;
    id_itEmp: string;
    getSalary(): number;
}

class ITDeveloper implements ITEmployee {
    name: string;
    id_itEmp: string;

    constructor( name: string, id_itEmp: string) {
        this.name = name;
        this.id_itEmp = id_itEmp;
    }

    getSalary(): number {
        return 6000;
    }
}