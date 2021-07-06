import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {


  items= {
    authorId :'',
    authorName:'',
    authorBirth:'',
    authorKnown:'',
    description:'',
    Age:'',
    imageUrl:''}


  constructor(private http:HttpClient) { }

  getAuthor(id:any){
    return this.http.get("http://localhost:3000/singleauthor/"+id);
  }
  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  }
  newAuthor(items: any){
    return this.http.post("http://localhost:3000/input",{"author":items})
    .subscribe(data=>{console.log(data)})
  }
  deleteAuthor(id: any){
    return this.http.delete("http://localhost:3000/removeauthor/"+id)
    
  }
  
  editAuthor(author:any) {
    console.log('client update');
    return this.http.put("http://localhost:3000/up",author)
    .subscribe(data=>{console.log(data)})
  }

}
