//f.Return median of two sorted arrays of the same size:
//Using an anonymous function:
function findMedian(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    const sortedArray = mergedArray.sort((a, b) => a - b);
    const length = sortedArray.length;
    if (length % 2 === 0) {
        const middle1 = sortedArray[length / 2 - 1];
        const middle2 = sortedArray[length / 2];
        return (middle1 + middle2) / 2;
    } else {
        return sortedArray[Math.floor(length / 2)];
    }
}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(findMedian(arr1, arr2));
//IIFE:
const arr3 = [1, 3, 5];
const arr4 = [2, 4, 6];
(function() {
    const mergedArray = arr3.concat(arr4);
    const sortedArray = mergedArray.sort((a, b) => a - b);
    const length = sortedArray.length;
    if (length % 2 === 0) {
        const middle1 = sortedArray[length / 2 - 1];
        const middle2 = sortedArray[length / 2];
        console.log((middle1 + middle2) / 2);
    } else {
        console.log(sortedArray[Math.floor(length / 2)]);
    }
})();