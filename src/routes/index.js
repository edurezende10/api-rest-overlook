const { Router } = require('express');

const UserController = require('../Controllers/UserController/index.js');
const LoginController = require('../Controllers/Login/index.js');
const ProductController = require('../Controllers/ProductController/index');
const CartController = require('../Controllers/CartController/index');
const { authenticate } = require('../middlewares/index');
const routes = Router();

routes.post('/users', UserController.createUser); // criar usuario
routes.get('/users', UserController.getUsers); //listar usuarios
routes.get('/users/:user_id', UserController.getUsersById); //listar usuario especifico
routes.post('/login', LoginController.createSession); //para fazer o login

routes.post('/products/:user_id', ProductController.createProduct); //
routes.get('/products/user/:user_id', ProductController.getUserProducts); //
routes.get('/products/promo', ProductController.getProductsPromo); //
routes.get('/products/preview', ProductController.getProductsPreview); //
routes.patch(
  '/products/:user_id/:product_id',
  authenticate,
  ProductController.updateProduct,
); // atualizar produtos
routes.delete(
  '/products/:user_id/:product_id',
  authenticate,
  ProductController.deleteProduct,
); //deletar produtos
routes

routes.get('/products/:product_id', ProductController.getProductsById); // listar um produto especifico
routes.get('/products', ProductController.getProducts); //listar todos produtos

routes.get('/carts/:user_id', authenticate, CartController.getUserCart); // todos os carts de um usuario
routes.post('/carts/:user_id', authenticate, CartController.createCart); //adicionar ao carrinho
routes.get('/carts/:user_id/:cart_id', authenticate, CartController.getCart); //pegar um carrinho especifico

module.exports = routes;
