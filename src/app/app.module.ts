import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AuthInterceptor} from "./services/auth-interceptor";
import {AuthGuard} from "./services/auth-guard";
import {AuthService} from "./services/auth-service";
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { AddPostComponent } from './add-post/add-post.component';

import { AddCommentComponent } from './add-comment/add-comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { LoggingUserComponent } from './logging-user/logging-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    NewUserComponent,
    UserListComponent,
    PostListComponent,
    AddPostComponent,
    AddCommentComponent,
    CommentListComponent,
    LoggingUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
