// const arr = [2,3,1,4,5];
// const result = arr.map((Element)=>{
//     console.log(Element);
//     return Element*Element
// })
// console.log(result)

// const result1 =arr.forEach((Element) =>{
//     console.log(Element);
//     return Element*Element
// })
// console.log(result1);


// const arr=[1,2,3,4,5,6,7]
// const newArray=arr.filter((ele)=>{
//     //return ele%2 !== 0 ;
//     //return []
// })

// console.log(newArray);

const products = [
    {
        id:1,
        name:"iPhone",
        price:2000,
    },
    {
        id:2,
        name:"SUMSUNG",
        price:3000,
    },
    {
        id:3,
        name:"Nothing",
        price:5000
    }
]

const newArray = products.filter((product) => {
    //return {id:product.id,Price:product.price}
    return product.price <=3000;
})

console.log(newArray)