console.log("Part 2 is now working");

// FUNCTIONS - DECLARATIONS AND EXPRESSIONS
console.log(`=== FUNCTIONS ===`);


function logger() {
    console.log(`My name is Jygzy`);
}

logger();
logger();
logger();

function fruitProcessor (apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log (fruitProcessor(5,3));

const juice1= fruitProcessor (5, 0);
const juice2= fruitProcessor (2,4);
const juice3 = fruitProcessor (2,4);
console.log(juice1);

// FUNCTION EXPRESSIONS
const calcAge = function (birthYear){
    return 2025 - birthYear;
}

console.log(calcAge (2002));
console.log(calcAge(1991));

function introduce(firstName, lastName, age){
    const introduce = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
    return introduce;
}

console.log (introduce("Jygzy", "Ybanez", "23" ));

function yearsUntilRetirement (birthYear, firstName){
    const age = (birthYear);
    const retirement = 65 - age;

    if (retirement > 0){
        return `${firstName} retires in ${retirement} years`;
    } else {
        return `${firstName} had already retired`;
    }
}

console.log(yearsUntilRetirement(2000, "Jygzy"));

// GLOBAL SCOPE

const globalVar = "I am global";

function testScope (){
    const localVar = ("I am local");
    console.log(globalVar);
    console.log(localVar);
}

testScope();
//console.log(localVar);
console.log(globalVar);

// CODING CHALLENGE #1: FUNCTION CALCULATOR

function calcAverage(score1, score2, score3){
    return (score1 + score2 + score3) / 3;
}


function checkWinner(scoreDolphins, scoreKoalas){
    if (scoreDolphins >= 2 * scoreKoalas){
        return `Dolphins win (${scoreDolphins} vs ${scoreKoalas})`;
    } else if (scoreDolphins <= 2 * scoreKoalas){
        return `Koalas win (${scoreKoalas} vs ${scoreDolphins})`;
    } else {
        return `No team wins! Dolphins: ${scoreDolphins}, Koalas: ${scoreKoalas}`;
    }

}

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));



