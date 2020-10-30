const cart = {
    products : [],
    totalPrice : 0
};

let updatedProduct;


module.exports = class Cart {
   
    static addProduct(id, productPrice){
        const existingProductIndex = cart.products.findIndex(prod => prod.id == id);
        const existingProduct = cart.products[existingProductIndex];

        if(existingProduct){
            updatedProduct = { ... existingProduct };
            updatedProduct.qty = updatedProduct.qty + 1;
            cart.products = [...cart.products];
            cart.products[existingProductIndex] = updatedProduct;
        }else{
            updatedProduct = {
                id : id,
                qty : 1
            };
            cart.products = [...cart.products, updatedProduct];
        }

        cart.totalPrice = cart.totalPrice + productPrice;
        cart.push({
            products : cart.products,
            totalPrice : cart.totalPrice
        });
    }
}