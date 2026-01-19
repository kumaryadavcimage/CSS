function createSyncPromise () {
    return new Promise((res,res) => {
        // sync algorithm
        for (let i = 0; i < 10000000; i++) {
            // some sync work
            
        }
        res("sync work is done",100)
    })
}

const response = createSyncPromise();
console.log("response is ",response);