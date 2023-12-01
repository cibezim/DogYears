//Dog Years

// my age
const myAge = 26;
// early years
let earlyYears = 2;
// first 2 years of a dog is 10.5 in dog years
earlyYears = 2 * 10.5;
// Age subtracted 2 years for early years
let laterYears = myAge - 2;
// rest of age mulitpled by 4 for dogs years
laterYears = laterYears * 4;
console.log(earlyYears);
console.log(laterYears);
// age in dog years
const myAgeInDogYears = earlyYears + laterYears;
// my name
const myName = 'Chukwuma'.toLowerCase();
// print statement with name, human age, and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);