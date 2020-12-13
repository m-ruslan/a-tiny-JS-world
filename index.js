/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/m-ruslan/a-tiny-JS-world
   Web app: https://m-ruslan.github.io/a-tiny-JS-world/
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

const Inhabitant = function (name, saying, friendTo, gender) {
  this.name = name;
  this.gender = gender;
  this.saying = saying;
  this.friendTo = friendTo;
};

const Human = function (name, saying, friendTo, gender) {
  Inhabitant.call(this, name, saying, friendTo, gender);
  this.hands = 2;
  this.legs = 2;
  this.type = "human";
};
Human.prototype = Object.create(Inhabitant.prototype);
Human.prototype.constructor = Human;

const Man = function (name, saying, friendTo, gender = "male") {
  Human.call(this, name, saying, friendTo, gender);
};
Man.prototype = Object.create(Human.prototype);
Man.prototype.constructor = Man;

const Woman = function (name, saying, friendTo, gender = "female") {
  Human.call(this, name, saying, friendTo, gender);
};
Woman.prototype = Object.create(Human.prototype);
Woman.prototype.constructor = Woman;

const Pet = function (name, saying, friendTo, gender) {
  Inhabitant.call(this, name, saying, friendTo, gender);
  this.type = "pet";
};
Pet.prototype = Object.create(Inhabitant.prototype);
Pet.prototype.constructor = Pet;

const Dog = function (name, saying, friendTo, gender) {
  Pet.call(this, name, saying, friendTo, gender);
  this.legs = 4;
  this.type = this.type + ": " + "dog";
};
Dog.prototype = Object.create(Pet.prototype);
Dog.prototype.constructor = Dog;

const Cat = function (name, saying, friendTo, gender) {
  Pet.call(this, name, saying, friendTo, gender);
  this.legs = 4;
  this.type = this.type + ": " + "cat";
};
Cat.prototype = Object.create(Pet.prototype);
Cat.prototype.constructor = Cat;

const dog = new Dog("Ghost", "Woof", ["Monica", "Tom", "Everybody"], "male");
const cat = new Cat(
  "Tom",
  "Meow",
  ["Monica", "Chandler", "Everyone who feeds"],
  "male"
);
const woman = new Woman("Monica", "Hello", ["Chandler", "Ghost"]);
const man = new Man("Chandler", "Hi", ["Monica", "Tom"]);

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
      obj[propName] === undefined ? "none" : `${propName}: ${obj[propName]}`
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
