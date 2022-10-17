import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export type  PostCreateDTO={
  text:string
}

const EMPTY_CREATE_POST_DTO = {
  text: '',
}

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postCreateDTO: PostCreateDTO;
  notification: any;


  constructor(private http: HttpClient) {
    this.postCreateDTO = Object.assign({},EMPTY_CREATE_POST_DTO);
    this.notification = null;

  }
  ngOnInit(): void {
  }

  addPost(): void{

    this.http.put('http://localhost:9000/post', this.postCreateDTO).subscribe((data) => {
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
    this.postCreateDTO = Object.assign({},EMPTY_CREATE_POST_DTO);
  }

}
