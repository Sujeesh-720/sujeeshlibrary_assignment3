import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from '../author-list/author.model';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  title:string = "Add Author";

  constructor(private authorService:AuthorService,private router: Router) { }
  authorItem = new AuthorModel(0,"","","","",0,"");

  ngOnInit(): void {
  }
  AddAuthor(){
    this.authorService.newAuthor(this.authorItem);
    console.log('Called');
    alert('Success');
    this.router.navigate(['authors'])
  }
}
