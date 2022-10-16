import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export type AppUser = {
  email: string;
  token: string;
}

export type AuthenticationDTO = {
  username: string;
  password: string;
}

@Injectable()
export class AuthService {
  static loggedUser: AppUser;

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    const authenticationDto = {
      username: email,
      password: password,
    }
    return this.http.post(`http://localhost:9000/login`, authenticationDto,
      {observe: 'response', withCredentials: false});
  }

  setSession(token: string, email:string ){
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  }

  logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
  }

  isLoggedIn() {
    return localStorage.getItem("email")!==null && localStorage.getItem("token")!==null;
  }
}
