//g.Remove duplicates from an array:
//anonymous function:
const arr = [1, 2, 2, 3, 4, 4, 5, 5];
const uniqueArray = arr.filter(function(value, index, self) {
    return self.indexOf(value) === index;
});
console.log(uniqueArray);

//IIFE:
const arr1 = [1, 2, 2, 3, 4, 4, 5, 5];
(function() {
    const uniqueArray = arr1.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
    console.log(uniqueArray);
})();
