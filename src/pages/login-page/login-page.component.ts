import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [LoginService]
})
export class LoginPageComponent implements OnInit {

  title: String = 'Please login to go to dashboard';
  isUsername: Boolean = false;
  isPassword: Boolean = false;
  userObj;

  constructor(protected loginService: LoginService, protected router: Router) {}


  ngOnInit() {
    localStorage.setItem('Username', 'admin');
    localStorage.setItem('Password', 'admin');
    this.userObj = this.loginService.getLoginDetails();
  }

  testUserDetails(userdetails) {
      sessionStorage.setItem('AuthToken', 'sa6d456sd4a4ad6s');
      this.router.navigate(['/dashboard']);
      this.isPassword = false;
      this.isUsername = false;
    }
}
