var mongoose = require ("mongoose");

module.exports = mongoose.model("Book",{
    title: String
});
