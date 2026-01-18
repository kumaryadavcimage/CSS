// const arr=[2,3,1,4,5]

// const result = arr.map((element) => {
//     console.log('Element',element);
//     return element * element
// })

// console.log(result);
/**
 * map function returns us an array
 * 
 * what is the content of this array ?
 * It is the club of all the return values from the cb
 * 
 * // foreach return undefine
 * // map return somthing
 */

// const array=[1,2,3,4,5]

// const result1 = array.forEach((element) => {
//     console.log('Element',element);
//     return element * element
// })

// console.log(result1);


const product = [
    {
        id:1,
        name:'iphone',
        price:10,
    },
    {
        id:2,
        name:'iphone',
        price:10,
    },
    {
        id:4,
        name:'iphone',
        price:10,
    }
]

// const result2=product.map((element) => {
//     console.log('id :',element.id,'name :',element.name,'price : ',element.price)
    
// })
console.log(product);
const modifiedResult = product.map((item)=>{
    return {ID:item.id, Name: item.name, Price:item.price}
})

const arr=[2,3,1,4,5]

const result = arr.forEach((ele,index)=>{
    process.stdout.write(index)
    
    return ele*ele
})
console.log(result)