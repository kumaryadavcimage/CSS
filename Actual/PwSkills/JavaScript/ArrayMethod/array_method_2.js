const arr = [1,2,3,4,5,6,7]

const oddElement = arr.filter((element) => {
    console.log(element)
    return element %2 !=0
})

console.log(oddElement)

const newArray = arr.map((element) => {
    if(element % 2==0) return element
})

console.log(newArray);
