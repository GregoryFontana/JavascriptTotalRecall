/*
A. Q + A

1. How do we assign a value to a variable? 
A. With the assignment operator

2.How do we change the value of a variable? 
A. With a new declaration, preferably using 'let'.

3.How do we assign an existing variable to a new variable? 
A. With the '=' assignment operator

4.Remind me, what are declare, assign, and define? 
A. A declaration uses 'let' or 'const' plus an assignment operator. To assign in JS, you use an operator to say: 'the data in this variable will consist of this...'. TO define in JS means to express what the data in the variable contains.

5.What is pseudocoding and why should you do it? 
A. It is a more prosaic form of coding -- essentially code written out in complete sentences, to help with conceptualizing the different elements of the code.

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 
A. Over 50%. Most of your time should be spent problem solving. Coding comes at the end when you are ready to implement a solution.
*/

/// B. Strings =================================
// let firstVariable = "Hello World";
// firstVariable = 30;
// secondVariable = firstVariable;
// secondVariable = "Hello Mars";

// console.log(firstVariable);
// A. 30

// let yourName = "Gregory";
// console.log("Hello, my name is " + yourName);

///C. Booleans ========================
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = "Kevin";

// console.log(a != b);
// console.log(c != d);
// console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log((false && false && false && false && false) || true);
// console.log(false == false);
// console.log(e === "Kevin");
// console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 + parseInt("48"));

//D. The Farm =================================
// const animal = "dog";
// if (animal === "cow") {
//   console.log("mooooo");
// } else {
//   console.log("Hey! You're not a cow.");
// }
// console.log(animal);

///E. Driver's Ed
// let age = 3;
// if (age >= 16) {
//   console.log("Here are the keys!");
// } else {
//   console.log("Sorry, you're too young.");
// }
// console.log(age);

///II Loops
// A. The Basics
//1:
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// //2:
// for (let i = 10; i <= 400; i++) {
//   console.log(i);
// }
// //3:
// for (let i = 12; i <= 4000; i += 3) {
//   console.log(i);
// }
// B. Get Even
//1.
// for (let i = 0; i <= 100; i++) {
//   console.log(i);
//   if (i % 2 === 0) console.log(i + "<--is an even number");
// }

//C. Give me Five
//1.
// for (let i = 0; i <= 100; i++) {
//   number = i;
//   if (i % 5 === 0) console.log(`I found a  ${number}. High five!`);
// }
// //2.
// for (let i = 0; i <= 100; i++) {
//   number = i;
//   if (i % 5 === 0) console.log(`I found a  ${number}. High five!`);
//   else {
//     if (i % 3 === 0) console.log(`I found a ${number}. Three is a crowd`);
//   }
// }
//3.
// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`I found a ${i}. Three is a crowd AND High Five!`);
//   } else if (i % 5 === 0) {
//     console.log(`I found a  ${i}. High five!`);
//   } else if (i % 3 === 0) {
//     console.log(`I found a ${i}. Three is a crowd`);
//   }
// }
//D. Savings Account
//1.
// let bank_account = 0;
// for (let i = 0; i <= 10; i++) {
//   bank_account += i;
// }
// console.log(bank_account);

// //2.
// let bank_account = 0;
// for (let i = 1; i <= 100; i++) {
//   bank_account += i;
// }
// console.log(bank_account * 2);

//III. Arrays & Control Flow
//A. Talk about it
// 1. elements
// 2. no
// 3. A grocery list

//B. Easy does it
//1.
// let quotes = [
//   "We have nothing to fear but fear itself.",
//   "By any means necessary.",
//   "The child is the father of the man.",
// ];

//C. Accessing elements
//1. You access the first element by invoking the [i] syntax. [i] refers to the index of the array. The first element in the index of an array is always zero (0), so i = 0.
//2.
// const randomThings = [1, 10, "Hello", true]
// randomThings[2] = "World"
// console.log(randomThings)
//3.
// console.log(randomThings)

