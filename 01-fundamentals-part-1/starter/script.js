// // // // // // JavaScript Fundamentals - Part 1
// // // // // // We'll write our code here!

// // // // // let js ="amazing";
// // // // // console.log(40 + 8 + 23 - 10);

// // // // // console.log("==== VARIABLES ===");

// // // // // let firstName = "Jygzy";
// // // // // console.log(firstName);

// // // // // let age = 22;
// // // // // age = 23;
// // // // // console.log(age);

// // // // // const birthYear = 2002;
// // // // // console.log(birthYear);

// // // // // const PI = 3.1415;
// // // // // console.log(PI);

// // // // // const country = "Philippines";
// // // // // const language = "Filipino";
// // // // // const population = 10;

// // // // // let myCurrentJob = "Student";

// // // // // console.log("=== DATA TYPES");

// // // // // let age = 23;
// // // // // console.log(age);
// // // // // console.log(typeof age);

// // // // // let firstName = "Jygzy";
// // // // // console.log("firstName");
// // // // // console.log(typeof firstName);

// // // // // let javascriptIsFun = true;
// // // // // console.log(javascriptIsFun);
// // // // // console.log(typeof javascriptIsFun);

// // // // // let year;
// // // // // console.log(year);
// // // // // console.log(typeof year);

// // // // // let dynamicVariable = 23;
// // // // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // // dynamicVariable = "Now I'm a string!";
// // // // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // // dynamicVariable = true;
// // // // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // // === EXERCISE 1: PERSONAL INFO VARIABLES ===
// // // // // 1. Your first name (const)
// // // // const firstName = "Jygzy";
// // // // console.log(firstName);
// // // // console.log(typeof firstName);

// // // // // 2. Your age (let - it changes every year!)
// // // // let age = 23;
// // // // console.log(age);
// // // // console.log(typeof age);

// // // // // 3. Your favorite number (const)
// // // // const favNumber = 14;
// // // // console.log(favNumber);
// // // // console.log(typeof favNumber);

// // // // // 4. Whether you like JavaScript so far (boolean)
// // // // const likesJavaScript = true;
// // // // console.log(likesJavaScript);
// // // // console.log(typeof likesJavaScript);

// // // // // === EXERCISE 2: VARIABLE REASSIGNMENT ===
// // // // // 1. Create a let variable called 'score' with value 100
// // // // let score = 100;
// // // // // 2. Log it to the console
// // // // console.log(score);
// // // // // 3. Change it to 150
// // // // score = 200;
// // // // // 4. Log it again
// // // // console.log(score);
// // // // // 5. Try the same with const - what happens?
// // // // // Assignment to constant varilable error

// // // // // === EXERCISE 3: DATA TYPE DETECTIVE ===
// // // // // Use typeof to check the data type of these values:
// // // // console.log(typeof 42);
// // // // console.log(typeof "Hello");
// // // // console.log(typeof true);
// // // // console.log(typeof undefined);

// // // // // What do you think each one will return?
// // // // // 42 = Number - 42 is numerical
// // // // // Hello = String - Contains only alphabetical symbols
// // // // // true = boolean - Choices can contain only true or false
// // // // // undefined = undefined - No Value

// // // // BASIC OPERATORS - MATH OPERATORS 
// // // // console.log("=== MATH OPERATORS ===");

// // // // const now = 2025;
// // // // const ageJygzy = now - 2002;
// // // // const ageHan = now - 2000;
// // // // console.log(ageJygzy, ageHan);

// // // // console.log(ageJygzy * 2, ageJygzy / 10,2 ** 3);

// // // // //ALL MATH OPERATORS
// // // // console.log("Math Operations: ");
// // // // console.log("Addition: ");
// // // // console.log("Subtraction:");
// // // // console.log("Multiplication: ");
// // // // console.log("Division");
// // // // console.log("Exponentiation: ");

// // // // // STRING CONCATENATION
// // // // const firstName = "Jygzy";
// // // // const lastName = "Ybanez";
// // // // console.log(firstName + " " + lastName);

