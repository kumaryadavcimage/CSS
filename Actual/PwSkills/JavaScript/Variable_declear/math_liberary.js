// abs

console.log(Math.abs(-9));

// Round OFF value
console.log(Math.round(5.5))

// floor  -> it return first integer just less than or equal to x

console.log(Math.floor(4.3));
console.log(Math.floor(7.9));
 
// ceil -> This helps you find, first integer greater than or equal to x

console.log(Math.ceil(7.9));


// Min Max
console.log(Math.max(8,9,2));
console.log(Math.min(3,4,5));

// sqrt -> Square root
console.log(Math.sqrt(100));

// average
console.log(Math.avg);

// random function : random function get the random value 0-1
console.log(Math.random());

// You will be given two values, x and y, and you need to generate a random number between x and y inclusive of x and y

console.log(Math.random(8,100));

/**
 @param {x} Lower_Limit
 @param {y} Upper_Limit
 @returns random number in the range [x,y]
 */

function randomInRange(x,y){ // 10,25 -> y-x + 1 => 35-10+1 -> 26
    return Math.random()*(y-x+1) + x // [10,36]
    // return Math.floor(Math.random()*(y-x+1)+x);
}

console.log(randomInRange(10,35));

// Extra console thing
//Math.random()*30 // 0 to 30
//Math.random()*30 + 10 // 10 to 40 