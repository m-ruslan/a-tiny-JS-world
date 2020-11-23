/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
let dog = {
  type: "animal",
  legs: 4,
  name: "Ghost",
  saying: "bark",
  friendTo: ["Monica", "Tom", "Everybody"],
};
let cat = {
  type: "animal",
  legs: 4,
  name: "Tom",
  saying: "meow",
  friendTo: ["Monica", "Chandler", "Everyone who feeds"],
};
let woman = {
  type: "human",
  legs: 2,
  hands: 2,
  name: "Monica",
  saying: "Hello",
  friendTo: ["Chandler", "Ghost"],
};
let man = {
  type: "human",
  legs: 2,
  hands: 2,
  name: "Chandler",
  saying: "Hi",
  friendTo: ["Monica", "Tom"],
};

let makeMassege = (obj) =>
  `${obj.type}; ${obj.legs}; ${obj.hands}; ${obj.name}; ${
    obj.saying
  }; ${obj.friendTo.join(",")}`;

let world = [dog, cat, woman, man];
world.forEach((e) => print(makeMassege(e)));

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
