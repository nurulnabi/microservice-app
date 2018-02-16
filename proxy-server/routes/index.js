var express = require('express');
var router = express.Router();
var httpProxy = require("http-proxy");
var proxy = httpProxy.createProxyServer();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'You are with NOOR' });
});

router.post("/registerMicroservice", function(req, res){
	console.log("got request to register a microservice", req.body);
	HandleMicroserviceRequest(req.body);
	res.send("Registered");
});

function HandleMicroserviceRequest(body){
	router[body.type](body.route, function(req, res){
		proxy.web(req, res, { target: body.target });
	});
};
module.exports = router;
