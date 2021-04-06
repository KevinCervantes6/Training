"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Generics
function echo(data) {
    return data;
}
echo('heloo');
echo(21);
echo('true');
//Generic function
function betterEcho(data) {
    return data;
}
betterEcho('hello');
betterEcho(21);
betterEcho(true);
//Generic class
var Collection = /** @class */ (function () {
    function Collection() {
    }
    Collection.prototype.add = function (data) {
        console.log(data);
    };
    return Collection;
}());
var obj1 = new Collection();
obj1.add('hello');
var obj2 = new Collection();
obj2.add(21);
//------------
//Decorators
//------------
function decoratorName(abc) {
    console.log('Hi from decorator!');
    abc.prototype.save();
}
var Database = /** @class */ (function () {
    function Database(name) {
        this.name = name;
    }
    Database.prototype.save = function () {
        console.log('Save to DB...');
    };
    Database = __decorate([
        decoratorName
    ], Database);
    return Database;
}());
