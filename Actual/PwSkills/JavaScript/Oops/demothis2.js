const obj = {
    x:12,
    y:20,
    display : () =>  {
        console.log(`The value of x ${this.x} and the value of y ${this.y}`)
    }
}

obj.display()
console.log(this)