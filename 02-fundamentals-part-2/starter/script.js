// // console.log("Part 2 is now working");

// // // FUNCTIONS - DECLARATIONS AND EXPRESSIONS
// // console.log(`=== FUNCTIONS ===`);


// // function logger() {
// //     console.log(`My name is Jygzy`);
// // }

// // logger();
// // logger();
// // logger();

// // function fruitProcessor (apples, oranges) {
// //     console.log(apples, oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// //     return juice;
// // }

// // console.log (fruitProcessor(5,3));

// // const juice1= fruitProcessor (5, 0);
// // const juice2= fruitProcessor (2,4);
// // const juice3 = fruitProcessor (2,4);
// // console.log(juice1);

// // // FUNCTION EXPRESSIONS
// // const calcAge = function (birthYear){
// //     return 2025 - birthYear;
// // }

// // console.log(calcAge (2002));
// // console.log(calcAge(1991));

// // function introduce(firstName, lastName, age){
// //     const introduce = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
// //     return introduce;
// // }

// // console.log (introduce("Jygzy", "Ybanez", "23" ));

// // function yearsUntilRetirement (birthYear, firstName){
// //     const age = (birthYear);
// //     const retirement = 65 - age;

// //     if (retirement > 0){
// //         return `${firstName} retires in ${retirement} years`;
// //     } else {
// //         return `${firstName} had already retired`;
// //     }
// // }

// // console.log(yearsUntilRetirement(2000, "Jygzy"));

// // // GLOBAL SCOPE

// // const globalVar = "I am global";

// // function testScope (){
// //     const localVar = ("I am local");
// //     console.log(globalVar);
// //     console.log(localVar);
// // }

// // testScope();
// // //console.log(localVar);
// // console.log(globalVar);

// // // CODING CHALLENGE #1: FUNCTION CALCULATOR

// // function calcAverage(score1, score2, score3){
// //     return (score1 + score2 + score3) / 3;
// // }


// // function checkWinner(scoreDolphins, scoreKoalas){
// //     if (scoreDolphins >= 2 * scoreKoalas){
// //         return `Dolphins win (${scoreDolphins} vs ${scoreKoalas})`;
// //     } else if (scoreDolphins <= 2 * scoreKoalas){
// //         return `Koalas win (${scoreKoalas} vs ${scoreDolphins})`;
// //     } else {
// //         return `No team wins! Dolphins: ${scoreDolphins}, Koalas: ${scoreKoalas}`;
// //     }

// // }

// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // scoreDolphins = calcAverage(85, 54, 41);
// // scoreKoalas = calcAverage(23, 34, 27);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // const student1Grade = 85;
// // const student2Grade = 92;
// // const student3Grade = 78;


// // const grades = [85, 92, 78, 96, 88];
// // console.log(grades);

// // const friends = [`Louren`, `Agatha`, `Nicole`, `Arden`, `Cess`, `Gela`];
// // console.log(friends);

// // const mixed = ["Jonas", 27, true, friends];
// // console.log(mixed);

// // const years = new Array (1991, 1984, 2008, 2020)
// // console.log(years);

// // // ARRAY STARTS COUNTING AT 0
// // console.log(friends[0]);
// // console.log(friends[2]);
// // console.log(friends[3]);

// // console.log(friends.length);

// // // CHANGE THE VALUE PER INDEX
// // friends [1] = "Han";
// // console.log(friends);

// // const firstName = `Jygzy`;
// // const jygzy = [firstName, "Ybanez", 2025 - 2002];
// // console.log(jygzy);

// // const calcAge = function (birthYear){
// //     return 2025 - birthYear;
// // }

// // const ages = [calcAge(2002), calcAge(2003), calcAge(2004)];
// // console.log(ages);

// // // ARRAY METHODS - ADDING ELEMENTS
// // // ADD AN ITEM AT THE END OF THE LIST
// // const newLength = friends.push("Agatha");
// // console.log(friends);
// // console.log(newLength);

// // const newLength2 = friends.push("Jisung");
// // console.log(friends);

// // // ADD THE FIRST ITEM IN A LIST
// // friends.unshift("Hannie");
// // console.log(friends);

// // // REMOVING ELEMENTS
// // const popped = friends.pop();
// // const popped2 = friends.pop();
// // console.log(popped);
// // console.log(popped2);
// // console.log(friends);

