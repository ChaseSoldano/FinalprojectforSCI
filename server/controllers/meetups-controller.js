var Book = require("../models/meetup");

module.exports.create = function(req, res){
  var book = new Book(req.body);
  book.save(function (err, result){
      res.json(result)
  });
}
module.exports.list = function (req,res){
  Book.find({}, function(err, results){
    res.json(results);
  })
}
module.exports.remove = function (req,res){
  Book.remove({titel:""}, function(err){
    if (err) return handleError(err)
  })
}
