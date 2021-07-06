import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { AuthorModel } from './author.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  title:string = "Author List";

  authors: AuthorModel[] = [];

  imageWidth: number = 50;
  imageMargin: number = 2;

  showImage: boolean = false;

  constructor(private authorService: AuthorService,private router: Router,public _auth:AuthService) { }
  toggleImage():void{
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data: any)=>{
      this.authors=JSON.parse(JSON.stringify(data));
    })
  }
  editAuthor(author:any)
  {
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['up']);

  }
  deleteAuthor(author:any)
  {
    this.authorService.deleteAuthor(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(a => a !== author);
      })
  

  }
  singleAuthor(author:any)
  {
    localStorage.setItem("singleAuthorId", author._id.toString());
    this.router.navigate(['singleauthor']);

  }  
}
