const products = []

module.exports = class Product {
    constructor(title, imageUrl, description, price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save(){
        this.id = Math.floor(Math.random() * 100).toString();
        products.push(this);
    }

    static fetchAll(){
        return products
    }

    static findById(id){
        return products.find(product => product.id === id);
    }

}