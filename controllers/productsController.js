const Product = require('../models/Product');
const { STATUS_CODE } = require('../constants/statusCode');
const MENU_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Add Product', path: '/products/new' },
];

const getProductsView = (req, res) => {
  const products = Product.getAll();
  res.render('products', {
    headTitle: 'Shop - Products', // Dodajemy headTitle
    products,
    menuLinks: MENU_LINKS,
    activeLinkPath: '/products',
  });
};

const getAddProductView = (req, res) => {
  res.render('add-product', {
    headTitle: 'Shop - Add Product', // Dodajemy headTitle
    menuLinks: MENU_LINKS,
    activeLinkPath: '/products/new',
  });
};

const addNewProduct = (req, res) => {
  const { name, description } = req.body;
  const newProduct = new Product(name, description);
  Product.add(newProduct);
  res.redirect('/products/new');
};

const getNewProductView = (req, res) => {
  const lastProduct = Product.getLast();
  res.render('new-product', {
    headTitle: 'Shop - New Product', // Dodajemy headTitle
    newestProduct: lastProduct, // Dodajemy newestProduct, który będzie wyświetlony w widoku
    menuLinks: MENU_LINKS,
    activeLinkPath: '/products/new',
  });
};

const getProductView = (req, res) => {
  const { name } = req.params;
  const product = Product.findByName(name);
  
  if (product) {
    res.render('product', {
      headTitle: `Shop - ${product.name}`, // Dodajemy headTitle
      product,
      menuLinks: MENU_LINKS,
      activeLinkPath: `/products/${name}`,
    });
  } else {
    res.status(STATUS_CODE.NOT_FOUND).render('404', {
      headTitle: 'Product Not Found', // Dodajemy headTitle
      menuLinks: MENU_LINKS,
      activeLinkPath: '/404',
    });
  }
};

const deleteProduct = (req, res) => {
  const { name } = req.params;
  Product.deleteByName(name);
  res.status(STATUS_CODE.OK).json({ success: true });
};

module.exports = { 
  getProductsView, 
  getAddProductView, 
  addNewProduct, 
  getNewProductView, 
  getProductView, 
  deleteProduct 
};
