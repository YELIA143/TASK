//b.Convert all the strings to title caps in a string array:
//anonymous function:
const strArray = ["hello", "world", "javascript"];
const titleCapsArray = strArray.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
});
console.log(titleCapsArray);

//IIFE:

const newstrArray = ["hello", "world", "javascript"];
(function() {
    const titleCapsArray = newstrArray.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
    console.log(titleCapsArray);
})();