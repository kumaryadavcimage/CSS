const obj = {
    x:10,
    y:21,

    display: function() {
        console.log(`value of x is ${this.x} and y is ${this.y} from outer x`);

        const innerObj = {
            x: -1,
            y: -2,
            inner : () => {
                console.log(`value of x is ${this.x} and y is ${this.y} from inner x`)
            }
        }
        innerObj.inner()
    }
}
obj.display();
// there are three types of block 
// function, global,block scope