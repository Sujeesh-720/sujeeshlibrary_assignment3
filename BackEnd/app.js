const express = require('express');
const port=process.env.PORT || 3000;
const BookData = require('./src/model/Bookdata');
const AuthorData = require('./src/model/Authordata');

//const User = require('./src/model/user');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken');
var app = new express();
app.use(cors());
app.use(bodyparser.json());

username='admin@gmail.com';
password='12345678';


function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    console.log("a");
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    console.log("b");
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    console.log("c");
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}



//Books datas//
app.get('/books',function(req,res){
  BookData.find()
              .then(function(books){
                res.send(books);
              });
});
app.post('/insert',verifyToken,function(req,res){
  console.log(req.body);
   
  var book = {       
    bookId : req.body.book.bookId,
    bookName : req.body.book.bookName,
    bookAuthor : req.body.book.bookAuthor,
    bookGenre : req.body.book.bookGenre,
    description : req.body.book.description,
    starRating : req.body.book.starRating,
    imageUrl : req.body.book.imageUrl,
}       
var book= new BookData(book);
book.save();
});
app.get('/books',function(req,res){

BookData.find()
            .then(function(books){
                res.send(books);
            });
});
   
   
app.get('/singlebook/:id',  (req, res) => {
  
  const id = req.params.id;
    BookData.findOne({"_id":id})
    .then((book)=>{
        res.send(book);
    });
})

app.put('/update',verifyToken,(req,res)=>{
  console.log(req.body)
  id=req.body._id,
  bookId= req.body.bookId,
  bookName = req.body.bookName,
  bookAuthor = req.body.bookAuthor,
  bookGenre = req.body.bookGenre,
  description = req.body.description,
  starRating = req.body.starRating,
  imageUrl = req.body.imageUrl
 BookData.findByIdAndUpdate({"_id":id},
                              {$set:{"bookId":bookId,
                              "bookName":bookName,
                              "bookAuthor":bookAuthor,
                              "bookGenre":bookGenre,
                              "description":description,
                              "starRating":starRating,
                              "imageUrl":imageUrl}})
 .then(function(){
     res.send();
})
})

app.delete('/remove/:id',verifyToken,(req,res)=>{

 id = req.params.id;
 BookData.findByIdAndDelete({"_id":id})
 .then(()=>{
     console.log('success')
     res.send();
 })
})
//Book data ends//

   
    
   


app.post('/login', (req, res) => {
    let userData = req.body
    
      
        if (username !== userData.username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } 
         else{
           let payload = {subject:username+password}
           let token = jwt.sign(payload,'secretKey')
           res.status(200).send({token})
         }
      
    })





//Authors datas///
   app.get('/authors',function(req,res){
    
    AuthorData.find()
              .then(function(authors){
                 res.send(authors);
                });
  });
  app.post('/input',verifyToken,function(req,res){
   
    console.log(req.body);
     
    var author = {       
      authorId : req.body.author.authorId,
      authorName : req.body.author.authorName,
      authorBirth : req.body.author.authorBirth,
      authorKnown : req.body.author.authorKnown,
      description : req.body.author.description,
      Age : req.body.author.Age,
      imageUrl : req.body.author.imageUrl,
  }       
  var author= new AuthorData(author);
  author.save();
  });
  app.get('/authors',function(req,res){
  
  AuthorData.find()
              .then(function(authors){
                  res.send(authors);
              });
  });


  app.get('/singleauthor/:id',  (req, res) => {
  
    const id = req.params.id;
      AuthorData.findOne({"_id":id})
      .then((author)=>{
          res.send(author);
      });
  })


  app.put('/up',verifyToken,(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    authorId= req.body.authorId,
    authorName = req.body.authorName,
    authorBirth = req.body.authorBirth,
    authorKnown = req.body.authorKnown,
    description = req.body.description,
    Age = req.body.Age,
    imageUrl = req.body.imageUrl
   AuthorData.findByIdAndUpdate({"_id":id},
                                {$set:{"authorId":authorId,
                                "authorName":authorName,
                                "authorBirth":authorBirth,
                                "authorKnown":authorKnown,
                                "description":description,
                                "Age":Age,
                                "imageUrl":imageUrl}})
   .then(function(){
       res.send();
  })
 })
 
app.delete('/removeauthor/:id',verifyToken,(req,res)=>{
 
   id = req.params.id;
   AuthorData.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
 })
//Author ends

app.listen(port,function(){
  console.log("Server Ready " +port);
});

