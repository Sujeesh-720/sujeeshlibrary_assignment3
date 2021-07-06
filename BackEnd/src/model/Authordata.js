const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.x73f5.mongodb.net/LIBRARYANG?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewAuthorSchema = new Schema({
    authorId : Number,
    authorName : String,
    authorBirth : String,
    authorKnown : String,
    description : String,
    Age : Number,
    imageUrl : String
});

var Authordata = mongoose.model('author', NewAuthorSchema);

module.exports = Authordata;