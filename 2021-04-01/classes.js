"use strict";
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
//Object literal
//Like static types, there's no need for an instance
var obj = {
    name: 'Kevin',
    age: 25
};
//---------------
//Classes
//---------------
var Fruit = /** @class */ (function () {
    function Fruit(size, fColor, isSweet) {
        this.size = size;
        this.fColor = fColor;
        this.isSweet = isSweet;
    }
    return Fruit;
}());
var Pineapple = /** @class */ (function (_super) {
    __extends(Pineapple, _super);
    function Pineapple(size, fColor, isSweet, hasCrown) {
        var _this = _super.call(this, size, fColor, isSweet) || this;
        _this.hasCrown = hasCrown;
        return _this;
    }
    Pineapple.prototype.getSize = function () {
        return this.size;
    };
    Pineapple.prototype.getColor = function () {
        return this.fColor;
    };
    Pineapple.prototype.getSweetness = function () {
        return this.isSweet;
    };
    Pineapple.prototype.getCrown = function () {
        return this.hasCrown;
    };
    Pineapple.prototype.setSize = function (newSize) {
        this.size = newSize;
    };
    Pineapple.prototype.setColor = function (newColor) {
        this.fColor = newColor;
    };
    Pineapple.prototype.setIsSweet = function (newSweetness) {
        this.isSweet = newSweetness;
    };
    Pineapple.prototype.setHasCrown = function (newCrown) {
        this.hasCrown = newCrown;
    };
    return Pineapple;
}(Fruit));
var Avocado = /** @class */ (function (_super) {
    __extends(Avocado, _super);
    function Avocado(size, fColor, isSweet, isMature) {
        var _this = _super.call(this, size, fColor, isSweet) || this;
        _this.isMature = isMature;
        return _this;
    }
    Avocado.prototype.getSize = function () {
        return this.size;
    };
    Avocado.prototype.getColor = function () {
        return this.fColor;
    };
    Avocado.prototype.getSweetness = function () {
        return this.isSweet;
    };
    Avocado.prototype.getMature = function () {
        return this.isMature;
    };
    Avocado.prototype.setSize = function (newSize) {
        this.size = newSize;
    };
    Avocado.prototype.setColor = function (newColor) {
        this.fColor = newColor;
    };
    Avocado.prototype.setIsSweet = function (newSweetness) {
        this.isSweet = newSweetness;
    };
    Avocado.prototype.setMatureness = function (newMatureness) {
        this.isMature = newMatureness;
    };
    return Avocado;
}(Fruit));
//We build a pineapple
var pineapple = new Pineapple('large', 'yellow', true, true);
var pSize = pineapple.getSize();
var pColor = pineapple.getColor();
var pSweetness = pineapple.getSweetness();
var pCrown = pineapple.getCrown();
//We build an avocado
var avocado = new Avocado('medium', 'black', false, true);
var avSize = avocado.getSize();
var avColor = avocado.getColor();
var avSweetness = avocado.getSweetness();
var avMatureness = avocado.getMature();
//Axuliar method to print if a fruit is sweet
function printSweetness(sweet) {
    if (sweet) {
        return 'it is sweet';
    }
    else {
        return 'it is not sweet';
    }
}
//Auxiliar method to print if a pineapple has crown
function printHasCrown(crown) {
    if (crown) {
        return 'it has crown';
    }
    else {
        return 'it has not crown';
    }
}
//Auxiliar method to print if an avocado is mature
function printMatureness(mature) {
    if (mature) {
        return 'it is mature';
    }
    else {
        return 'it is not mature';
    }
}
console.log('The pineapple is ' + pSize + ', has color ' + pColor +
    ' ' + printSweetness(pSweetness) + " and " + printHasCrown(pCrown));
console.log('The avocado is ' + avSize + ', has color ' + avColor +
    ' ' + printSweetness(pSweetness) + " and " + printMatureness(avMatureness));
