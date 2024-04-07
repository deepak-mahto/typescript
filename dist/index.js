"use strict";
// Basic types
let id = 5;
let company = "Apple";
let isPublished = true;
let x = "any type";
// Arrays and Tuples
// Arrays
let ids = [1, 2, 3, 4, 5, 6, 7];
let arr = [1, true, "hello"];
// Tuple
let person = [12, "deepak", true];
// Tuples Array
let employee = [
    [1, "deepak"],
    [2, "wiston"],
    [3, "chuck"],
];
// Unions & Enum
// Union
let pid;
pid = 23;
// Enum
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
const user = {
    id: 1,
    name: "deepak",
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
// let customerId = cid as number; // another way
// Functions
function addNum(x, y) {
    return x + y;
}
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now Registered`;
    }
}
const person1 = new Person(1, "deepak");
const person2 = new Person(2, "thomas");
