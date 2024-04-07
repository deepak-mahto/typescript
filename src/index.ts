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
