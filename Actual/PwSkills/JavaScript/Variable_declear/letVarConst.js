// The major difference between let and var exist around the scoping mechanism

// let and const support block scope, if black scope not present then global scope
// var support function scope, and if function scope not present then global scope

// let and const support TDZ
// var doesn't support TDZ

// Differences between let and const
// Reassignment

// variables declared with let are reassignable
// const on the other hand is not

function constReassignMent(){
    const x=10;
    console.log(x);
    x='sanket';
    console.log(x);
}

function constReassignmentWithObjects(){
    const obj = {x:10,y:20};
    console.log(obj);
    obj = {a:5}
}

function constUpdatingValue(){
    const o = {x:100, y:0};
    o.x=90;
    o.y=23;
    console.log('This obj is printed',o.x,o.y)
}

constUpdatingValue()

function temp(){
    const x = {a:10,b:20}
    console.log(x);
    const y = x; // only teke the memory reference that's it
    y.a=0;
    y.b=20;
    console.log(y);
    console.log(x);
}
temp()