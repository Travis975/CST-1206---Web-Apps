// YOU have to use a HOF.

// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy'

let testWord = "Crazyy";

function containY(word){ 
  if (word.includes('y')){
    return true;
  }
  else {
    return false;
  }
}

function hasLetterY(word, fn){
  if(fn(word)){
    console.log("YES");
  }
  else{
    console.log("NO");
  }
}

hasLetterY(testWord,containY);

// 2. Write a function that finds a factorial of a number.
// Example - 5! = 120 (Use a normal loop for this one.)

function getFactorial(num) {
  let value = 1;
  for (let i = 1; i <= num; i++){
    value *= i
  }
  console.log(value);
}

getFactorial(5); // Got 120


//3. You have an array of students
let studentList = [
  { name: "Mike", marks: [80, 50, 60, 100] },
  { name: "Daniel", marks: [40, 50, 100, 100] },
  { name: "Stacy",marks: [20, 100, 50, 70] }
];

function calculateAverage(marklist) {
  const sum = marklist.reduce((acc, mark) => acc + mark, 0);
  return sum / marklist.length;
}

function highestAverageStudent(){
  let highestAverage = 0;
  let highestAverageStudent;

  for (const student of studentList) {
    const average = calculateAverage(student.marks);

    if (average > highestAverage) {
      highestAverage = average;
      highestAverageStudent = student;
    }  
  }
  return highestAverageStudent.name;
}  

// const bestStudent = studentWithHighestAverage(studentList);
const bestStudent = highestAverageStudent();
console.log(bestStudent);

//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4

function countOfNumbers(arr) {

  // Use the reduce functions to make the occurances object to keep count of appearances
  const occurrences = arr.reduce((acc, number) => {
    acc[number] = (acc[number] || 0) + 1;
    return acc;
  },{});

  let mostCommonNum;
  let maxCount = 0;

  // Loop through the occurrences object and get the highest count 
  Object.entries(occurrences).forEach(([number, count]) => {
    if (count > maxCount) {
      maxCount = count;
      mostCommonNum = number;
    }
  });

  return mostCommonNum;
}

const testArr = [ 20, 4, -10, 4, 11, 20, 4, 2];
const result = countOfNumbers(testArr);

console.log(result);


//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]

function leastCommonNum(arr) {

  // Use the reduce functions to make the occurances object to keep count of appearances
  const occurrences = arr.reduce((acc, number) => {
    acc[number] = (acc[number] || 0) + 1;
    return acc;
  },{});

  let leastCommonNum;
  let minCount = Infinity;

  // Loop through the object and get the lowest count 
  Object.entries(occurrences).forEach(([number, count]) => {
    if (count < minCount) {
      minCount = count;
      leastCommonNum = number;
    }
  });

  return leastCommonNum;
}

const testArr2 = [20, 4, -10, 4, 11, 20, 4, 2]; 
const result2 = leastCommonNum(testArr2); // Should return 2

console.log(result2);


//6. You have an arryay of palindromes and not palindromes,  and you have to return only palindromes array

// ['abc', 'aba', 'ccc', 'dca', 'a']

// ['aba', 'ccc', 'a']

function isPalindrome(str) {

  // Split the string into an array.Then flip the array and join it together back into a string
  const reversedStr = str.split('').reverse().join('');

  // Return the string if it matches the reverse(it is a palindrome)
  return str === reversedStr;
}

const mixedArr = ['abc', 'aba', 'ccc', 'dca', 'a'];

// use the filter function to make a new array with the words that meet the criteria
const palindromesArr = mixedArr.filter(isPalindrome); // Should return ['aba', 'ccc', 'a']

console.log(palindromesArr);