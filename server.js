var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var meetupsController = require ("./server/controllers/meetups-controller")

mongoose.connect("mongodb://localhost:27017/mean-demo")

app.use(bodyParser())

app.get ('/', function (req, res){
  res.sendfile(__dirname + '/client/views/index.html');
});

app.use("/js",  express.static(__dirname + "/client/js"));

app.get("/api/meetups", meetupsController.list);
app.post("/api/meetups", meetupsController.create );

app.listen(3000, function () {
  console.log("listening");
});
