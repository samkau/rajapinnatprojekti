var sqlctrl = require('./sqlcontroller');
var express = require('express');
var bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
var app = express();
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 50 // limit each IP to 5 requests per windowMs
});

sqlctrl.initConnection();

app.use(limiter);
app.use(bodyParser.urlencoded({
extended: false}));
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, HEAD, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);
    // Pass to next layer of middleware
    next();
});
app.use(bodyParser.json());
var routes = require('./apiroutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'});
});

app.listen(8081, () => {
  console.log("Server running on port 8081");
});
