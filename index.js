/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/m-ruslan/a-tiny-JS-world
   Web app: https://m-ruslan.github.io/a-tiny-JS-world/
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

//**ES6 classes and sub-classes
class Inhabitant {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    this.friendTo = [];
  }

  addFriends(arr) {
    this.friendTo = this.friendTo.concat(
      arr.map((inhhabitant) => inhhabitant.name)
    );
  }
}

class Human extends Inhabitant {
  constructor(name, gender) {
    super(name, gender);
    this.hands = 2;
    this.legs = 2;
    this.type = "human";
  }
}

class Man extends Human {
  constructor(name, gender = "male") {
    super(name, gender);
  }

  saying() {
    return `Hi, I'm ${this.name}`;
  }
}

class Woman extends Human {
  constructor(name, gender = "female") {
    super(name, gender);
  }

  saying() {
    return `Hello, I'm ${this.name}`;
  }
}

class Pet extends Inhabitant {
  constructor(name, gender) {
    super(name, gender);
    this.type = "pet";
  }
}

class Dog extends Pet {
  constructor(name, gender) {
    super(name, gender);
    this.legs = 4;
    this.type = this.type + ": " + "dog";
  }

  saying() {
    return `Woof, I'm ${this.name}`;
  }
}

//**classes built employing composition
const sayingMoew = (state) => ({
  saying: () => `Meow, I'm ${state.name}`,
});

const addFriends = (state) => ({
  addFriends: (arr) =>
    (state.friendTo = state.friendTo.concat(
      arr.map((inhhabitant) => inhhabitant.name)
    )),
});

const Cat = (name, gender) => {
  let state = {
    name,
    friendTo: [],
    gender,
    type: "pet: cat",
    legs: 4,
  };
  return Object.assign(state, sayingMoew(state), addFriends(state));
};

const CatWoman = (name, gender) => {
  let state = {
    name,
    friendTo: [],
    gender,
    type: "super-hero",
    legs: 2,
    hands: 2,
  };
  return Object.assign(state, sayingMoew(state), addFriends(state));
};

//**objects creation based on classes
const dog = new Dog("Ghost", "male");
const woman = new Woman("Monica");
const man = new Man("Chandler");

const cat = Cat("Tom", "male");
const catWoman = CatWoman("Cat-woman", "female");

const friendList = [
  { target: dog, friends: [man, woman] },
  { target: man, friends: [woman, cat] },
  { target: woman, friends: [dog, man, cat] },
  { target: cat, friends: [dog, man, woman] },
  { target: catWoman, friends: [man, cat] },
].forEach(({ target, friends }) => target.addFriends(friends));

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
    .filter((prop) => prop !== "none")
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
