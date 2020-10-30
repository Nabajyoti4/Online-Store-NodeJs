const Product = require('../models/product')
const Cart = require('../models/cart');

exports.getProducts =  (req, res, next) => {
    const products =Product.fetchAll().then(([rows, fieldData]) => {
    res.render('shop/product-list', {
        prods: rows,
        pageTitle : 'All Products',
        path : '/products'
    });
  }).catch(err => {
    console.log(err);
  });
}

exports.getIndex = (req, res, next) => {
  const products = Product.fetchAll().then(([rows, fieldData]) => {
    res.render('shop/index', {
      prods: rows,
      pageTitle : 'Shop',
      path : '/'
  });
  }).catch(err => {
    console.log(err);
  });

}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle : 'Cart',
    path : '/cart'
});
}


exports.postCart=  (req, res, next) => {
  const prodId = req.body.productId;
  console.log(prodId);
  const product = Product.findById(prodId);
  const cart = Cart.addProduct(prodId, product.price);
  console.log(cart);

  res.redirect('/cart');

//   res.render('shop/cart', {
//     pageTitle : 'Cart',
//     path : '/cart'
// });
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle : 'Orders',
    path : '/orders'
});
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle : 'Checkout',
    path : '/checkout'
});
}

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  const product = Product.findById(prodId);


  res.render('shop/product-detail', {
    pageTitle : 'Product Detail',
    product : product,
    path : '/products'
});
}