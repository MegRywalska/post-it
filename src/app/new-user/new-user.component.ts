import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export type UserRequstDTO = {
  email: string
  accountName: string
  password: string
}

const  EMPTY_CREATE_USER_DTO = {
  email: '',
  accountName:'',
  password: ''
}

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userDTO: UserRequstDTO;
  notification: any;

  constructor(private http: HttpClient) {
    this.userDTO = Object.assign({}, EMPTY_CREATE_USER_DTO);
    this.notification = null;
   }

  ngOnInit(): void {
  }

  registerUser(): void{
    this.http.put('http://localhost:9001/user/', this.userDTO).subscribe((data) => {
      this.clearForm();

      this.notification = 'Account has been registered!';

      setTimeout(()=> {
        this.clearNotification();
      }, 3000)

    });
  }

      clearForm(): void{
        this.userDTO = Object.assign({}, EMPTY_CREATE_USER_DTO);
      }

      clearNotification(): void{
        this.notification = null;
      }
}




