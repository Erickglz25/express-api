var Product = require('../models/Product.js');

/*
var Product = require('../models/Product.js');

exports.findAllProducts = function(req,res){
	//res.send('find all');
	console.log('get all products');

};
//cambiar por el productfind

exports.AddProducts = function(req,res){
	res.send('Add Products');
	console.log(req.body);

	var product = new Product({
		name: req.body.name,
		photo: req.body.photo,
		stock: req.body.stock,
		description: req.body.description
	});

	product.save(function(error, product) {
		if(error) {
			res.send(500, error.message);
		}

		res.status(200).jsonp(product);
	});
};

exports.findById =function(req,res){
	res.send('Find by ID');
};

exports.updateProducts =function(req,res){
	res.send('Update Product');
};

exports.deleteProduct = function(req,res){
	res.send('Delete Product');
};
*/

exports.findAllProducts = function(req, res) {
 	console.log('Get all Products')
 	
 	Product.find(function(error,productList){

 		if (error) {
 			res.send(500,error.message);
 		}

 		res.status(200).jsonp(productList);
 	})
 };
 

 exports.findById = function(req, res) {
 	res.send('findById');
 };
 
 exports.addProduct = function(req, res) {
 	console.log(req.body);

	var product = new Product({
		name: req.body.name,
		photo: req.body.photo,
		description: req.body.description,
		stock: req.body.stock
	});

	product.save(function(error, product) {
		if(error) {
			res.send(500, error.message);
		}

		res.status(200).jsonp(product);
	});
 };
 
 exports.updateProduct = function(req, res) {
 	res.send('Update Product');
 };
 
 exports.deleteProduct = function(req, res) {
 	res.send('Delete Product');
 };