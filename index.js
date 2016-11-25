var express = require('express');
var bodyParser = require('body-parser');

var methodOverride = require('method-override');
var mongoose =require('mongoose');
var productsController =require('./controllers/productsController.js');


var app = express();
var products = express.Router();
//var router =express.Router()
/*
mongoose.connect('mongoose://localhost/products');

var db = mongoose.connection;

db.on('error', console.log.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connection Success');
})
*/




app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use('/api',products);

app.get('/',function(req,res){
	res.send('hello world');

});

products.route('/products')
.get(productsController.findAllProducts)
.post(productsController.addProduct);

products.route('/products/:id')
.get(productsController.findById)
.post(productsController.updateProduct);


app.set('port',3000);


var server =app.listen(3000, function(){

	console.log('Express server listening in port' + server.address.port)
});