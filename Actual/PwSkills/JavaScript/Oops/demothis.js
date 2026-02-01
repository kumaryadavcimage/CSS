// I write the call site without arrow function
// Closer is finomina in javaScript
// lecical scope : this variable is not present in scope then this find the outer scope 

const obj = {
    x:10,
    y:20,
    display : function(){
        console.log(`The value of x ${this.x} and value of y ${this.y}`)
    }
}
obj.display()