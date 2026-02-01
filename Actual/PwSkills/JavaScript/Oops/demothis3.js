const obj = {
    x:10,
    y:20,

    nested: {
        x:13,
        y:21,
        innerDisplay : () => {
            console.log(`The value of x inner ${this.x} and the value of y ${this.y}`) // this is find the outer value then this is give the undefine
        }
    },
    outerDisplay : function(){
        console.log(`The value of outer x ${this.x} and the value of y ${this.y}`)
    }
}

obj.nested.innerDisplay();
obj.outerDisplay()