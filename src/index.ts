// Basic types
let id: number = 5;
let company: string = "Apple";
let isPublished: boolean = true;
let x: any = "any type";

// Arrays and Tuples

// Arrays
let ids: number[] = [1, 2, 3, 4, 5, 6, 7];
let arr: any[] = [1, true, "hello"];

// Tuple
let person: [number, string, boolean] = [12, "deepak", true];

// Tuples Array
let employee: [number, string][] = [
  [1, "deepak"],
  [2, "wiston"],
  [3, "chuck"],
];

// Unions & Enum

// Union
let pid: string | number;
pid = 23;

// Enum
enum Direction1 {
  Up = 1, // Staring value will be 1 and by default it will be zero
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "deepak",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
// let customerId = cid as number; // another way

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// Void

function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  readonly id: number; // by default read/write
  name: string;
  age?: number; // Optional
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

// user1.id = 4; // Cannot assign to 'id' because it is a read-only property

// Function Interface
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;

const sub: MathFunc = (x: number, y: number): number => x - y;

// Implement Interface in class
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number; // this property is private and can only be accessible within the class
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now Registered`;
  }
}

const person1 = new Person(1, "deepak");
const person2 = new Person(2, "thomas");

// Extending classes (Subclasses)
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp1 = new Employee(1, "deepak", "Developer");

// Generics - used to build reusable components

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["deepak", "chuck", "thomas", "winston"]);
