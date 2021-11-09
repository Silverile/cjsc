//Use strict on the beginning of the script for writing a secure code
//It creates a visible errors in Developer console where in other situations JS will
//fail silently
// 'use strict';
//
// let hasDriversLicense = false;
// const passTest = true;
//
// if (passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log("TEST TEST TEST");

// function logger() {
//     console.log('Testing function logger')
// }
// //calling / running / invoking function
// logger();
//
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//
//     return juice;
//
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
//
// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//
//     return 2021 - birthYear;
// }
//
// calcAge1(1996)
// console.log(calcAge1())


//Arrow function

// const calcAge3 = birthYear => 2021 - birthYear;
// const age3 = calcAge3(1996);
// console.log(age3);
//
//
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
//
// console.log(yearsUntilRetirement(1996, 'Alex'));


//Coding challenge section 2 - Functions

// const calcAverage = (a, b, c) => (a, b, c)/3
// console.log(calcAverage(3, 4, 5));
//
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);
//
// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team wins...');
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);
//
// checkWinner(576, 111);
//
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// let friends = ['Roman','Ksushka','Dimazz','Byk','Staryi Hui'];
// console.log(friends);
// console.log(friends.length);
//
// friends.pop(); //remove last element from array
// console.log(friends);

// const alex = {
//     firstName: 'Alex',
//     lastName: 'Morozov',
//     birthYear: 1996,
//     job: 'Developer',
//     friends: ['Roman','Ksushka','Dimazz','Byk','Staryi Hui'],
//     hasDriversLicense: false,
//
//     // calcAge: function (birthYear) {
//     //     return 2021 - birthYear;
//     //
//     // }
//     calcAge: function () {
//         console.log(this)
//         return 2021 - this.birthYear;
//     }
// }
// console.log(alex.calcAge());


//Challenge
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     }
// }
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     }
// }
// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi)


//FOR loop
//For loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++){
//     console.log(`Lift weight ${rep} times`)

//while loop
//
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }


// let rep = 1
// while (rep <= 10){
//     console.log(` WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//     rep++;
//
// }

// let dice = Math.trunc(Math.random() * 6 ) + 1;
//
// while (dice !==6){
// console.log(`You rolled a ${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1;
// if (dice === 6) console.log('Loop is about to end...');
// }
