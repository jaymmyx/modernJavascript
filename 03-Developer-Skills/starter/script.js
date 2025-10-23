/*

Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
days ... 21oC in 2 days ... 23oC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§Data 1: [17, 21, 23]
§Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 😀

*/

// How to create the return string?
// Do we need to hardcode the whole string? No use a for loop

// Each array item will need its own string.
// We need a way to join all the strings in systematic order => string concatenation.
// How to account for last 3 dots?
const temperatures = [12, 5, -5, 0, 4];

const printForecast = (temperatures) => {
  let finalForecast = "...";

  for (let i = 0; i < temperatures.length; i++) {
    const dailyForecast = ` ${temperatures[0]}oC in ${i + 1} days ...`;
    finalForecast += dailyForecast;
  }

  return finalForecast;
};

console.log(printForecast(temperatures));
