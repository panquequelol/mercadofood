const mongoose = require('mongoose');
// timestamps creates createdAt and updatedAt
// versionKey false, removes _v attribute
const ProductSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
			minlength: [2, 'Name should be longer than 2 characters'],
		},
		price: {
			type: Number,
			required: [true, 'You should provide a price'],
			min: [0.1, 'Prices must go higher than $0.1'],
			max: [999, 'Prices must go below $999'],
		},
		description: {
			type: String,
			required: [true, 'Please provide a description'],
			minlength: [3, 'Description should be longer than 3 characters'],
		},
		packageSize: {
			type: String,
			required: [true, 'Please provide a package description'],
			minlength: [3, 'Description should be longer than 3 characters'],
		},
		category: {
			type: String,
			required: [true, 'Please provide a category'],
			minlength: [3, 'Category should be longer than 3 characters'],
		},
		imageURL: {
			type: String,
			required: [true, 'Please provide a image URL'],
			minlength: [10, 'The image URL should be longer than 10 characters'],
		},
		onSale: {
			type: Boolean,
			require: [true, 'Please specify if the product is on sale or not'],
		},
		salePercentage: {
			type: Number,
			min: [1, 'Percentage should be higher than 1%'],
			max: [100, 'Percentage should be lower than 100%'],
		},
	},
	{ timestamps: true, versionKey: false }
);
const Product = mongoose.model('products', ProductSchema);
module.exports = Product;