// //D. Change Values
// //1.
// ourClass[2]
// //2.
// ourClass[4] = "Octocat"
// //3.
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Octocat"]
// ourClass.push("Cloud City")
// console.log(ourClass)

//E. Mix it up
//1.
// const myArray = [5, 10, 500, 20]
// myArray.push("Aegon")
// console.log(myArray)
// //2.
// const myArray = [5, 10, 500, 20]
// myArray.shift(5)
// console.log(myArray)
// //3.
// const myArray = [5, 10, 500, 20, "Aegon", "Paris, Texas"]
// myArray.unshift("Bob Marley")
// console.log(myArray)
// //4.
// const myArray = ["Bob Marley", 10, 500, 20, "Paris, Texas"]
// myArray.pop("Paras Texas")
// console.log(myArray)
// 5.
// const myArray = ["Bob Marley", 10, 500, 20, "Paris, Texas"]
// console.log(myArray)
// Array.prototype.reverse.call(myArray)
// console.log(myArray)
//Yes, the array is mutated. Mutate means that the contents of the original array have changed. The method returned the values reversed.

//F. Biggie Smalls
// let num = 150;
// if (num < 100) {
//   console.log("little number");
// } else if (num >= 100) {
//   console.log("big number");
// }
// console.log(num);

//G. Monkey in the Middle
// let num = 2;
// if (num < 5) {
//   console.log("little number");
// } else if (num > 10) {
//   console.log("big number");
// } else console.log("monkey");
// console.log(num);

//H. What's in your Closet?
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps",
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],
//   [
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs",
//   ],
//   [
//     //     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans",
//   ],
// ];
// //1.
// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
//2.
// kristynsCloset.splice(6, 0, "raybans");
// console.log(kristynsCloset)

// console.log(kristynsCloset);
//3.
// kristynsCloset.splice(5,1, "Stained Knit Hat")
// console.log(kristynsCloset)
//4.
// console.log(thomsCloset[0][0])
// //5.
// console.log(thomsCloset[1][1])
// //6.
// console.log(thomsCloset[2][1])
// //7.
// console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][1]}!`)
// //8.
// thomsCloset[1][2] = 'Footie Pajamas'
// console.log(thomsCloset[1][2])
// console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[1][2]}!`)

// IV. Functions
//A.
// function printGreeting(name) {
//   console.log(name + " Slimer!");
// }
// printGreeting("Hello, there,");
// //B.
// function printCool(name) {
//   console.log(name + " is cool.");
// }
// printCool("Bob");
// //C.
// const calculateCube = (num) => {
//   return num * num * num;
// };
// console.log(calculateCube(5));
// //D.
// function isVowel(str) {
//   if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u") {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isVowel("u");
//E.
// function getTwoLengths(str1, str2) {
//   return newArr(getTwoLengths.map(str1, str2));
  
// }

// function getTwoLengths(arr){
//   return arr.map(function(str){
//     return str.length;
//   })
// }
// console.log(getTwoLengths("Hank", "Hippopopalous"))



// //F.
// function getMultipleLengths(array) {
//   array = ["hello", "what", "is", "up", "dude"];
//   newArray(array.map);
// }
//G.
//H/

//Objects
//A. 1 and 2.
const userGreg = {
  name: "Greg", 
  email: "gregjfontana@gmail.com",
  age: 35,
  purchased: []
};
//B.
userGreg.email = "tomfontana@yahoo.com"
userGreg.age = age + age++

//C.
userGreg.location = "Washington, DC"
//D.
userGreg.purchased.push("carbohydrates")
userGreg.purchased.push("peace of mind")
userGreg.purchased.push("Merino Jodhpurs")
console.log(userGreg.purchased[2])

//E.
userGreg.friend = {
  name: "Paul",
  age: 23,
  location: "Seattle",
  purchased: []
}
console.log(userGreg.friend)
console.log(userGreg.friend.location)
userGreg.friend.age = 55
userGreg.friend.purchased.push("The One Ring")

