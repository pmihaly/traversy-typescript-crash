// Basic Types
let id: number = 5;

let company: string = "Traversy Media";

let isPublished: boolean = true;

let x: any = "Hello";
x = true;

let age: number;
age = 30;

let ids: number[] = [1, 2, 3, 4, 5];
// ids.push("helo"); // throws error

let arr: any[] = [1, true, "helo"];

// Tuple - define type of all elements in array in order
let person: [number, string, boolean] = [1, "Brad", true];

// Tuple array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
  //   [true, "Jill"], // throws error
];

// union - var with either one or the other type
let pid: string | number = 22;
pid = "22";

// enum - set of named constants
enum Direction1 {
  Up = 1, // by default 0
  Down, // now 2, by default 1
  Left, // now 3, by default 2
  Right, // new 4, by default 3
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction2);

// Objects
// const user: { id: number; name: string } = { id: 1, name: "John" }; // looks 💩

type User = { id: number; name: string };

const user: User = { id: 1, name: "John" }; // looks ✨

// Type assertion
let cid: any = 1;
let customerId = <number>cid;
// let customerId = cid as number; // same as above

// customerId = true // throws error

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// console.log(addNum(1, "lol")); // throws error

// does not return anything
function log(message: string | number): void {
  console.log(message);
}

// Interfaces - use with objects
interface UserInterface {
  readonly id: number; // 👈 read only
  name: string;
  age?: number; // 👈 optional
}

const user1: UserInterface = { id: 1, name: "John" };

// user1.id = 5; // throws error

interface MathFunction {
  (x: number, y: number): number; // function as object property
}

const add: MathFunction = (x: number, y: number): number => x + y; // implement interface, define function
const sub: MathFunction = (x: number, y: number): number => x - y;
const mul: MathFunction = (x: number, y: number): number => x * y;
const div: MathFunction = (x: number, y: number): number => x / y;

// Class interfaces, private attributes don't need to be defined here
interface PersonInterface {
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  private id: number; // access modifiers: public (default), private, protected
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;

    console.log(
      `"Hi, this is ${this.name}, I was constructed by weird machines, and they gave me an id of ${this.id}. I'm afraid, please help"`
    );
  }

  register(): string {
    return `[${this.name} is now registered]`;
  }
}

const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike");

// brad.id = 5; // throws error
// console.log(brad.id); // also throws error

console.log(brad.register());

class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name); // call parent class's constructor with id and name
    this.position = position;
  }

  register(): string {
    return `[${this.name} is now registered as ${this.position}.]`;
  }
}

const emp = new Employee(3, "Shawn", "Developer");

console.log(emp.register());

// Generics - placeholder types

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(["brad", "john", "mike"]);

// numArray.push("hello"); // throws error, because getArray accepts only numbers
strArray.push("hello"); // ✅
