function createAsyncPromise() {
    return new Promise((res,rej) => {
        // async algorithm
        setTimeout(function timerCompleted() {
            // lets change the state of promise
            setTimeout(() => {
                const value = Math.random();
                if(value <0.5){
                    // resolve the promise
                    res(value)
                }else{
                    // reject the promise
                    rej(value);
                }
            },5000)
        })
    })
}

const response = createAsyncPromise();

response.then(function fullfieldHandler(value) {
    console.log('value is  ',value);
}, function rejectHandler(value) {
    console.log('rejected ',value);
}

)

response.then(function fullfieldHandler(value) {
    console.log('value is  ',value);
}, function rejectHandler(value) {
    console.log('rejected ',value);
}

)
for(let i=0;i<1000000000;i++){
    // some sync work 
}