import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {
   
  bookItem= {
    bookId :'',
    bookName:'',
    bookAuthor:'',
    bookGenre:'',
    description:'',
    starRating:'',
    imageUrl:''}
 
  constructor(private router:Router,private bookService:BookService) { }

  ngOnInit(): void {
   
    let singlebookId = localStorage.getItem("singleBookId");
    this.bookService.getBook(singlebookId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
  })

  }

}
