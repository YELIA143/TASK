//h.Rotate an array by k times:
//anonymous function:
function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;
    const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    return rotatedArray;
}

const arr = [1, 2, 3, 4, 5];
const k = 3;
console.log(rotateArray(arr, k));
//IIFe
const arr2 = [1, 2, 3, 4, 5];
const k2 = 2;

(function() {
    const n = arr2.length;
    const rotatedArray = new Array(n);
    for (let i = 0; i < n; i++) {
        rotatedArray[(i + k2) % n] = arr2[i];
    }

    console.log(rotatedArray);
})();
