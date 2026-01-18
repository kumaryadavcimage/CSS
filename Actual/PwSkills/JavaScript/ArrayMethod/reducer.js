// const shoppingCart = [
//     {product: 'Shoes', price: 80, quantity:1},
//     {product: 'Bag', price:120, quantity:2},
//     {product:'watch',price:250, quantity:4}
// ];

// const result = shoppingCart.reduce(function reducer(accumulator, currentValue) {
//     console.log(accumulator);
    
//     return accumulator + currentValue.price * currentValue.quantity
// },0)

// console.log(result)

// const arrary = [1,2,3,4,5]
// function factorial() {
//     return arrary.reduce(function reducer(acc,val){
//         return acc*val;
//     }, 1);
// }

// console.log(factorial());

// function factorial(num) {
//     return Array.from({length:num}, (_,i) => i+1).reduce((acc,val) => acc * val, 1);
// }

function factorial(num) {
    return Array.from([300,4,1,2,5], (_,i) => i+1). reduce((acc, val) => acc * val,1)
}

console.log(factorial(4));

// _ : current element , i : index on iteration