// // // // console.log("Hello " + "World " + "!");
// // // // console.log("I am " + 23 + " years old");

// // // // //ASSIGNMENT OPERATORS
// // // // console.log("=== ASSIGNMENT OPERATORS ===");

// // // // let x = 10 + 5;
// // // // console.log("x starts as: ", x)

// // // // // ASSIGNMENT SHORTCUTS
// // // // x += 10;
// // // // console.log("After x += 10: ", x);

// // // // x *= 4;
// // // // console.log("After x *= 4: ", x);

// // // // x/= 2;
// // // // console.log("After x /= 2:", x);


// // // // //INCREMENT AND DECREMENT
// // // // x++;
// // // // console.log("After x++: ", x);

// // // // x--;
// // // // x--;
// // // // console.log("After x-- twice: ", x);

// // // // //EXERCISE: SCORE CALCULATOR
// // // // // 1. Create a variable 'score' with value 100
// // // // let score = 100;
// // // // // 2. Add 50 using +=
// // // // score += 50;
// // // // // 3. Multiply by 2 using *=
// // // // score *= 2;
// // // // // 4. Subtract 25 using -=
// // // // score -= 25;
// // // // // 5. Use ++ twice
// // // // score ++;
// // // // score ++;
// // // // // 6. Log the final result (should be 377)
// // // // console.log(score);

// // // // //COMPARISION OPERATORS
// // // // //BASIC COMPARISONS
// // // // console.log("=== COMPARISON OPERATORS ===");

// // // // console.log("Age Comparison: ");
// // // // console.log(ageJygzy > ageHan);
// // // // console.log(ageHan >= 18);
// // // // console.log(ageJygzy < 30);

// // // // console.log("Number Comparisons: ");
// // // // console.log(25 > 20);
// // // // console.log(15 < 10);
// // // // console.log(18 >= 18);
// // // // console.log(16 <= 15);

// // // // //STORING COMPARISON RESULTS
// // // // const isFullAge = ageHan >= 18;
// // // // console.log("Han is adult", isFullAge);

// // // // const isJygzyOlder = ageJygzy > ageHan;
// // // // console.log("Jygzy is older: ", isJygzyOlder);

// // // // //COMPLEX COMPARISONS
// // // // console.log("Complex Comparison: ");
// // // // console.log(now - 1991 > now - 2018);

// // // // //EXERCISE: AGE VERIFICATION
// // // // const myAge = 23; 
// // // // // 1. Compare your age to 18 (>=)
// // // // console.log(18 >= myAge);
// // // // // 2. Check if 100 is greater than 99
// // // // console.log(100>=99);
// // // // // 3. Store a comparison result in a variable
// // // // const comparisonResult = myAge >= 18;
// // // // console.log("Result is: ", comparisonResult);
// // // // // 4. Try comparing the result of two calculations
// // // // console.log((myAge + 10) > (14 + 5));

// // // //OPERATOR PRECEDENCE
// // // console.log("=== OPERATOR PRECEDENCE ===");

// // // const now = 2025;
// // // const ageJygzy = now - 2002;
// // // const ageHan = now - 2000;

// // // console.log(now - 2002 > now - 2000);

// // // //ASSIGNMENT PRECEDENCE
// // // let x, y;
// // // x = y = 25 - 10 - 5;
// // // console.log(x,y);

// // // //PARENTHESES OVERRIDE EVERYTHING
// // // const averageAge = (ageJygzy + ageHan) / 2;
// // // console.log(ageJygzy, ageHan, averageAge);

// // // //CODING CHALLENGE #1: BMI CALCULATOR
// // // const massMark = 78;
// // // const heightMark = 1.69;
// // // const massJohn = 92;
// // // const heightJohn = 1.95;

// // // // 1. Calculate BMIs
// // // const bmiMark = (massMark / heightMark ** 2);
// // // const bmiJohn = (massJohn / heightJohn** 2);
// // // // 2. Create markHigherBMI variable
// // // const markHigherBMI =(bmiMark >= bmiJohn);
// // // // 3. Log results to console
// // // console.log(markHigherBMI);

