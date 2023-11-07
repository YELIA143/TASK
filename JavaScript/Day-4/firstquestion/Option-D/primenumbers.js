//d. Return all the prime numbers in an array:
const arr1 = [2, 3, 4, 5, 6, 7, 8, 9];
const primeNumbers = arr1.filter(function(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
});
console.log(primeNumbers);

//IIRF:

const arr2 = [2, 3, 4, 5, 6, 7, 8, 9];
(function() {
    const primeNumbers = arr2.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
    console.log(primeNumbers);
})();



