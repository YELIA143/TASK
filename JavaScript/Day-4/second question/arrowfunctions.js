//Do the below programs in arrow functions.
//a. Print odd numbers in an array
const arr = [1, 2, 3, 4, 5, 6];
const oddNumbers = arr.filter(num => num % 2 !== 0);
console.log(oddNumbers);

//b. Convert all the strings to title caps in a string array:
const strArray = ["hello", "world", "javascript"];
const titleCapsArray = strArray.map(str => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
console.log(titleCapsArray);

//c. Sum of all numbers in an array:
const arr1 = [1, 2, 3, 4, 5, 6];
const sum = arr1.reduce((acc, num) => acc + num, 0);
console.log(sum);

//d.Return all the prime numbers in an array:

const arr2 = [2, 3, 4, 5, 6, 7, 8, 9];
const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const primeNumbers = arr2.filter(isPrime);
console.log(primeNumbers);

//e. Return all the palindromes in an array:
const arr3 = ["racecar", "apple", "level", "hello"];
const isPalindrome = str => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
};
const palindromes = arr3.filter(isPalindrome);
console.log(palindromes);