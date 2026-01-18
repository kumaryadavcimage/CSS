let arr = [9,8,7,6,5,4,3,2,1];

const result = arr.splice(1,3) // from index 1 remove 3 element to the right

console.log("Return value",result);
console.log(arr);

arr.splice(1);
console.log(arr);

let array = [9,8,7,6,5,4,3,2,1];
const res = array.splice(3,4,-1,-3,-2,-4,0);
console.log(array);

