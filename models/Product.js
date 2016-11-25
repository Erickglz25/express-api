var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	name: String,
	photo: String,
	description:String,
	stock: Number
});

module.exports = mongoose.model('Product', productSchema);