import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export type CommentCreateDTO = {
  text: string,
}
const EMPTY_CREATE_COMMENT_DTO = {
  text: '',
}

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  commentCreateDTO: CommentCreateDTO;
  notification: any;

  constructor(private http: HttpClient) {
    this.commentCreateDTO = Object.assign({},EMPTY_CREATE_COMMENT_DTO);
    this.notification = null;

  }

  ngOnInit(): void {
  }

  addPost(): void{
    this.http.put('http://localhost:9000/post', this.commentCreateDTO).subscribe((data) => {
      this.clearForm();

      this.notification = 'Post has been posted!';

      setTimeout(()=> {
        this.clearNotification();
      }, 3000)

    });
  }

  clearNotification(): void{
    this.notification = null;
  }

  clearForm(): void{
    this.commentCreateDTO = Object.assign({},EMPTY_CREATE_COMMENT_DTO);
  }

}
