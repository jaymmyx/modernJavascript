const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHeigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHeigherBMI);
