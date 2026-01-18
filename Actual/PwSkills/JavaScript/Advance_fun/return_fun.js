function fun(){
    console.log('Called the function fun');

    return function cleanUp(){
        console.log('Cleaning up the resources');
    }
}

const result = fun();
console.log(result);
result()
