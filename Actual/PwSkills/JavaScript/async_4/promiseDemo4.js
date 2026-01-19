function createAsyncPromise(){
    return new Promise((res,rej) => {
        setTimeout(() => {
            // lets change the state of promise
            const value = Math.random() ;
            if(value < 0.5){
                // resolve the promise
                res(value)
            }else{
                // reject the promise
                rej(value);
            }
        },5000)
    })
}

const response = createAsyncPromise();

response.then(function(value){
    console.log("1. promise fillfilled with",value);
}, function rejectHandler(value) {
    console.log("1. promise rejected with",value);
});

response.then(function(value){
    console.log("2. promise fillfilled with",value);
}, function rejectHandler(value) {
    console.log("2. promise rejected with",value);
});

for(let i=0;i<1000000000;i++){
    // some sync work 
}