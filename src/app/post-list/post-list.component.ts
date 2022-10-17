import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export type PostDTOModel = {
  id: number;
  text: string;
  creationDate: string;
  statusPost: string;
  numberOfComments: number;
  accountName: string;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: PostDTOModel[]
  
  constructor(private http: HttpClient) {
    this.posts = [];
   }

  ngOnInit(): void {
    this.refreshPostsList();
  }

  private refreshPostsList() {
    this.http.get('http://localhost:9000/post').subscribe((data) => {
      let ListOfPosts = data as PostDTOModel[];

      this.posts = ListOfPosts;
    })
  }

}
