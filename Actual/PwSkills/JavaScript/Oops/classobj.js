class Product{
    constructor(n,p,d,i){
        this.name =n;
        this.desc =d;
        this.price = p;
        this.image = i;
        console.log(`This value like this ${this.name}`)
    }
    displayProduct(){
        // some impl
        setTimeout(() => {
            console.log("Product details are", this.name, this.desc, this.price, this.image)
        },7000)
    }
}

const p1 = new Product("Iphone", "Apple", "100000","apple.jbp");
p1.displayProduct();

const p2=new Product("Sumsung", "Galaxy", "70000","sumsung.jpg")
p2.displayProduct();