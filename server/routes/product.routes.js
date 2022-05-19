const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
	app.post('/api/products', ProductController.createProduct);
	app.get('/api/products', ProductController.getAll);
	app.get('/api/products/:id', ProductController.getProduct);
	app.get(
		'/api/products/category/:category',
		ProductController.getCategoryProducts
	);
	app.put('/api/products/:id', ProductController.updateProduct);
	app.delete('/api/products/:id', ProductController.deleteProduct);
};
