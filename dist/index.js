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
// Basic Types
var id = 5;
var company = "Traversy Media";
var isPublished = true;
var x = "Hello";
x = true;
var age;
age = 30;
var ids = [1, 2, 3, 4, 5];
// ids.push("helo"); // throws error
var arr = [1, true, "helo"];
// Tuple - define type of all elements in array in order
var person = [1, "Brad", true];
// Tuple array
var employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
    //   [true, "Jill"], // throws error
];
// union - var with either one or the other type
var pid = 22;
pid = "22";
// enum - set of named constants
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2);
var user = { id: 1, name: "John" }; // looks ✨
// Type assertion
var cid = 1;
var customerId = cid;
// let customerId = cid as number; // same as above
// customerId = true // throws error
// Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, "lol")); // throws error
// does not return anything
function log(message) {
    console.log(message);
}
var user1 = { id: 1, name: "John" };
var add = function (x, y) { return x + y; }; // implement interface, define function
var sub = function (x, y) { return x - y; };
var mul = function (x, y) { return x * y; };
var div = function (x, y) { return x / y; };
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
        console.log("\"Hi, this is " + this.name + ", I was constructed by weird machines, and they gave me an id of " + this.id + ". I'm afraid, please help\"");
    }
    Person.prototype.register = function () {
        return "[" + this.name + " is now registered]";
    };
    return Person;
}());
var brad = new Person(1, "Brad");
var mike = new Person(2, "Mike");
// brad.id = 5; // throws error
// console.log(brad.id); // also throws error
console.log(brad.register());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    Employee.prototype.register = function () {
        return "[" + this.name + " is now registered as " + this.position + ".]";
    };
    return Employee;
}(Person));
var emp = new Employee(3, "Shawn", "Developer");
console.log(emp.register());
// Generics - placeholder types
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3]);
var strArray = getArray(["brad", "john", "mike"]);
// numArray.push("hello"); // throws error, because getArray accepts only numbers
strArray.push("hello"); // ✅