// // //TEMPLATE LITERAL SUPERPOWERS
// // console.log(`I'm ${2025 - 2002} years old`);

// // //MULTILINE STRING MADE EASY
// // console.log(`String multiple lines`);


// // //EXERCISE 1: PERSONAL INTRODUCTION
// // const myName = "Jygzy";
// // const myAge = 23;
// // const myJob = "Student";
// // const currentYear = 2025;

// // //EXERCISE 2: MATH IN TEMPLATES
// // // 1. Calculates your birth year: currentYear - myAge
// // console.log(`My Birth year is ${currentYear - myAge}`);
// // // 2. Shows a calculation: 10 * 5
// // console.log(` 10 * 5 = ${10 * 5}`);
// // // 3. Includes a comparison: myAge >= 18
// // console.log(`Born in ${currentYear - myAge}, 10 * 5 = ${10*5}, Adult: ${myAge >= 18}`);
// // // Example: "Born in ${}, 10*5 = ${}, Adult: ${}"

// // //BASIC IF/ELSE STRUCTURE
// // const age = 15;

// // if (age >= 18){
// //     console.log(`Han can start diriving license`);
// // } else {
// //     const yearsLeft = 18 - age;
// //     console.log(`Han is too young. Wait another ${yearsLeft} years :)`);
// // }

// // //VARIABLE ASSIGNMENT WITH DECISIONS
// // const birthYear = 2012;

// // let century;
// // if (birthYear <= 2000) {
// //     century = 20;
// // } else {
// //     century = 21;
// // }
// // console.log(century);

// // //REAL-WORLD DECISION MAKING
// // const score = 85;

// // if (score >= 60){
// //     console.log(`You passed with ${score} points!`)
// //     console.log("Congratulations!");
// // }else {
// //     const pointsNeeded = 60 - score;
// //     console.log(`You failed. Need ${pointsNeeded} more points.`);
// // }

// // //EXERCISE 1: GRADE CALCULATOR
// // const testScore = 78;

// // if (testScore >= 90){
// //     console.log("Execellet! Grade A")
// // } else if (testScore >= 80 && testScore <=89) {
// //     console.log("Good job! Grade B")
// // } else if (testScore >= 70 && testScore <=79){
// //     console.log("Not bad! Grade C")
// // } else {
// //     console.log("You failed! Study harder")
// // }

// // //EXERCISE 2: AGE VERIFICATION
// // const userAge = 20;

// // if (userAge >= 18){
// //     console.log("Welcome! You can all content")
// // } else if (userAge >= 13 && userAge <=17) {
// //     console.log("Welcome! Restricted content only")
// // } else {
// //     console.log("Sorry, you're too young")
// // }

// // // TRUTHY AND FALSY VALUES
// // // THE 5 FALSY VALUES

// // console.log(Boolean(0));
// // console.log(Boolean(undefined));
// // console.log(Boolean("Jygzy"));
// // console.log(Boolean({}));
// // console.log(Boolean(""));

// // //PRACTICAL APPLICATIONS
// // const money = 100;
// // if (money){
// //     console.log("Don't spend it all;");
// // } else {
// //     console.log("You should get a job!");
// // }

// // //COMMON GOTCHA 
// // let height = 0;
// // if (height) {
// //     console.log("YAY! Height is defined");
// // } else {
// //     console.log("Height is UNDEFINED");
// // }

// // if (height !== undefined){
// //     console.log("Height is defined");
// // }

// // //EXERCISE: TRUTH DETECTOR
// // const values = [0,1, "", "hello", undefined, null, NaN, {}, []];

// // console.log("Value: ",0);
// // console.log("Boolean: ", Boolean(0));
// // if (0) {
// //     console.log("Truthy!");
// // } else {
// //     console.log("Falsy");
// // }

// // //CODING CHALLENGE #2: BMI COMPARISON
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // const BMIMark = massMark / heightMark ** 2;
// // const BMIJohn = massJohn / (heightJohn * heightJohn);
// // console.log(BMIMark, BMIJohn);

