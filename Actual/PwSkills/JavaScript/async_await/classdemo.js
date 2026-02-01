class Product {
    // properties -> class members / data members
    name;
    price;
    description;
    image;

    constructor(name,price,location){
        console.log("Hii EveryOne What's your mind today");
        this.name=name,
        this.price=price,
        this.location=location,

        
    }

    // behaviours -> class methods / member functions
    buyProduct(){
        console.log("ought a new product")
    }
}

const obj = new Product(,price,location);
console.log(obj)