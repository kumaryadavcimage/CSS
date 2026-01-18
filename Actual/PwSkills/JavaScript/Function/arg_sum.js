function addArgument(){
    let result=0;
    for (let index = 0; index < arguments.length; index++) {
        result +=arguments[index]
        
    }
    return result;
}

console.log(addArgument(9,1,2));

console.log(addArgument(7,1,2,0,1));

console.log(addArgument());