// MANUAL TYPE CONVERSION
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// //console.log(number("Jonas"));
// console.log(typeof NaN);

// console.log(typeof String(23), 23);
// console.log(typeof String (23));

// // //AUTOMATIC TYPE COERCION 
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");
// console.log ("23" * "2");

// // // TRICKY EXAMPLES
// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// console.log( 2 + 3 + 4 + "5");
// console.log("10" - "4" - "3" - 2 + "5");

// // //EXERCISE 1: CONVERSION DETECTIVE
// console.log("5" + 2); 
// console.log("5" - 2);
// console.log("5" * 2);
// console.log("5" / 2);

// const userAge = "25";
// const userScore = 95;

// const userAgeAsNumber = Number(userAge);
// console.log(userAgeAsNumber, typeof userAgeAsNumber);

// const userScoreAsString = String(userScore);
// console.log(userScoreAsString, typeof userScoreAsString); 

// //EXERCISE 2: FIX THE BUG
// const num1 = ("First number:", 10);
// const num2 = ("Second number:", 5);
// const sum = num1 + num2;
// console.log(`Sum: ${sum}`);

// // STRICT EQUALITY OPERATORS
// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// console.log("18" === 18);
// console.log("18" == 18);
// console.log (18 === 18);

// //LOOSE EQUALITY
// console.log("0" == 0);
// console.log(0 == false);
// console.log("0" == false);
// console.log(null == undefined);

// console.log("" == 0);
// console.log("   " == 0);

// //EXERCISE 1: EQUALITY DETECTIVE
// console.log(5 === "5");
// console.log(5 == "5");
// console.log(true === 1);
// console.log(true == 1);
// console.log(false === 0); 
// console.log(false == 0);

// //EXERCISE 2: FIX THE LOGIN SYSTEM
// const username = ("Username: ");
// const password = ("Password: ");

// if (username === "admin" && password === "1234"){
//     console.log("Welcome admin!");
// } else {
//     console.log("Access denied");
// }

// //LOGICAL OPERATORS
// //BASIC LOGICAL OPERATORS

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// //REAL-WORLD EXAMPLE
// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

//COMPLEX LOGIC WITH PARENTHESES
// const age = 20;
// const hasPermission = true;
// const hasExperience = false;

// if ((age >= 18 || hasPermission) && hasExperience){
//     console.log("Approved to drive");
// } else {
//     console.log("Not approved to drive");
// }

//EXERCISE 1: CLUB ENTRY SYSTEM

// const age = 19;
// const hasID = true;
// const isVIP = false;

// if ((age >= 19 || hasID) && isVIP){
//      console.log("Welcome to the club!");
//  } else {
//          console.log("Sorry, you cannot enter");
//  }

//  //EXERCISE 2: WEATHER ADVISOR
//  const temperature = 25;
//  const isRaining = false;
//  const isWindy = true;

//  if ((temperature >= 25 && temperature <= 30 || !isRaining) && !isWindy) {
//     console.log("Perfect day");
// } else if ((temperature >= 15 && temperature <= 35 || !isRaining) && isWindy) {
//     console.log("Good day");
// } else {
//     console.log("Stay inside");
// }

// TERNARY OPERATOR
// BASIC TERNARY SYNTAX

const age = 23;

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18){
    drink2 = "wine";
}else {
    drink2 = "water"
}
console.log(drink2);

//TERNARY IN TEMPLATE LITERALS
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

//EXERCISE 1: STATUS MESSAGES
const isLoggedIn = true;
console.log(`${isLoggedIn ? "Welcome back!" : "Please sign in"}`);

const isPremium = false;
console.log(`The discount is ${isPremium >= 18 ? 100 * 0.8 : 100}`);

//EXERCISE 2: SMART RESPONSES
const score = 85;
console.log(`${score ? "Passed" : "Failed"}`);

const weather = "sunny";
console.log(`${weather ? "Great for outdoor activities" : "Stay inside"}`);

const battery = 15;
console.log(`${battery ? "Low Battery" : "BatteryOK"}`);

//CODING CHALLENGE #4
const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);









