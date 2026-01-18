function processArray(arg,fun){
    for (let index = 0; index < arg.length; index++) {
        console.log("index :", index, "value : ",arg[index], "return value of fun : ",fun(arg[index]) )
        
    }
}
// process is the higher order function 
processArray([1,2,3,4,5],function cube(p){return p*p*p}) // cube is callback