//c.Sum of all numbers in an array:
//anonymous function:
const sum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = sum1.reduce(function(acc, num) {
    return acc + num;
}, 0);
console.log(sum);

//iife
const sum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function() {
    const sum = sum2.reduce(function(acc, num) {
        return acc + num;
    }, 0);
    console.log(sum);
})();