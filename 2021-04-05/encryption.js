"use strict";
//Encription class
var Encrypt = /** @class */ (function () {
    function Encrypt() {
    }
    Encrypt.prototype.encrypt = function (data) {
        return 'xyz${data}';
    };
    Encrypt.prototype.decrypt = function (data) {
        return data.slice(3);
    };
    return Encrypt;
}());
//Class
var Oracle = /** @class */ (function () {
    function Oracle(encObj) {
        this._encObj = encObj;
    }
    Oracle.prototype.save = function (data) {
        var encryptedData = this._encObj.encrypt(data);
    };
    return Oracle;
}());
var dbObj = new Oracle(new Encrypt());
dbObj.save('Hello');
