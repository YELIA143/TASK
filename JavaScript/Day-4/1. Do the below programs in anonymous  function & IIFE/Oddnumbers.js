//a. Print odd numbers in an array:
//anonymous function:
const oddnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
oddnumbers.forEach(function(num) {
    if (num % 2 !== 0) {
        console.log(num);
    }
});
//OUTPUT : first console.log 
//1
//3
//5
//7
//9
//IIFE
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function() {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})();
//OUTPUT : second console.log
//1
//3
//5
//7
//9
//both will be diplayed in the output :
//1
//3
//5
//7
//9
//1
//3
//5
//7
//9