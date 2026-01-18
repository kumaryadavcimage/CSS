console.log(Number.MAX_VALUE); // +infinity
console.log(Number.MIN_VALUE); // -infinity

// convert a decimal number to a binary

const x=13;
console.log(x.toString(2)); // converts the number to a binary
console.log(x.toString(8)); // converts the number to octal

// if you call toString without an argument, then it just converts the number to string 
console.log(x.toString());


// to convert a binary to decimal 
// we have a function parseInt that takes a string representing the binary number and throw the decimal value of it Apart form the string, you pass the base of the input u gave to function

console.log(parseInt('1101',2));
//console.log(parseInt('15',B));

// The most interesting number of JS: NaN(Not a Number)

// let's say, we have a collection (can be represented with arrays) of elements and u want to search for and element. if you found the element, you return index of the element 
// In case when element if not found what should we return ?

// one option is to return -1, undefine and null,

console.log(typeof(NaN));

// fun fact about NaN, it the only value of JS, that is not equal to itself

// Precision of a number
const num = 10.345178;
console.log(num.toPrecision(5)); // number of significant digits to print
console.log(num.toFixed(3)); // number of decimal places after decimal that u want to get 


// premitive like then values 100
// non premitive just like the object that depends on other like atoms, object internally has two string

// zero
const zero = 0;
const pos_zero = +0;
const neg_zero = -0;

console.log(zero,pos_zero,neg_zero);
console.log(pos_zero == neg_zero);
console.log(zero === neg_zero);


// A big integer as well is present in JS
const y = 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789n;
console.log(y);

const big = BigInt("1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890")

console.log(big)

console.log(0n == 0);
console.log(0n === 0);
