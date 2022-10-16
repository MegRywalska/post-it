import { Component, OnInit } from '@angular/core';
import {AuthenticationDTO, AuthService} from "../services/auth-service";
import {Router} from "@angular/router";

const EMPTY_AUTH_DTO = {
  username: '',
  password: ''
}
@Component({
  selector: 'app-logging-user',
  templateUrl: './logging-user.component.html',
  styleUrls: ['./logging-user.component.css']
})
export class LoggingUserComponent implements OnInit {
  authenticationDTO: AuthenticationDTO;

  constructor(private router: Router, private authService: AuthService) {
    this.authenticationDTO = Object.assign({}, EMPTY_AUTH_DTO)
  }

  ngOnInit(): void {
  }

  login(){
    console.log('Logging in: ' + this.authenticationDTO.username);

    this.authService.login(this.authenticationDTO.username, this.authenticationDTO.password).subscribe(result => {
      if (result.headers.has('authorization')) {
        const auth = result.headers.get('authorization');
        if (auth != null) {
          const token = auth.substr(7, auth.length - 1);

          this.authService.setSession(token, this.authenticationDTO.username);

          this.router.navigate(['/']);
        }
      }
    })
  }

}
