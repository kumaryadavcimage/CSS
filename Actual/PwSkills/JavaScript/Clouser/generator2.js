function* gen() {
    console.log('Start');
    yield 10;
    console.log('middle');
    const x = 10 + (yield 30)
    console.log(x)
    yield x;
}
const x = gen();
console.log(x.next())
console.log(x.next())
console.log(x.next(99))
console.log(x.next())