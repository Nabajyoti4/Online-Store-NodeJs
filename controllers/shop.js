const Product = require('../models/product')

exports.getProducts =  (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop/product-list', {
        prods: products,
        pageTitle : 'All Products',
        path : '/products'
    });
}

exports.getIndex = (req, res, next) => {
  const products = Product.fetchAll();
  res.render('shop/index', {
      prods: products,
      pageTitle : 'Shop',
      path : '/'
  });
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle : 'Cart',
    path : '/cart'
});
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