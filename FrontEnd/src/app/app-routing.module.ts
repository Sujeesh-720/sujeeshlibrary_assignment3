import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BookListComponent } from './book-list/book-list.component';
import { NewBookComponent } from './new-book/new-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { SingleauthorComponent } from './singleauthor/singleauthor.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'books',component:BookListComponent},
                         { path:'addbook',canActivate:[AuthGuard],component:NewBookComponent},
                        {path:'update',canActivate:[AuthGuard],component:UpdateBookComponent},
                         {path:'authors',component:AuthorListComponent},
                         {path:'addauthor',canActivate:[AuthGuard],component:NewAuthorComponent},
                          {path:'up',canActivate:[AuthGuard],component:UpdateAuthorComponent},
                           {path:'singlebook',component:SinglebookComponent},
                          {path:'singleauthor',component:SingleauthorComponent},
                        {path:'',component:LoginComponent}];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
