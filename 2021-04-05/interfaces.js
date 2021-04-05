"use strict";
//-------------------
//Static
//-------------------
//Static type means it does not need an object instance to work
//instead, the attribute or method with a static type belongs to the class itself
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circumference = /** @class */ (function () {
    function Circumference() {
    }
    Circumference.calculateCir = function (diam) {
        return Circumference.PI * diam;
    };
    Circumference.PI = 3.1459;
    return Circumference;
}());
console.log(Circumference.calculateCir(7));
//-------------------
//Abstract
//-------------------
//Abstract type it's used when we need to generalize an object or method
var Employee = /** @class */ (function () {
    function Employee(name, id_emp) {
        this.name = name;
        this.id_emp = id_emp;
    }
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developer.prototype.getSalary = function () {
        return 6000;
    };
    return Developer;
}(Employee));
var ITDeveloper = /** @class */ (function () {
    function ITDeveloper(name, id_itEmp) {
        this.name = name;
        this.id_itEmp = id_itEmp;
    }
    ITDeveloper.prototype.getSalary = function () {
        return 6000;
    };
    return ITDeveloper;
}());
