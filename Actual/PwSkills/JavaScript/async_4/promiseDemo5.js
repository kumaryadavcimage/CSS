function createAsyncPromise() {
    return new Promise((res,rej) => {
        res(100);
    })
}

const response  = createAsyncPromise();

for(let i=0;i<1000000000;i++){
    // some sync work 
}

response.then(function fullfieldHandler(value) {
    console.log('value is ',value);
}, function rejectHandler(value){
    console.log('rejected ',value);
}

)
for(let i=0;i<1000000000;i++){
    // some sync work 
}