// // const shifted = friends.shift();
// // console.log(shifted);
// // console.log(friends);

// // // FIND AN ELEMENT
// // // IndexOf

// // console.log(friends.indexOf("Han"));
// // console.log(friends.indexOf("Agatha"));
// // console.log(friends.indexOf("Louren"));

// // // includes()
// // console.log(friends.includes(`Han`));
// // console.log(friends.includes(`Hannie`));

// // // ARRAY ITERATION - LOOPS
// // for (let i = 0; i < friends.length; i++) {
// //     console.log(friends[i]);
// // }

// // //FORREACH METHOD
// // friends.forEach(
// //     function (friend, index){
// //         console.log(`Friend ${index + 1}: ${friend}`);
// //     }
// // )

// // friends.forEach((friend, index) => {
// //   console.log(`Friend ${index + 1}: ${friend}`);
// // });

// // const grades2 = [85, 92, 78, 96, 88, 74];
// // let total = 0;

// // for (let i = 0; i < grades2.length; i++) {
// //     total += grades2[i];
// // }

// // const average = total / grades2.length;
// // console.log(`Average grade: ${average.toFixed(2)}`);

// // let passedCount = 0;
// // grades2.forEach(
// //     grade  => {
// //         if (grade >= 70) passedCount++;
// //     }
// // )

// // console.log(`${passedCount} out of ${grades2.length} students passed`);

// // CODING CHALLENGE #2 : STUDENT GRADE MANAGER


// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// function calculateAverage(grades){
//     let sum = 0;
//     for (let i = 0; i < grades.length; i++) {
//         sum += grades[i];
        
//     }
//     return (78 + 85 + 92 + 67 + 88 + 95 + 73 + 82) / grades.length;
// }

// function findHighestGrade(grades) {
//    let highest = grades[0];
//  for (let i = 0; i < grades.length; i++) {
//     if (grades[i] > highest){
//         highest = grades[i];
//     } 
// }
// return highest;
// }

// function findLowestGrade(grades){
// let lowest = grades[0];
// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] < lowest){
//         lowest = grades[i];
//     } 
// }
// return lowest;
// }

// function countPassing(grades, passingGrade){
//     let count = 0;
//     for (let i = 0; i < grades.length; i++) {
//         if (grades[i] >= passingGrade) {
//             count++
//         }
        
//     }
//     return count;
// }

// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

// OBJECTS - CREATION WITH OBJECT LITERAL SYNTAX

// const jygzy = {
//     firstName: "Jygzy",
//     lastName: "Ybanez",
//     age: 2025 - 2002,
//     job: "teacher",
//     friends: ["Louren", "Agatha", "Han"],
// }
// console.log(jygzy);

// const jygzyArray = [
//     "Jygzy",
//     "Ybanez",
//     23,
//     "Student",
//     ["Louren", "Agatha", "Han"]
// ]
// console.log(jygzyArray);

// const jygzyObject ={
//     firstName: "Jygzy",
//     lastName: "Ybanez",
//     age: 2025 - 2002,
//     job: "teacher",
//     friends: ["Louren", "Agatha", "Han"],
// }
// console.log(jygzyObject);

// // DOT NOTATION
// console.log(jygzy.firstName);
// console.log(jygzy.lastName);
// console.log(jygzy.age);
// console.log(jygzy.job);
// console.log(jygzy.friends);

// //BRACKET NOTATION
// console.log(jygzy["firstName"]);
// console.log(jygzy["lastName"]);
// console.log(jygzy["age"]);

// //BRACKET NOTATION'S SUPERPOWER
// const nameKey = "Name";
// console.log(jygzy["first" + nameKey]);
// console.log(jygzy["last" + nameKey]);

// //PROPERTY MODIFICATION AND ADDITION
// //MODIFYING EXISTING PROPERTIES
// jygzy.job = "student";
// jygzy["age"] = 35;
// console.log(jygzy);

// //ADDING NEW PROPERTIES
// jygzy.location = "Philippines";
// jygzy["twitter"] = "@_doolsetnet";
// jygzy.hasDriversLicense = true;
// console.log(jygzy);

// //EXERCISE 1: PERSONAL OBJECT
// const book = {
//     title: "Uzumaki",
//     author: "Junji Ito",
//     pages: 648,
//     isRead: true,
// };

