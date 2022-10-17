import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { LoggingUserComponent } from './logging-user/logging-user.component';
import {AuthGuard} from "./services/auth-guard";
import {UserComponent} from "./user/user.component";
import {PostListComponent} from "./post-list/post-list.component";
import {UserListComponent} from "./user-list/user-list.component";
import {AddPostComponent} from "./add-post/add-post.component";
import {NewUserComponent} from "./new-user/new-user.component";

const routes: Routes = [
  {path: '', redirectTo: "post_list", pathMatch: "full"},
  {path: 'new_user', component: NewUserComponent},
  {path: 'post_list', component: PostListComponent, canActivate: [AuthGuard]},
  {path: 'user_list', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'add_post', component: AddPostComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: UserComponent},
  {path: 'add_comment', component: AddCommentComponent, canActivate: [AuthGuard]},
  {path: 'comment_list', component: CommentListComponent, canActivate: [AuthGuard]},
  {path: 'sign_in', component:LoggingUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
