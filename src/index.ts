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
