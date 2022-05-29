const ProductController = require('../controllers/product.controller');
const UserController = require('../controllers/user.controllers');

const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
	app.post('/api/products', authenticate, ProductController.createProduct);
	app.get('/api/products', authenticate, ProductController.getAll);
	app.get('/api/products/:id', authenticate, ProductController.getProduct);
	app.get(
		'/api/products/category/:category',
		authenticate,
		ProductController.getCategoryProducts
	);
	app.put('/api/products/:id', authenticate, ProductController.updateProduct);
	app.delete('/api/products/:id', authenticate, ProductController.deleteProduct);
	app.post('/api/register', UserController.register);
	app.post('/api/login', UserController.login);
	app.get('/api/logout', UserController.logout);
};
