import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BookService } from '../book.service';
import { BookModel } from './book.model';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  title:string = "Book List";

  books: BookModel[] = [];

  imageWidth: number = 50;
  imageMargin: number = 2;

  showImage: boolean = false;
  

  constructor(private bookService: BookService,private router: Router,public _auth:AuthService) { }
  toggleImage():void{
    this.showImage = !this.showImage;
  }
  

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: any)=>{
      this.books=JSON.parse(JSON.stringify(data));
    })
  }
  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['update']);

  }
  deleteBook(book:any)
  {
    this.bookService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(b => b !== book);
      })
    }
    singleBook(book:any)
    {
      localStorage.setItem("singleBookId", book._id.toString());
      this.router.navigate(['singlebook']);
  
    }    
}
