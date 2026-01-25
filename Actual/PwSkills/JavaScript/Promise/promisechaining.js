function createPromise(timer) {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(timer)
        },timer)
    });
}

const resolver = (val) => {
    console.log(`The Resolve values is ${val}`)
    return 20
}

const rejecter = (val) => {
    console.log(`The Rejector values is ${val}`);
}

createPromise(10000)

.then((value) => {
    console.log('First Promise Value',value)
    return value*2
})

.then((value) => {
    console.log('Second Promise Value',value)
    return value*2
})

.then((value) => {
    console.log('Thired Promise Value',value);
    return value*2
})