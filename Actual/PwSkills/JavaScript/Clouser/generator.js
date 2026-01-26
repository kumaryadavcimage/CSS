function* gen(){ // with * this is not the normal function this is the generator function
    
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
const x = gen();
console.log(x.next())