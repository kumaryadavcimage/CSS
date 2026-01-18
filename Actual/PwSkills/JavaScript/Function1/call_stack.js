function f1(){
    console.log('inside f1');
}
function f2(){
    console.log('inside f2');
    f1()
    return 7+8;
}
function f3(){
    console.log('inside f3');
    f2();
    return 5;
}
function f4(){
    console.log('inside f4');
    const x = 10;
    const y = f3();
    return x+y;
}