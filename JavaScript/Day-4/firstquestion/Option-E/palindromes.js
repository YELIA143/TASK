//e.Return all the palindromes in an array:
//anonymous function:

const arr1 = ["racecar", "apple", "level", "hello"];
const palindromes = arr1.filter(function(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
});
console.log(palindromes);

//IIFF
const arr2 = ["racecar", "apple", "level", "hello"];
(function() {
    const palindromes = arr2.filter(function(str) {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    });
    console.log(palindromes);
})();