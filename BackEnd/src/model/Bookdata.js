const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.x73f5.mongodb.net/LIBRARYANG?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    bookId : Number,
    bookName : String,
    bookAuthor : String,
    bookGenre : String,
    description : String,
    starRating :Number,
    imageUrl : String
});

var Bookdata = mongoose.model('book', NewBookSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Bookdata;