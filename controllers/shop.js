const Product = require('../models/product')
const Cart = require('../models/cart');

exports.getProducts =  (req, res, next) => {
    Product.findAll()
    .then(products => {
    res.render('shop/product-list', {
        prods: products,
        pageTitle : 'All Products',
        path : '/products'
    });
  }).catch(err => {
    console.log(err);
  });
}

exports.getIndex = (req, res, next) => {
   Product.findAll()
   .then(products => {
    res.render('shop/index', {
      prods: products,
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

// single product detail
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
  .then((product) => {
    res.render('shop/product-detail', {
      pageTitle : 'Product Detail',
      product : product,
      path : '/products'
  });
  }).catch(err => console.log(err));
}