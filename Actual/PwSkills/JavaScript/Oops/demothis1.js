const obj = {
    x:10,
    y:20,

    nested : {
        y:210,
        z:32,
        innnerDisplay : function(){
            console.log(`The value of InnerDisplay x ${this.x} and the value of y ${this.y}`)
        }
    },
    outerDisplay : function() {
        console.log(`The value of OuterDisplay x ${this.x} and the value of y ${this.y}`)
    }
}
obj.nested.innnerDisplay();
obj.outerDisplay()

// Lecical Scope that access to outside of function 