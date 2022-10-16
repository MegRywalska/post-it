import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export type UserDTOModel = {
  id: number;
  email: string;
  accountName: string;
  password: string;
  statusAccount: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersList: UserDTOModel[];

  constructor(private http: HttpClient) {
    this.usersList = [];
   }

  ngOnInit(): void {
    this.refreshUsersList();
  }

  private refreshUsersList() {
    this.http.get('http://localhost:9001/user').subscribe((data) => {
      let ListOfUsers = data as UserDTOModel[];

      this.usersList = ListOfUsers;
    })
  }

}
