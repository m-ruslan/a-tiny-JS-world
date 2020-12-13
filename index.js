/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/m-ruslan/a-tiny-JS-world
   Web app: https://m-ruslan.github.io/a-tiny-JS-world/
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

class Inhabitant {
  constructor(name, friendTo, gender) {
    this.name = name;
    this.gender = gender;
    this.friendTo = friendTo;
  }
}

class Human extends Inhabitant {
  constructor(name, friendTo, gender) {
    super(name, friendTo, gender);
    this.hands = 2;
    this.legs = 2;
    this.type = "human";
  }
}

// const sayingHi = (state) => ({
//   saying: () => `Hi, I'm ${state.name}`,
// });

class Man extends Human {
  constructor(name, friendTo, gender = "male") {
    super(name, friendTo, gender);
  }

  saying() {
    return `Hi, I'm ${this.name}`;
  }
}

class Woman extends Human {
  constructor(name, friendTo, gender = "female") {
    super(name, friendTo, gender);
  }

  saying() {
    return `Hello, I'm ${this.name}`;
  }
}

class Pet extends Inhabitant {
  constructor(name, friendTo, gender) {
    super(name, friendTo, gender);
    this.type = "pet";
  }
}

class Dog extends Pet {
  constructor(name, friendTo, gender) {
    super(name, friendTo, gender);
    this.legs = 4;
    this.type = this.type + ": " + "dog";
  }

  saying() {
    return `Woof, I'm ${this.name}`;
  }
}

class Cat extends Pet {
  constructor(name, friendTo, gender) {
    super(name, friendTo, gender);
    this.legs = 4;
    this.type = this.type + ": " + "cat";
  }

  saying() {
    return `Moew, I'm ${this.name}`;
  }
}

const dog = new Dog("Ghost", ["Monica", "Tom", "Everybody"], "male");
const cat = new Cat(
  "Tom",
  ["Monica", "Chandler", "Everyone who feeds"],
  "male"
);
const woman = new Woman("Monica", ["Chandler", "Ghost"]);
const man = new Man("Chandler", ["Monica", "Tom"]);

const catWoman = new Cat("Cat-woman", "female", ["Chandler"]);
catWoman.legs = 2;
catWoman.hands = 2;
catWoman.type = "super-hero";

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

const makeMessage = (obj) =>
  ["type", "name", "saying", "gender", "legs", "hands", "friendTo"]
    .map((propName) =>
      obj[propName] === undefined
        ? "none"
        : typeof obj[propName] === "function"
        ? `${propName}: ${obj[propName]()}`
        : `${propName}: ${obj[propName]}`
    )
    // .filter((prop) => prop !== "none")
    .join(";\n");

const world = [dog, cat, woman, man, catWoman];
world.forEach((inhabitant) => print(makeMessage(inhabitant)));

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
