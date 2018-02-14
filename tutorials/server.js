var express = require ("express");
var app = express();
var morgan = require("morgan");
var mongoose = require('mongoose');
var port = 3000;
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use('appRoutes');


mongoose.connect('mongodb://localhost:27017/tutorial', function(err){
  if(err){
    console.log("not connected to database" + err);
  }else{
    console.log("successfuly connected to mongodb");
  }
});
app.listen(port,function(){
  console.log('running the server on port ' + port);
});
