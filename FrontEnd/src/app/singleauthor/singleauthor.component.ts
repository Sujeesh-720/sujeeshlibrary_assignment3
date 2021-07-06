import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-singleauthor',
  templateUrl: './singleauthor.component.html',
  styleUrls: ['./singleauthor.component.css']
})
export class SingleauthorComponent implements OnInit {

  authorItem= {
    authorId :'',
    authorName:'',
    authorBirth:'',
    authorKnown:'',
    description:'',
    Age:'',
    imageUrl:''}

  constructor(private router:Router,private authorService:AuthorService) { }

  ngOnInit(): void {
    let singleauthorId = localStorage.getItem("singleAuthorId");
    this.authorService.getAuthor(singleauthorId).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
  })
  }

}
