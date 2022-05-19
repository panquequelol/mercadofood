const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
	Product.create(req.body)
		.then((product) => res.json(product))
		.catch((error) => res.json({ message: 'There was an error ' + error }));
};
module.exports.getAll = (req, res) => {
	Product.find()
		.then((products) => res.json(products))
		.catch((error) => res.json({ message: 'There was an error ' + error }));
};
module.exports.getProduct = (req, res) => {
	Product.findOne({ _id: req.params.id })
		.then((product) => res.json(product))
		.catch((error) => res.json({ message: 'There was an error ' + error }));
};
module.exports.getCategoryProducts = (req, res) => {
	Product.find({ category: req.params.category })
		.then((products) => res.json(products))
		.catch((error) => res.json({ message: 'There was an error ' + error }));
};
module.exports.updateProduct = (req, res) => {
	Product.findByIdAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		runValidators: true,
	})
		.then((product) => res.json(product))
		.catch((error) => res.json({ message: 'There was an error ' + error }));
};
module.exports.deleteProduct = (req, res) => {
	Product.deleteOne({ _id: req.params.id })
		.then((result) => res.json(result))
		.catch((error) => res.json({ message: 'There was an error ' + error }));
};