// const playlist = {
//     name: "HanPop",
//     creator: "Han Jisung",
//     songs: ["Want So Bad", "13", "Maybe"],
//     genre: "Romance",
// };

// console.log(book.title);
// console.log(playlist["creator"]);
// console.log(book["pages"]);
// console.log(playlist["songs"]);

// playlist["instagram"] = "@_doolsetnet";
// book["year"] = 1995;
// book.year= 1998;
// console.log(playlist);
// console.log(book);

// //OBJECT VS ARRAYS
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// const person = {
//     name: "Jygzy",
//     age: 23,
//     occupation: "student",
// };

// const car ={
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020,
//     color: "blue",
// };

// //COMBINIG OBJECTS AND ARRAYS
// const student = {
//     name: "Sarah",
//     grades: [85, 92, 78],
//     address: {
//         street: "123 Main St",
//         city: "New York",
//     },
// };

// console.log(student.grades[0]);
// console.log(student.address.city);

// //OBJECT METHODS
// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birthYear: 1991,
//     job: "student",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriversLiecense: true,

//     calcAge: function(birthYear){
//         return 2037 - birthYear;
//     },
// };

// console.log(jonas.calcAge(1991));
// console.log(jonas.calcAge(jonas.birthYear));

// const jonasImproved= {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birthYear: 1991,
//     job: "teacher",
//     friend: ["Michael", "Peter", "Steven"],
//     hasDriversLicense: true,

//     calcAge: function(){
//         console.log(this);
//         return 2037 - this.birthYear;
//     },
// };

// console.log(jonasImproved.calcAge());

// //ADVANCED STORING CALCULATED VALUES
// const jonasAdvanced = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birthYear: 1991,
//     job: "student",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriversLiecense: true,

//     calcAge: function(){
//         this.age = 2037 - this.birthYear;
//         return this.age;
// },
//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLiecense ? "a" : "no"} driver's license.`;
//     },
// };

// console.log(jonasAdvanced.calcAge());
// console.log(jonasAdvanced.age);
// console.log(jonasAdvanced.getSummary());

// //EXERCISE 2: CALCULATOR OBJECT
// const calculator = {
//   num1: 10,
//   num2: 5,
//   operator: "+",

//   add: function () {
//     return this.num1 + this.num2;
//   },

//   subtract: function () {
//     return this.num1 = this.num2;
//   },

//   multiply: function () {
//     return this.num1 * this.num2;
//   },

//   divide: function () {
//     return this.num1 / this.num2;
//   },

//   calculate: function () {
//     if (this.operator === "+") return this.add();
//     if (this.operator === "-") return this.subtract();
//     if (this.operator === "*") return this.multiply();
//     if (this.operator === "/") return this.divide();
//     return "Invalid Operator";
//   },

//   getResult: function () {
//     return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
//   },
// };

// console.log(calculator.calculate());
// console.log(calculator.getResult());

// //COMBINING OBJECTS AND ARRAYS
// const student1 = {
//     name: "Sarah",
//     grades: [85, 92, 78],
//     address: {
//         street: "123 Main St",
//         city: "New York",
//     },
// };

//CODING CHALLENGE #3: USER PROFILE SYSTEM
const user = {
  firstName: "Jygzy",
  lastName: "Ybanez",
  birthYear: 2002,
  location: "Philippines",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Louren", status: "active" },
    { name: "Agatha", status: "inactive" },
    { name: "Han", status: "active" },
  ],
  isActive: true,

  calcAge: function () {
    const currentYear = new Date().getFullYear();
    this.age = currentYear - this.birthYear;
    return this.age;
  },

  addFriend: function (name, status = "active") {
    this.friends.push({name, status});
    return this.friends.length;
  },

  getActiveFriends: function () {
    return this.friends.filter(friend => friend.status === "active").length;
  },

  toggleStatus: function () {
    this.isActive = !this.isActive;
    return this.isActive
  },

  getSummary: function () {
    const age = this.calcAge();
    return `
    Name: ${this.firstName} ${this.lastName}
    Age: ${age}
    Location: ${this.location}
    Status: ${this.isActive ? "Online" : "Offline"}
    Friends: ${this.friends.length} total (${this.getActiveFriends()} active)
    Interests: ${this.interests.join(", ")}
`;
  },
};

console.log(user.getSummary());
user.addFriend("Alex", "active");
user.toggleStatus();
console.log(`After updates:`);
console.log(user.getSummary());