// function isEvenOrOdd(x){
//     console.trace("Trace of the function")
//     return x%2==0;
// }

// const namedFunctionExpression = function exec(){
//     const result = isEvenOrOdd(10);
// }

// const anoymousFunctionExpression = function(){
//     const result = isEvenOrOdd(11)
// }

// namedFunctionExpression()

function isEvenOrOdd(x,fun){
    
    // call the function
    fun();

    return x%2==0;
}

isEvenOrOdd(10,function exec() {
    console.log('Processing...');
    console.log('Trace of the functions');
});
