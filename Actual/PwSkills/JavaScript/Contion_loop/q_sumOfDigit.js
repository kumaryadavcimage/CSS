let x=5213
let result=0;
while (x>0) {
    let lastDigit = x%10;
    result +=lastDigit;
    x = Math.floor(x/10);
}
console.log(result);

