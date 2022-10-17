import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export type CommentDTO = {
  id: number;
  text: string;
  creationDate: string;
  statusPost: string;
  accountName: string;
}

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments: CommentDTO[];

  constructor(private http: HttpClient) { 
    this.comments = [];
  }

  ngOnInit(): void {
    this.refreshCommentsList();
  }

  private refreshCommentsList(){
    this.http.get('http://localhost:9000/post').subscribe((data) => {
      let ListOfComments = data as CommentDTO[];

      this.comments = ListOfComments;
    })
  }

}
