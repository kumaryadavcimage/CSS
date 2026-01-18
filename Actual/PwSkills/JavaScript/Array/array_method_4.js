// let arr = [1,2,3,4,5,6,7,8,9]

// for (let i = 0; i < arr.length; i++) {
//     console.log('Element at line',i,"is",arr[i])
    
// }
// console.log(arr);

/**
 * foreach goes to every element of the array, and executes the given callback on that element
 * doesn't return anything
 */

// arr.forEach((element,index) => {
//     console.log("Element at index",index, "is",element);
    
// })

/**
 * Implement your own dummy forEach
 * 
 * function foreach(arr,cb){
 * // it applies the cb to every element of array
 * }
 */

function customForEach(arr,cb){
    for (let i = 0; i < arr.length; i++) {
        
        cb(arr[i],i)
    }
}

customForEach([1,2,4], (element,idx) => {
    console.log("Element at index", idx, "is", element);
    
})