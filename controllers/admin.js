const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render("admin/edit-product", {
         pageTitle: "Add Product",
         path : "/admin/add-product",
         editing : false
       });
  }

  //add products
const products = [];
exports.postAddProduct = (req, res, next) => {
    const title  = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(null,title, imageUrl, description, price);
    product.save();
    res.redirect("/");
  }  

  exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;

    if(!editMode){
      return res.redirect('/');
    }

    const product = Product.findById(req.params.productId);

    if(!product){
      return res.redirect('/');
    }

    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path : "/admin/edit-product",
      editing: editMode,
      product : product
    });

  }  

  exports.postEditProducts = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    const updatedProduct = new Product(
      prodId,
      updatedTitle,
      updatedImageUrl,
      updatedDesc,
      updatedPrice
    );

    updatedProduct.save();
    res.redirect('/admin/products');
  
  }


  exports.postDeleteProduct = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('admin/products', {
        prods: products,
        pageTitle : 'Admin Products',
        path : '/admin/products'
    });
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('admin/products', {
        prods: products,
        pageTitle : 'Admin Products',
        path : '/admin/products'
    });
}