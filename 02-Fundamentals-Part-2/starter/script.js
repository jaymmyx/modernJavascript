// const massMark = 78;
// const massJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
// }

// averageScoreDolphins = (96 + 108 + 89) / 3;
// averageScoreKoalas = (88 + 91 + 110) / 3;
// console.log(averageScoreDolphins, averageScoreKoalas);

// if (averageScoreDolphins < 100 || averageScoreKoalas < 100) {
//   console.log("No team wins the trophy!");
// } else if (averageScoreDolphins > averageScoreKoalas) {
//   console.log("Dolphins team wins!");
// } else if (averageScoreKoalas > averageScoreDolphins) {
//   console.log("Koalas team wins!");
// } else if (averageScoreDolphins === averageScoreKoalas) {
//   console.log("The game is drawn!");
// }

// 40,275,425

// const bill = 425;
// const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
// console.log(`The bill is ${bill},
// The tip is ${bill * tip},
// The total is ${bill + bill * tip}`);

// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const calcAverage = (a, b, c) => (a + b + c) / 6;
// const averageScoreDolphins = calcAverage(44, 23, 71);
// const averageScoreKoalas = calcAverage(65, 54, 49);

// const checKWinner = () => {
//   if (averageScoreDolphins >= 2 * averageScoreKoalas) {
//     console.log(
//       `Dolphins win ${averageScoreDolphins} vs. ${averageScoreKoalas}`
//     );
//   } else if (2 * averageScoreDolphins <= averageScoreKoalas) {
//     console.log(`Koalas win ${averageScoreKoalas} vs. ${averageScoreDolphins}`);
//   } else {
//     console.log("No winner!");
//   }
// };

// checKWinner();

// const calcTip = (value) => {
//   if (value >= 50 && value <= 300) {
//     return value * 0.15;
//   } else {
//     return value * 0.2;
//   }
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(total);

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     const BMI = this.mass / this.height ** 2;
//     this.BMI = BMI;
//     return BMI;
//   },
// };

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     const BMI = this.mass / this.height ** 2;
//     this.BMI = BMI;
//     return BMI;
//   },
// };

// console.log(
//   `${
//     john.calcBMI() > mark.calcBMI
//       ? "John's BMI (" +
//         john.calcBMI() +
//         ") is higher than Mark's BMI (" +
//         mark.calcBMI() +
//         ")"
//       : "Mark's BMI (" +
//         mark.calcBMI() +
//         ") is higher than John's BMI (" +
//         john.calcBMI() +
//         ")"
//   }`
// );
