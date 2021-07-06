import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { NewBookComponent } from './new-book/new-book.component';
import { BookService } from './book.service';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { AuthorService } from './author.service';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { SingleauthorComponent } from './singleauthor/singleauthor.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    NewBookComponent,
    UpdateBookComponent,
    AuthorListComponent,
    NewAuthorComponent,
    UpdateAuthorComponent,
    SinglebookComponent,
    SingleauthorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BookService,AuthorService,AuthService,AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
