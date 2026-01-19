function createAsyncPromise() {
    return new Promise((res,rej) => {
        // async algorithm
        setTimeout(() => {
            // lets change the state pf pormise
            const value = Math.random();
            if(value < 0.5) {

                // resolve the promise
                res(value);
            }else {
                // reject the promise
                rej(value);
            }

        },100)
    })
}

const response = createAsyncPromise();
console.log("response is ",response);
for (let i = 0; i < 10000000; i++) {
    // some sync work
    
}
console.log("promise is",response);
for (let i = 0; i < 10000000; i++) {
    // some sync work
    
}
