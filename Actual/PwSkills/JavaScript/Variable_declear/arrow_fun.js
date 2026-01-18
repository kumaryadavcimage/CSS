// lamda function => arrow function () => {} // just like the anomonous function

function processArray(array, fn){
    for (let index = 0; index < array.length; index++) {
        console.log("index",index, "value",array[index], "return value of fn", fn(array[index]));
        
        
    }
}

processArray([2,3,4,1,5], (x) => {return x*x*x}); // passing function as an argument, fun->cube
processArray([2,3,4,1,5], (x) => x*x*x); // you've only one line adn that too a return statement of function