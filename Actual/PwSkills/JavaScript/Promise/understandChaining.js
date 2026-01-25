function createPromise(timer){
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(timer)
        },timer)
    })
}

const Resolver = (val) => {
    console.log(`The Resolver function like ${val}`)
    return 20;
}

const Rejector = (val) => {
    console.log(`The Rejector function like ${val}`)
}

const pr1 = createPromise(10000);
console.log(`The runs the first Promise ${pr1}`)

const pr2 = pr1.then((Resolver,Rejector))
console.log(`The Second promise ${pr2}`)